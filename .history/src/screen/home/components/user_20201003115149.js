import React from 'react';
import { Card, CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const user = ({ data }) => {
    return (
        <Card style={{ maxWidth: 345, backgroundColor: 'grey' }}>
            <CardHeader title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016">

            </CardHeader>
            <CardActionArea>
                <CardMedia
                    style={{ height: 140 }}
                    image="../../../icons/user.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">
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
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}

export default user;