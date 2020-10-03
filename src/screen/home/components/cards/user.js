import React from 'react';
import { Card, CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const user = ({ data, i }) => {
    return (
        <Card style={{backgroundColor:'ghostwhite', margin: 10, maxWidth: 345, position: 'relative' }}>
            <CardHeader title={data.name} subheader={data.title} />
            <CardActionArea>
                <CardMedia>
                    <img
                        alt=""
                        src={require(`../../../../icons/${data.name}.jpg`)}
                        style={{ width: '100%', height: 180 }}
                    />
                </CardMedia>
                <CardContent style={{ padding: 10 }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.shortSummary}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="subtitle2" style={{ cursor: 'pointer' }}>
                    Read More...
        </Typography>
            </CardActions>
        </Card>
    );
}

export default user;