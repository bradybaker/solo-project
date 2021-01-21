import React, { useEffect, useState } from 'react';
import AddClothingItem from '../AddClothingItem/AddClothingItem.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import EditClothingItem from '../EditClothingItem/EditClothingItem.jsx';
import '../App/App.css'


function BrandCloset() {
    const location = useLocation();
    const dispatch = useDispatch();
    const userClothes = useSelector(store => store.userClothingReducer)
    const userInfo = useSelector(store => store.user)
    const [editMode, setEditMode] = useState(false)
    const params = new URLSearchParams(location.search.substring(1))
    const brandUrlName = params.get('brandName')
    const brandUrlID = params.get('brandid');

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_CLOTHING', payload: { brandID: brandUrlID, userID: userInfo.id } })
        // eslint-disable-next-line
    }, []);

    const handleDelete = (selectedID) => {
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
                dispatch({ type: 'DELETE_USER_CLOTHING_ITEM', payload: { id: selectedID, brandUrlID: brandUrlID, userID: userInfo.id } })
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

    return (
        <div className='root'>
            <h1>Your {brandUrlName} Closet</h1>
            <div className='brandCardContainer'>
                {
                    userClothes.map(item => {
                        return (
                            <div key={item.id}>
                                <div className='card hvr-float' key={item.id}>
                                    <h2>{item.item_name}</h2>
                                    <h2>{item.item_size}</h2>
                                    <h2>{item.item_note}</h2>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    {editMode &&
                                        <div className='iconHolder'>
                                            <EditClothingItem
                                                itemName={item.item_name}
                                                itemSize={item.item_size}
                                                itemNote={item.item_note}
                                                itemID={item.id}
                                            />
                                            <i className="fas fa-times-circle deleteIcon" onClick={() => handleDelete(item.id)}></i>
                                        </div>
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <AddClothingItem />
            <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Update'}</button>
        </div >
    );
}

export default BrandCloset;