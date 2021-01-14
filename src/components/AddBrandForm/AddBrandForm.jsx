import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, Slide } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
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


export default function AddBrandForm() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [brandId, setBrandId] = useState('')
    const allBrands = useSelector(store => store.allBrandReducer)
    const userInfo = useSelector(store => store.user)


    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_BRAND' })
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
        dispatch({ type: 'ADD_BRAND', payload: { id: userInfo.id, bId: brandId } })
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
                <DialogTitle id="form-dialog-title">Add a Brand to Your Closet!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Helper Text
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <Autocomplete
                            id="Brand Selector"
                            options={allBrands}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => setBrandId(value.id)}
                            style={{ width: 300, justifyContent: 'center' }}
                            renderInput={(params) => <TextField {...params} label="Brand Name" variant="outlined" />}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={handleClose} color="primary" type='submit'>
                                Add Brand
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

