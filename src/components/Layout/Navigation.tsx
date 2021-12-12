import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { Fab, List, ListItem, ListItemIcon, ListItemText, styled, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteURL } from 'src/models/types';

const PREFIX = 'Navigation';

const classes = {
    selected: `${PREFIX}-selected`,
    listItem: `${PREFIX}-listItem`,
};

const StyledNavigation = styled(List)(({ theme }) => ({
    width: '100%',
    height: '100%',
    maxWidth: theme.spacing(30),
    minWidth: theme.spacing(15),
    color: theme.palette.primary.contrastText,

    [`& .${classes.selected}`]: {
        color: theme.palette.info.main,
        backgroundColor: '#e4dcdc',
    },

    [`& .${classes.listItem}`]: {
        padding: theme.spacing(2),
        '&:hover': {
            backgroundColor: '#e4dcdc',
            color: theme.palette.info.main,
        },
    },
}));

const Navigation: React.VFC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return matches ? (
        <StyledNavigation>
            <ListItem
                className={clsx({ [classes.listItem]: true, [classes.selected]: location.pathname === RouteURL.HOME })}
                button
                onClick={() => navigate(RouteURL.HOME)}
            >
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
            </ListItem>
            <ListItem
                className={clsx({
                    [classes.listItem]: true,
                    [classes.selected]: location.pathname === RouteURL.SAVED_PICTURE_LIST,
                })}
                button
                onClick={() => navigate(RouteURL.SAVED_PICTURE_LIST)}
            >
                <ListItemIcon>
                    <FormatListBulletedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Picture List" />
            </ListItem>
        </StyledNavigation>
    ) : (
        <Fab sx={{ position: 'fixed', bottom: 16, right: 16 }} color="primary">
            <ArrowForwardIosIcon
                onClick={() => {
                    if (location.pathname === RouteURL.HOME) {
                        navigate(RouteURL.SAVED_PICTURE_LIST);
                    } else {
                        navigate(RouteURL.HOME);
                    }
                }}
            />
        </Fab>
    );
};

export default Navigation;
