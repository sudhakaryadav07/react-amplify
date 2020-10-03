import React from 'react';
import { Card, CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const user = ({ data, i }) => {
    return (
        <Card style={{ margin: 10, maxWidth: 345, position: 'relative' }}>
            <CardHeader title={data.name} subheader={data.title} />
            <CardActionArea>
                <CardMedia>
                    <img
                        alt=""
                        src={require(`../../../../icons/${i + 1}.jpg`)}
                        style={{ width: '100%', height: 180 }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.shortSummary}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read More
        </Button>
            </CardActions>
        </Card>
    );
}

export default user;