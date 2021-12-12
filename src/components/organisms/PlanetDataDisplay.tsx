import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { INasaApiData } from 'src/models/interface';

const TitleTypography = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: 24,
}));

const StyledGridImageItem = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
}));

interface IProps {
    planetData: INasaApiData;
}

const PlanetDataDisplay: React.FC<IProps> = ({ planetData }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TitleTypography>{planetData?.title}</TitleTypography>
            </Grid>
            <StyledGridImageItem item xs={12}>
                <img
                    src={planetData?.url}
                    alt="planet_image"
                    width={340}
                    height={340}
                    style={{ marginTop: 30, marginBottom: 30 }}
                />
            </StyledGridImageItem>
            <StyledGridItem item xs={12}>
                <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 500 }}>Date : </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>{planetData?.date}</Typography>
                </Grid>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 500 }}>Description : </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>{planetData?.explanation}</Typography>
                </Grid>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 500 }}>CopyRight : </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>{planetData?.copyright}</Typography>
                </Grid>
            </StyledGridItem>
        </Grid>
    );
};

export default PlanetDataDisplay;
