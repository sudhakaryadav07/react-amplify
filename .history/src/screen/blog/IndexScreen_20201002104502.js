import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Blog
                <Button onClick={() => this.props.history.push('/blog')}>Go to Home</Button>
            </div>
        );
    }
}

export default Blog;