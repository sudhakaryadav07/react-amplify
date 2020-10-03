import React, { Component } from 'react';
import { Button, Card,CardContent } from '@material-ui/core';
import { AppBar } from '../../components/index';
import { body, bodyContext } from '../../styles/style';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
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
                    <div style={bodyContext}>
                        <Card>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
        </Typography>
                                <Typography variant="h5" component="h2">
                                    be{bull}nev{bull}o{bull}lent
        </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
        </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
          <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Button color="primary" onClick={() => this.props.history.push('/blog')}>Go to Blog</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;