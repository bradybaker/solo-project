import React, { useEffect } from 'react';
import AddClothingItem from '../AddClothingItem/AddClothingItem.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2'
import EditClothingItem from '../EditClothingItem/EditClothingItem.jsx';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    typography: {
        padding: theme.spacing(2),
    },
}));


function BrandCloset() {
    const location = useLocation();
    const dispatch = useDispatch();
    const userClothes = useSelector(store => store.userClothingReducer)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const params = new URLSearchParams(location.search.substring(1))
    const brandUrlName = params.get('brandName')
    const brandUrlID = params.get('brandid');
    const selectedCard = useSelector(store => store.edit)

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_CLOTHING', payload: brandUrlID })
        console.log('Brand URL ID number', brandUrlID)
        // eslint-disable-next-line
    }, [location]);

    const handleClick = (event, item) => {
        setAnchorEl(event.currentTarget);
        dispatch({ type: 'SEND_EDIT_INFORMATION', payload: item })
        console.log('id to edit', item)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleDelete = (selectedID) => {
        console.log('Clicking delete', id)
        Swal.fire({
            title: 'Are you sure?',
            text: 'This clothing item will be removed from the closet',
            icon: 'warning',
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Clothing Item Deleted',
                    'success',
                    false
                ) // end Swal IF
                dispatch({ type: 'DELETE_USER_CLOTHING_ITEM', payload: { id: selectedID, brandUrlID: brandUrlID } })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Clothing item was not deleted',
                    'error',
                    false
                )
            } //end else if
        }) // end Swal .then
    }

    const handleEdit = (id) => {

        console.log('id to edit', id)
    }


    return (
        <div>
            <h1>Your {brandUrlName} Closet</h1>
            <div>
                {
                    userClothes.map(item => {
                        return (
                            <div key={item.id}>
                                <Card className={classes.root} variant="outlined" >
                                    <CardContent>
                                        <IconButton aria-label="settings" onClick={(e) => handleClick(e, item)} style={{ marginLeft: 200, paddingTop: 1 }} >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                        >

                                            <EditClothingItem />
                                            <DeleteIcon onClick={() => handleDelete(selectedCard.id)} style={{ margin: 5 }} />

                                        </Popover>
                                        <Typography variant="h5" component="h2" >
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
                }
            </div>
            <AddClothingItem />

        </div >
    );
}

export default BrandCloset;