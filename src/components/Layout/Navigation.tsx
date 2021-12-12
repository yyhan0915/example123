import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

    return (
        <StyledNavigation>
            <ListItem
                className={clsx({ [classes.listItem]: true, [classes.selected]: location.pathname === '/' })}
                button
                onClick={() => navigate('/')}
            >
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
            </ListItem>
            <ListItem
                className={clsx({
                    [classes.listItem]: true,
                    [classes.selected]: location.pathname === '/saved-pictures',
                })}
                button
                onClick={() => navigate('/saved-pictures')}
            >
                <ListItemIcon>
                    <FormatListBulletedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Picture List" />
            </ListItem>
        </StyledNavigation>
    );
};

export default Navigation;
