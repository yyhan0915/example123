import React from 'react';
import { NoDataDisplay } from 'src/components/atom';
import { AppLayout } from 'src/components/layout';
import { PlanetDataList } from 'src/components/view';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';

const SavedListPage: React.VFC = () => {
    const [planetData] = useLocalStorage<INasaApiData[]>('items', []);

    return (
        <AppLayout>
            {Array.isArray(planetData) && planetData.length > 0 ? (
                <PlanetDataList planetDataList={planetData} />
            ) : (
                <NoDataDisplay />
            )}
        </AppLayout>
    );
};

export default SavedListPage;
