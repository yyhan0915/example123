import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import NoDataDisplay from 'src/components/atom/NoDataDisplay';
import { AppLayout } from 'src/components/Layout';
import DisplayPlanet from 'src/components/organisms/PlanetDataDisplay';
import SaveButtonContainer from 'src/components/organisms/SaveButtonContainer';
import { useAxios } from 'src/hook/useAxios';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';
import { getInitialPlanetData } from 'src/util';
import getRandomDate from 'src/util/getRandomDate';

const MainPage: React.VFC = () => {
    const [items] = useLocalStorage<INasaApiData[]>('items', []);

    const randomDate = getRandomDate(new Date('2000-01-01'), items);

    const { data, isLoading, refetch, error } = useAxios<INasaApiData[]>(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${randomDate}&end_date=${randomDate}`,
        undefined,
        true,
    );

    const planetData = Array.isArray(data) ? data[0] : getInitialPlanetData();

    useEffect(() => {
        if (items) {
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
        return (
            <AppLayout>
                <NoDataDisplay
                    textMessage="Something went wrong, please try again"
                    hasRetryButton
                    retryHandler={refetch}
                />
            </AppLayout>
        );
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
                    <DisplayPlanet planetData={planetData} />
                    <SaveButtonContainer fetchedData={planetData} onApiFetchHandler={refetch} />
                </>
            )}
        </AppLayout>
    );
};

export default MainPage;
