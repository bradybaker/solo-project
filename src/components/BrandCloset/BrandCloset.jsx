import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function BrandCloset() {
    const location = useLocation();
    const dispatch = useDispatch();
    const userClothes = useSelector(store => store.userClothingReducer)
    const classes = useStyles();

    useEffect(() => {
        const urlID = new URLSearchParams(location.search).get('brandid');
        dispatch({ type: 'FETCH_USER_CLOTHING', payload: urlID })
        console.log(urlID)
        // eslint-disable-next-line
    }, [location]);


    return (
        userClothes.map(item => {
            return (
                <div key={item.id}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {item.item_name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {item.item_size}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {item.item_note}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )
        })

    );
}

export default BrandCloset;