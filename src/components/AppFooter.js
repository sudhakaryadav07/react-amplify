import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Container, Typography, TextField } from '@material-ui/core';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'ghostwhite',
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: 'flex',
    },
    icon: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: theme.palette.warning.main,
        // marginRight: theme.spacing(1),
        // '&:hover': {
        //     backgroundColor: theme.palette.warning.dark,
        // },
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
}));

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Français',
    },
];

export default function AppFooter() {
    const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item md={4} >
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems='center'
                            className={classes.iconsWrapper}
                            spacing={2}
                        >
                            <Grid item className={classes.icons}>
                                <a href="https://material-ui.com/" className={classes.icon}>
                                    <img src={require('../icons/twitter.png')} height={50} width={50} alt="Twitter" />
                                </a>
                                <a href="https://twitter.com/MaterialUI" className={classes.icon} style={{ marginLeft: '5%' }}>
                                    <img src={require('../icons/facebook.png')} height={40} width={40} alt="Facebook" />
                                </a>
                                <a href="https://twitter.com/MaterialUI" className={classes.icon} style={{ marginLeft: '10%' }}>
                                    <img src={require('../icons/instagram.png')} height={40} width={40} alt="Instagram" />
                                </a>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={4}>
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems='center'
                            className={classes.iconsWrapper}
                            spacing={2}>
                            <Typography variant="h6" marked="left" gutterBottom>
                                Legal
                            </Typography>
                            <ul className={classes.list}>
                                <li className={classes.listItem}>
                                    <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                                </li>
                                <li className={classes.listItem}>
                                    <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>

                    <Grid item md={4} >
                    <Grid container
                            direction="column"
                            justify="center"
                            alignItems='center'
                            className={classes.iconsWrapper}
                            spacing={2}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Language
                        </Typography>
                        <TextField
                            select
                            SelectProps={{
                                native: true,
                            }}
                            className={classes.language}
                        >
                            {LANGUAGES.map((language) => (
                                <option value={language.code} key={language.code}>
                                    {language.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    </Grid>

                    <Grid item sm={12} container justify="center">
                        <Typography variant="caption">
                            {'Icons made by '}
                            <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                                Freepik
                            </Link>
                            {' from '}
                            <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                                www.flaticon.com
                            </Link>
                            {' is licensed by '}
                            <Link
                                href="https://creativecommons.org/licenses/by/3.0/"
                                title="Creative Commons BY 3.0"
                                target="_blank"
                                rel="noopener noreferrer">
                                CC 3.0 BY
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}