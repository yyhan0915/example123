import { Grid, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import SideNavigation from './Navigation';

const PREFIX = 'Navigation';

const classes = {
    fixed: `${PREFIX}-fixed`,
    maincontent: `${PREFIX}-maincontent`,
};

const StyledAppLayout = styled('div')(({ theme }) => ({
    height: '100vh',

    [`& .${classes.fixed}`]: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '240px',
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
    },
    [`& .${classes.maincontent}`]: {
        flexGrow: 1,
        padding: 20,
    },
}));

interface IProps {
    children?: ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
    return (
        <StyledAppLayout>
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={2} className={classes.fixed}>
                    <SideNavigation />
                </Grid>
                <Grid item xs={10} container direction="column" className={classes.maincontent}>
                    {children}
                </Grid>
            </Grid>
        </StyledAppLayout>
    );
};

export default AppLayout;
