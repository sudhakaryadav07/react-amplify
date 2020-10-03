import React from 'react';
import { withStyles, AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { appbar, header, title, menuButton, dropDownMenu } from '../styles/style';

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
                        anchorEl={currentTarget}
                        anchorOrigin={dropDownMenu}
                        keepMounted
                        transformOrigin={dropDownMenu}
                        open={openMenu}
                        onClose={() => handleClose('openMenu')}>
                        <MenuItem>Link 1</MenuItem>
                        <MenuItem>Link 2</MenuItem>
                    </Menu>

                    <Menu
                        anchorEl={currentTarget}
                        anchorOrigin={dropDownMenu}
                        keepMounted
                        transformOrigin={dropDownMenu}
                        open={openSession}
                        onClose={() => handleClose('openSession')}>
                        <MenuItem style={{ justifyContent: 'center' }} >johndoe@gmail.com</MenuItem>
                        <MenuItem style={{ justifyContent: 'center' }} >Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar >
        );
    } catch (e) {
        console.log(e)
    }
}

export default (withStyles(materialStyles))(AppBar);