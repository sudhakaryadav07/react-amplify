import React from 'react';
import { withStyles, AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { appbar, header, title, ptitle, menuButton } from '../styles/style';

const materialStyles = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
})

const AppBar = ({ classes, data, handleClose }) => {
    let { page, openMenu, currentTarget, openSession } = data;
    try {
        return (
            <AppBar style={appbar} position="static">
                <Toolbar style={header}>
                    <Tooltip title={latestCommitId} placement="right">
                        <Typography variant="h6" style={title}>
                            {page}
                        </Typography>
                    </Tooltip>

                    <div className={classes.sectionDesktop}>
                        <IconButton
                            style={menuButton}
                            color="inherit"
                            id="hamburgermenu">
                            <MenuIcon />
                        </IconButton>

                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>

                    <Menu
                        anchorEl={currentTarget} anchorOrigin={dropDownMenu}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={openMenu} onClose={handleCloseMenu}>
                        <MenuItem value="Dashboard" onClick={() => handlePush('/dashboard')}>Dashboard</MenuItem>
                        <MenuItem value="Workspace" onClick={() => handlePush('/workspace')}>Workspace</MenuItem>
                    </Menu>

                    <Menu anchorEl={currentTarget} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSession} onClose={handleCloseProfile}>
                        <MenuItem value="Logout" style={{ justifyContent: 'center' }} >{loginid}</MenuItem>
                        <MenuItem value="Logout" style={{ justifyContent: 'center' }} onClick={() => handleLogout()}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar >
        );
    } catch (e) {
        console.log(e)
    }
}

export default (withStyles(materialStyles))(AppBar);