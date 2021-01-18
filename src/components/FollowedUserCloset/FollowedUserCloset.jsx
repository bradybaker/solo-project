import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Card from '../BrandCards/Card'

const FollowedUserCloset = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const userBrands = useSelector(store => store.userBrandReducer)
    const params = new URLSearchParams(location.search.substring(1))
    const userID = params.get('userid')
    const fName = params.get('fname');
    const lName = params.get('lname')

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_BRAND', payload: userID })
        // eslint-disable-next-line
    }, [])

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
        <div >
            <h1>{fName} {lName}'s closet</h1>
            <div className='brandCardContainer'>
                {
                    userBrands.sort(compare).map(item => {
                        return (
                            <div key={item.id}>
                                <Card
                                    item={item}
                                />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default FollowedUserCloset