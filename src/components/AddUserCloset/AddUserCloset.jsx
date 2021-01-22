import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, Slide } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


export default function AddUserCloset() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [followedUserID, setFollowedUserID] = useState('')
    const publicUsers = useSelector(store => store.publicUsers)


    useEffect(() => {
        dispatch({ type: 'FETCH_PUBLIC_USERS' })
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
        dispatch({ type: 'FOLLOW_USER', payload: followedUserID })
    }

    return (
        <div>
            <i class="fas fa-plus-circle addCircle" type='button' onClick={handleClickOpen}></i>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="follow-another-user"

            >
                <DialogTitle style={{ textAlign: 'center' }} id="follow-another-user">Follow another user's closet!</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Autocomplete
                            id="user-search"
                            options={publicUsers}
                            getOptionLabel={(option) => option.username}
                            onChange={(event, value) => setFollowedUserID(value)}
                            style={{ width: 300, justifyContent: 'center' }}
                            renderInput={(params) => <TextField {...params} label="Search by Username" variant="outlined" />}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={handleClose} color="primary" type='submit'>
                                Follow Closet
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}