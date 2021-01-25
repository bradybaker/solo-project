import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import { Button, TextField, Slide } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '35ch',
            height: 'auto',
            display: 'flex'
        },
    },
}));


export default function EditClothingItem(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const location = useLocation();
    const userInfo = useSelector(store => store.user)
    const [itemName, setItemName] = useState(props.itemName);
    const [itemSize, setItemSize] = useState(props.itemSize);
    const [itemNote, setItemNote] = useState(props.itemNote);
    const brandUrlID = new URLSearchParams(location.search).get('brandid');

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
                id: props.itemID,
                itemName: itemName,
                itemSize: itemSize,
                itemNote: itemNote,
                brandUrlID: brandUrlID,
                userID: userInfo.id
            }
        })
    }

    return (
        <div>
            <i
                style={{ marginRight: 40 }}
                className="fas fa-edit"
                onClick={handleClickOpen}>
            </i>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"

            >
                <DialogTitle style={{ textAlign: 'center' }} id="form-dialog-title">Editing a Clothing Item</DialogTitle>
                <DialogContent>
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
                        <DialogActions style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button onClick={handleClose} variant='contained' color="primary" type='submit'>
                                Edit Clothing Item
                        </Button>
                            <Button onClick={handleClose} variant='contained' color="secondary">
                                Cancel
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}