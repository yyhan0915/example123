import { Grid } from '@mui/material';
import React from 'react';
import { ItemCard, NoDataDisplay } from 'src/components/atom';
import { INasaApiData } from 'src/models/interface';

interface IProps {
    planetDataList: INasaApiData[];
}

const PlanetDataList: React.FC<IProps> = ({ planetDataList }) => {
    return Array.isArray(planetDataList) && planetDataList.length > 0 ? (
        <Grid container spacing={2}>
            {planetDataList.map(planet => (
                <Grid item xs={4} key={planet.url}>
                    <ItemCard
                        title={planet.title}
                        description={planet.explanation}
                        imageUrl={planet.url}
                        altText={planet.title}
                    />
                </Grid>
            ))}
        </Grid>
    ) : (
        <NoDataDisplay />
    );
};

export default PlanetDataList;
