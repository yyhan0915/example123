import { Button, Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from 'src/components/Layout';
import { useAxios } from 'src/hook/useAxios';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';

const MainPage: React.VFC = () => {
    const navigation = useNavigate();
    const { data, isLoading, refetch, error } = useAxios<INasaApiData>(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    const [item, setItem] = useLocalStorage<INasaApiData[]>('item', []);

    console.log('what is local item?', item);

    if (error) {
        <AppLayout>
            <span>something went wrong</span>
        </AppLayout>;
    }

    return (
        <AppLayout>
            {isLoading || !data ? (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4">{data?.title}</Typography>
                        <img
                            src={data?.url}
                            alt="planet_image"
                            width={340}
                            height={340}
                            style={{ marginTop: 30, marginBottom: 30 }}
                        />
                        <Typography>{data?.date}</Typography>
                        <Typography>{data?.explanation}</Typography>
                        <Typography>{data?.service_version}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 1,
                        }}
                    >
                        <Button variant="contained" onClick={() => refetch()}>
                            Next
                        </Button>
                        <Button variant="contained" onClick={() => setItem([...item, data])}>
                            Save
                        </Button>
                        <Button variant="contained" onClick={() => navigation('/saved-pictures')}>
                            Saved
                        </Button>
                    </Box>
                </>
            )}
        </AppLayout>
    );
};

export default MainPage;
