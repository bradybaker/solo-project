import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Grid, Typography, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green } from '@material-ui/core/colors'

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



export default function AddBrandForm(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [brandId, setBrandId] = useState('')
    const allBrands = useSelector(store => store.allBrandReducer)
    const userInfo = useSelector(store => store.user)

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_BRAND' })
    }, [])


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'ADD_BRAND', payload: { id: userInfo.id, bId: brandId } })
    }


    const body = (
        <div style={modalStyle} className={classes.paper}>
            {JSON.stringify(brandId)}
            <Grid item xs={12}>
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Add A Brand Below!
                            </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        Your favorite brands should populate as you type
                            </Typography>
                    <form onSubmit={handleSubmit}>
                        <Autocomplete
                            id="Brand Selector"
                            options={allBrands}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => setBrandId(value.id)}
                            style={{ width: 300, justifyContent: 'center' }}
                            renderInput={(params) => <TextField {...params} label="Brand Name" variant="outlined" />}
                        />
                        <Button variant='contained' color='secondary' type='submit'>Get Logo!</Button>
                        <Button variant='contained' color='primary' onClick={handleClose}>Cancel</Button>
                    </form>
                </div>
            </Grid>
        </div>
    );

    return (
        <div>
            <AddCircleIcon style={{ fontSize: 100, color: green[500] }} type="button" onClick={handleOpen}>

            </AddCircleIcon>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

