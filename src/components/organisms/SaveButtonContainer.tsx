import { AlertColor, Box, Button, Snackbar, styled } from '@mui/material';
import { AxiosRequestConfig } from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'src/components/atom';
import { useLocalStorage } from 'src/hook';
import { INasaApiData } from 'src/models/interface';
import { RouteURL } from 'src/models/types';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),

    '& > Button + Button': {
        marginLeft: theme.spacing(1),
    },
}));

const TIME_DURATION = 1_500;

interface ISnackBarOption {
    message: string;
    severity: AlertColor;
}

interface IProps {
    fetchedData: INasaApiData;
    handleApiFetch: (config?: AxiosRequestConfig) => unknown;
}

const SaveButtonContainer: React.FC<IProps> = ({ handleApiFetch, fetchedData }) => {
    const navigation = useNavigate();
    const [items, setItems] = useLocalStorage<INasaApiData[]>('items', []);
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
    const [snackBarOption, setSnackBarOption] = useState<ISnackBarOption>({
        message: 'Planet Item is saved successfully',
        severity: 'success',
    });

    const handleOnSave = useCallback(() => {
        try {
            setItems([...items, fetchedData]);
            setSnackBarOpen(true);
            setTimeout(() => {
                handleApiFetch();
            }, TIME_DURATION);
        } catch (error) {
            setSnackBarOption({ message: 'Something went wrong', severity: 'error' });
            setSnackBarOpen(true);
        }
    }, [fetchedData, handleApiFetch, items, setItems]);

    const handleClose = useCallback(() => {
        setSnackBarOpen(false);
    }, []);

    return (
        <StyledBox>
            <Button variant="contained" onClick={() => handleApiFetch()}>
                Next
            </Button>
            <Button variant="contained" onClick={handleOnSave}>
                Save
            </Button>
            <Button variant="contained" onClick={() => navigation(RouteURL.SAVED_PICTURE_LIST)}>
                Saved
            </Button>

            <Snackbar open={snackBarOpen} autoHideDuration={TIME_DURATION} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackBarOption.severity} sx={{ width: '100%' }}>
                    {snackBarOption.message}
                </Alert>
            </Snackbar>
        </StyledBox>
    );
};

export default SaveButtonContainer;
