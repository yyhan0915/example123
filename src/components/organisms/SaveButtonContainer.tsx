import { Box, Button } from '@mui/material';
import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    fetchedData: INasaApiData;
    onApiFetchHandler: (config?: AxiosRequestConfig<any> | undefined) => unknown;
}

const SaveButtonContainer: React.FC<IProps> = ({ onApiFetchHandler, fetchedData }) => {
    const navigation = useNavigate();
    const [items, setItems] = useLocalStorage<INasaApiData[]>('items', []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 1,
                '& > Button': {
                    marginTop: 2,
                },
                '& > Button + Button': {
                    marginLeft: 2,
                },
            }}
        >
            <Button variant="contained" onClick={() => onApiFetchHandler()}>
                Next
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    setItems([...items, fetchedData]);
                    onApiFetchHandler();
                }}
            >
                Save
            </Button>
            <Button variant="contained" onClick={() => navigation('/saved-pictures')}>
                Saved
            </Button>
        </Box>
    );
};

export default SaveButtonContainer;
