import React from 'react';
import { Card, CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const user = ({ data,i }) => {
    return (
        <Card style={{ margin: 10, maxWidth: 345, position: 'relative' }}>
            <CardHeader title={data.name} subheader={data.title} />
            <CardActionArea>
                <CardMedia
                    style={{ height: 140 }}
                    image={`../../../icons/1.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
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