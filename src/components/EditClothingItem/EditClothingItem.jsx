import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import { Button, TextField, Slide } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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


export default function EditClothingItem(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const location = useLocation();
    const selectedCard = useSelector(store => store.edit)
    const [itemName, setItemName] = useState(selectedCard.item_name);
    const [itemSize, setItemSize] = useState(selectedCard.item_size);
    const [itemNote, setItemNote] = useState(selectedCard.item_note);
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
            type: 'EDIT_USER_CLOTHING_ITEM',
            payload:
            {
                id: selectedCard.id,
                itemName: itemName,
                itemSize: itemSize,
                itemNote: itemNote,
                brandID: selectedCard.brand_id,
                brandUrlID: brandUrlID
            }
        })
    }

    return (
        <div>
            <EditIcon style={{ margin: 5 }} type='button' onClick={handleClickOpen}>
            </EditIcon>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"

            >
                <DialogTitle id="form-dialog-title">Editing a clothing item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Helper Text
                    </DialogContentText>
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField
                            required
                            id="Item Name"
                            label="Item Name"
                            value={itemName}
                            onChange={(event) => setItemName(event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="Item Size"
                            label="Item Size"
                            value={itemSize}
                            onChange={(event) => setItemSize(event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="Item Note"
                            label="Item Note"
                            value={itemNote}
                            onChange={(event) => setItemNote(event.target.value)}
                            variant="outlined"
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={handleClose} color="primary" type='submit'>
                                Edit Clothing Item
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}