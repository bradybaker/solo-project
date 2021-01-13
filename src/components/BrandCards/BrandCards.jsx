import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1
    },
    media: {
        height: 0,
        paddingTop: '40%', // 16:9
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const userBrands = useSelector(store => store.userBrandReducer)


    return (
        userBrands.map(item => {
            return (
                <div>
                    <Card className={classes.root}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={item.name}
                        />
                        <CardMedia
                            className={classes.media}
                            image={item.logo}
                        />
                    </Card>
                </div>
            )
        })

    );
}
