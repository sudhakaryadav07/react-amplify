import React, { Component } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { body, bodyContext } from '../../styles/style';

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
                        <Grid container sm={12} spacing={2} style={{ margin: 0 }}>
                            <Grid container item sm={12} style={{ height: 100 }}>
                                <Grid container item sm={4}>
                                    <Grid item sm={12} style={{ height: '80%' }}>
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img alt="" style={{ height: '92%', width: '39%' }} src={require(`../../icons/user.png`)} />
                                </div>
                                    </Grid>
                                    <Grid item sm={12} style={{ height: '20%' }}>
                                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography color="textSecondary" style={{ fontFamily: 'system-ui', fontSize: 15, color: 'black' }}>
                                                dfsdf
                                    </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container sm={8}>ddsfsdffsdf</Grid>
                            </Grid>
                            <Grid item sm={12} style={{ height: 100 }}>
                                gjgh
                            </Grid>
                        </Grid>
                        {/* <Button color="primary" onClick={() => this.props.history.push('/home')}>Go to Home</Button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;