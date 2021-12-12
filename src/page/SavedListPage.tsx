import { Grid } from '@mui/material';
import React from 'react';
import ItemCard from 'src/components/atom/ItemCard';
import { AppLayout } from 'src/components/Layout';
import useLocalStorage from 'src/hook/useLocalStorage';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    sample?: string;
}

const SavedListPage: React.VFC<IProps> = () => {
    const [items] = useLocalStorage<INasaApiData[]>('item', [
        {
            title: '',
            explanation: '',
            url: '',
            copyright: '',
            date: '',
            hdurl: '',
            media_type: '',
            service_version: '',
        },
    ]);

    return (
        <AppLayout>
            <Grid container spacing={2}>
                {items.map(item => (
                    <Grid item xs={4}>
                        <ItemCard
                            title={item.title}
                            description={item.explanation}
                            imageUrl={item.url}
                            altText={item.title}
                        />
                    </Grid>
                ))}
            </Grid>
        </AppLayout>
    );
};

export default SavedListPage;
