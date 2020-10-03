import React from 'react';
import { withRouter } from 'react-router-dom';
import {withStyles, AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
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

const AppBar = ({ page, handleGoToPage }) => {

    try {
        return (
            <AppBar style={appbar} position="static">
                <Toolbar style={header}>
                    <Tooltip title={latestCommitId} placement="right">
                        <Typography variant="h6" style={title}>
                            <img className="logo" alt="" src={require("../icon/alfalab.png")} />
                        </Typography>
                    </Tooltip>
                    <Typography variant="h6" noWrap style={ptitle}>{clientName + " | " + projectName}</Typography>

                    <div className={classes.sectionDesktop}>

                        <IconButton
                            onClick={handleMenuClick}
                            style={menuButton}
                            color="inherit"
                            id="hamburgermenu">
                            <MenuIcon />
                        </IconButton>

                        <IconButton
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>

                    <Menu id="menu-appbar" anchorEl={currentTarget} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={openMenu} onClose={handleCloseMenu}>

                        <MenuItem value="Dashboard" onClick={() => handlePush('/dashboard')}>Dashboard</MenuItem>
                        <MenuItem value="Workspace" onClick={() => handlePush('/workspace')}>Workspace</MenuItem>
                        {role === "manager" ? <MenuItem value="Report" onClick={() => handlePush('/report')}>Report</MenuItem> : null}
                        {role === "manager" ? <MenuItem value="Review" onClick={() => handlePush('/woreview')}>Workorder</MenuItem> : null}
                        {role === "manager" ? <MenuItem value="Admin" onClick={() => handlePush('/user')}>Admin</MenuItem> : null}
                    </Menu>

                    <Menu id="menu-appbar" anchorEl={currentTarget} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={openprofile} onClose={handleCloseProfile}>
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

export default withRouter((withStyles(materialStyles)(AppBar));