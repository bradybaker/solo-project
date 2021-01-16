import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Card from './Card'
import Swal from 'sweetalert2'
import '../App/App.css'



export default function BrandCards(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userBrands = useSelector(store => store.userBrandReducer)


    const goToCloset = (name, id) => {
        console.log('Going to this brands closet!', id)

        history.push({
            pathname: `/closet`,
            search: `?brandName=${name}&brandid=${id}`,
        });
    }

    const handleDelete = (id) => {
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

    const compare = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    }

    return (
        <div className='brandCardContainer'>
            {
                userBrands.sort(compare).map(item => {
                    return (
                        <div key={item.id}>
                            <Card
                                item={item}
                                handleDelete={handleDelete}
                                goToCloset={goToCloset}
                                editMode={props.editMode}
                            />
                        </div>
                    )
                })

            }
        </div>
    );
}

