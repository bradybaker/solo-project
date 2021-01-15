import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2'
import '../App/App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 250,
        // margin: 20,
        // flexGrow: 1,
        // height: 300,
    },
    media: {
        height: 200,
        // paddingTop: '40%', // 16:9
    },
}));

export default function BrandCards() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const userBrands = useSelector(store => store.userBrandReducer)

    const goToCloset = (e, name, id) => {
        console.log('Going to this brands closet!', id)

        history.push({
            pathname: `/closet`,
            search: `?brandName=${name}&brandid=${id}`,
        });
    }

    const handleDelete = (e, id) => {
        console.log('Clicking delete', id)
        Swal.fire({
            title: 'Are you sure?',
            text: 'The Brand and clothing items will be removed from your profile!',
            icon: 'warning',
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Brand Deleted',
                    'success',
                    false
                ) // end Swal IF
                dispatch({ type: 'DELETE_USER_BRAND', payload: id })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Brand not deleted',
                    'error',
                    false
                )
            } //end else if
        }) // end Swal .then
    }



    return (
        <div className='brandCardContainer'>
            {
                userBrands.map(item => {
                    return (
                        <div key={item.id}  >
                            <Card className={classes.root}>
                                <CardHeader
                                    title={item.name}
                                />
                                <CardMedia
                                    onClick={(e) => goToCloset(e, item.name, item.id)}
                                    className={classes.media}
                                    image={item.logo}
                                />
                                <DeleteIcon style={{ fontSize: 25, marginLeft: 210, marginTop: 5 }} onClick={(e) => handleDelete(e, item.id)} />
                            </Card>
                        </ div>
                    )
                })
            }
        </div>
    );
}
