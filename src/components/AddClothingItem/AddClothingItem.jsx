import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import { Button, TextField, Slide } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function AddBrandForm() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const location = useLocation();
    const [itemName, setItemName] = useState('');
    const [itemSize, setItemSize] = useState('');
    const [itemNote, setItemNote] = useState('');
    const userClothes = useSelector(store => store.userClothingReducer)
    const brandUrlID = new URLSearchParams(location.search).get('brandid');

    useEffect(() => {
        // dispatch({ type: 'FETCH_USER_CLOTHING', payload: brandUrlID })
        // eslint-disable-next-line
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: 'ADD_USER_CLOTHING_ITEM',
            payload:
            {
                itemName: itemName,
                itemSize: itemSize,
                itemNote: itemNote,
                brandID: userClothes[0]?.brand_id,
                brandUrlID: brandUrlID
            }
        })
    }

    return (
        <div>
            <AddCircleIcon style={{ fontSize: 100, color: green[500] }} type='button' onClick={handleClickOpen}>
            </AddCircleIcon>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"

            >
                <DialogTitle id="form-dialog-title">Add a clothing item to this brand!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Helper Text
                    </DialogContentText>
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField
                            required
                            id="Item Name"
                            label="Item Name"
                            onChange={(event) => setItemName(event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="Item Size"
                            label="Item Size"
                            onChange={(event) => setItemSize(event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="Item Note"
                            label="Item Note"
                            onChange={(event) => setItemNote(event.target.value)}
                            variant="outlined"
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={handleClose} color="primary" type='submit'>
                                Add Clothing Item
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}