import { Grid, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import SideNavigation from './Navigation';

const PREFIX = 'Navigation';

const classes = {
    root: `${PREFIX}-root`,
    fixed: `${PREFIX}-fixed`,
    maincontent: `${PREFIX}-maincontent`,
    titlepad: `${PREFIX}-titlepad`,
};

const StyledAppLayout = styled('div')(() => ({
    [`& .${classes.root}`]: {
        flexGrow: 1,
    },
    [`& .${classes.fixed}`]: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '240px',
    },
    [`& .${classes.maincontent}`]: {
        flexGrow: 1,
        padding: 20,
    },
    [`& .${classes.titlepad}`]: {
        paddingBottom: 20,
    },
}));

interface IProps {
    children?: ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
    return (
        <StyledAppLayout className={classes.root}>
            <Grid container>
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
