import { Grid } from '@mui/material';
import React from 'react';
import ItemCard from 'src/components/atom/ItemCard';
import NoDataDisplay from 'src/components/atom/NoDataDisplay';
import { AppLayout } from 'src/components/Layout';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    sample?: string;
}

const SavedListPage: React.VFC<IProps> = () => {
    const [items] = useLocalStorage<INasaApiData[]>('items', []);

    return (
        <AppLayout>
            {Array.isArray(items) && items.length > 0 ? (
                <Grid container spacing={2}>
                    {items.map(item => (
                        <Grid item xs={4} key={item.url}>
                            <ItemCard
                                title={item.title}
                                description={item.explanation}
                                imageUrl={item.url}
                                altText={item.title}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <NoDataDisplay />
            )}
        </AppLayout>
    );
};

export default SavedListPage;
