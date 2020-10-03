import React from 'react';
import { withStyles, AppBar, Menu, MenuItem, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';
import { appbar, header, title, dropDownMenu } from '../styles/style';

const materialStyles = theme => ({
    sectionDesktop: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end'
    }
})

const Appbar = ({ classes, data, openDropDown, resetComponent }) => {
    let { page, openMenu, currentTarget, openSession } = data;
    try {
        return (
            <div style={{ height: '9vh', padding: 0 }}>
                <AppBar style={appbar} >
                    <Toolbar className="appbartoolbar" style={header}>
                        <Typography variant="h6" style={title}>
                            {page}
                        </Typography>

                        <div className={classes.sectionDesktop}>
                            <IconButton
                            onClick={() => openDropDown('openMenu', true)}
                            color="inherit" >
                            <MenuIcon />
                        </IconButton>

                            <IconButton
                                onClick={() => openDropDown('openSession', true)}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </div>

                        <Menu
                        anchorEl={currentTarget}
                        anchorOrigin={dropDownMenu}
                        keepMounted
                        transformOrigin={dropDownMenu}
                        open={openMenu}
                        onClose={() => resetComponent('openMenu')}>
                        <MenuItem>Link 1</MenuItem>
                        <MenuItem>Link 2</MenuItem>
                    </Menu>

                        <Menu
                            anchorEl={currentTarget}
                            anchorOrigin={dropDownMenu}
                            keepMounted
                            transformOrigin={dropDownMenu}
                            open={openSession}
                            onClose={() => resetComponent('openSession')}>
                            <MenuItem style={{ justifyContent: 'center' }} >johndoe@gmail.com</MenuItem>
                            <MenuItem style={{ justifyContent: 'center' }} >Logout</MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar >
            </div>
        );
    } catch (e) {
        console.log(e)
    }
}

export default (withStyles(materialStyles))(Appbar);