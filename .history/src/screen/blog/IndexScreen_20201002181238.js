import React, { Component } from 'react';
import { Button, Paper, Typography, Grid } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { body, bodyContext } from '../../styles/style';
import { USER } from '../../data/data';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Blog",
            openMenu: false,
            openSession: false,
            currentTarget: null
        }
    }

    refreshComponent = async (key) => this.setState({ [key]: null });
    resetComponent = async (key) => this.setState({ [key]: null });

    openDropDown = async (key, value) => this.setState({ [key]: value });

    renderAppBar() {
        let { page, openMenu, openSession, currentTarget } = this.state;
        let data = { page, openMenu, openSession, currentTarget };
        return (
            <AppBar
                data={data}
                openDropDown={this.openDropDown}
                resetComponent={this.resetComponent}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderAppBar()}
                <div style={body}>
                    <div style={{ ...bodyContext, paddingTop: 10, paddingBottom: 10 }}>
                        <Grid sm={12} spacing={2} style={{ margin: 0 }}>
                            <Grid container sm={12} spacing={2} style={{ margin: 0, height: 230 }}>
                                <Grid item sm={4} >
                                    <Grid item sm={12} style={{ height: '80%' }}>
                                        <Paper >
                                            <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img alt="" style={{ height: '78%', width: '50%' }} src={require(`../../icons/user.png`)} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item sm={12} style={{ height: '18%' }}>
                                        <Paper style={{ height: '100%' }}>
                                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                                    {USER[0].name} - {USER[0].title}
                                                </Typography>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid item sm={8}>
                                    <Paper style={{ padding: 5 }}>
                                        <Typography color="textSecondary" style={{ height: 200, overflow: 'auto', fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                            {USER[0].about}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container sm={12} spacing={2} style={{ margin: 0, padding: 6, height: 230 }}>
                                <Grid item sm={4}>
                                    <Paper style={{height:'100%' }}>
                                        <div style={{display:'flex',alignItems:'center',paddingLeft:10, height: '20%',borderTopLeftRadius:5,borderTopRightRadius:5, backgroundColor: 'ghostwhite' }}>
                                            <Typography color="textSecondary" style={{ overflow: 'auto', fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                                Article 1
                                            </Typography>
                                        </div>
                                        <div style={{ height: '80%',padding:'5px 5px 0px 5px' }}>
                                            <Typography color="textSecondary" style={{ height: 154, overflow: 'auto', fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                                {USER[0].about}
                                            </Typography>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4} >
                                <Paper style={{height:'100%' }}>
                                        <div style={{display:'flex',alignItems:'center',paddingLeft:10, height: '20%',borderTopLeftRadius:5,borderTopRightRadius:5, backgroundColor: '#888' }}>
                                            <Typography color="textSecondary" style={{ overflow: 'auto', fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                                Article 2
                                            </Typography>
                                        </div>
                                        <div style={{ height: '80%',padding:'5px 5px 0px 5px' }}>
                                            <Typography color="textSecondary" style={{ height: 154, overflow: 'auto', fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                                {USER[0].about}
                                            </Typography>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4} >
                                <Paper style={{height:'100%' }}>
                                        <div style={{display:'flex',alignItems:'center',paddingLeft:10, height: '20%',borderTopLeftRadius:5,borderTopRightRadius:5, backgroundColor: '#888' }}>
                                            <Typography color="textSecondary" style={{ overflow: 'auto', fontFamily: 'system-ui', fontSize: 20, color: 'black' }}>
                                                Article 3
                                            </Typography>
                                        </div>
                                        <div style={{ height: '80%',padding:'5px 5px 0px 5px' }}>
                                            <Typography color="textSecondary" style={{ height: 154, overflow: 'auto', fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                                {USER[0].about}
                                            </Typography>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div >
        );
    }
}

export default Blog;