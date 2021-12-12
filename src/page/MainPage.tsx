import { Box, CircularProgress, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { NoDataDisplay } from 'src/components/atom';
import { AppLayout } from 'src/components/layout';
import { PlanetDataBox } from 'src/components/view';
import { useAxios, useLocalStorage } from 'src/hook';
import { INasaApiData } from 'src/models/interface';
import { getInitialPlanetData, getRandomDate } from 'src/util';

const StyledLoadingBox = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

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

    if (isLoading) {
        return (
            <AppLayout>
                <StyledLoadingBox>
                    <CircularProgress />
                </StyledLoadingBox>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            {!data ? (
                <NoDataDisplay textMessage="No date fetched, please try again" hasRetryButton retryHandler={refetch} />
            ) : (
                <PlanetDataBox handleApiFetch={refetch} planetData={planetData} />
            )}
        </AppLayout>
    );
};

export default MainPage;
