import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        color: theme.palette.common.white,
      },
    title: {
        fontSize: 24,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
    toolbarStyle: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70,
        },
    },
});

function Appbar(props) {
        const { classes } = props;
        return (
            <div>
                <AppBar elevation={0} position="static" className={classes.root}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.left} />
                        <Link
                            variant="h6"
                            underline="none"
                            color="inherit"
                            className={classes.title}
                            href="/premium-themes/onepirate/"
                        >
                            {'onepirate'}
                        </Link>
                        <div className={classes.right}>
                            <Link
                                color="inherit"
                                variant="h6"
                                underline="none"
                                className={classes.rightLink}
                                href="/premium-themes/onepirate/sign-in/"
                            >
                                {'Sign In'}
                            </Link>
                            <Link
                                variant="h6"
                                underline="none"
                                className={clsx(classes.rightLink, classes.linkSecondary)}
                                href="/premium-themes/onepirate/sign-up/"
                            >
                                {'Sign Up'}
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbarStyle} />
            </div>
        );
}

export default withStyles(styles)(Appbar);