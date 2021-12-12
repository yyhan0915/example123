import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PREFIX = 'Navigation';

const classes = {
    container: `${PREFIX}-container`,
    selected: `${PREFIX}-selected`,
};

const StyledNavigation = styled(List)(() => ({
    [`& .${classes.container}`]: {
        width: '100%',
        height: '100vh',
        maxWidth: '224px',
        backgroundColor: '#25282a',
        color: 'white',
        position: 'relative',
        top: 0,
    },
    [`& .${classes.selected}`]: {
        color: 'primary',
    },
}));

const Navigation: React.VFC = () => {
    const navigate = useNavigate();

    return (
        <StyledNavigation className={classes.container}>
            <ListItem button onClick={() => navigate('/')}>
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
            </ListItem>
            <ListItem button onClick={() => navigate('/saved-pictures')}>
                <ListItemIcon>
                    <FormatListBulletedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Picture List" />
            </ListItem>
        </StyledNavigation>
    );
};

export default Navigation;
