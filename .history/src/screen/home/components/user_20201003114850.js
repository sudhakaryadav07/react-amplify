import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card,CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const materialStyles  = (theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const user = ({ data, classes }) => {
    return (
        <Card className={classes.root}>
            <CardHeader title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016">

            </CardHeader>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="../../../icons/user.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(materialStyles)(user);