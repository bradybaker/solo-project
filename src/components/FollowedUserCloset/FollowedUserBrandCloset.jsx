import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../App/App.css'


function FollowedUserBrandCloset() {
    const dispatch = useDispatch();
    const location = useLocation();
    const followedUserClothing = useSelector(store => store.userClothingReducer)
    const params = new URLSearchParams(location.search.substring(1))
    const uID = params.get('userid')
    const fName = params.get('fname');
    const lName = params.get('lname')
    const brandName = params.get('brandname')
    const bID = params.get('brandid')


    useEffect(() => {
        dispatch({ type: 'FETCH_USER_CLOTHING', payload: { brandID: bID, userID: uID } })
        // eslint-disable-next-line
    }, []);


    return (
        <div className='root' >
            <h1>{fName} {lName}'s {brandName} Closet</h1>
            <div className='brandCardContainer'>
                {
                    followedUserClothing.map(item => {
                        return (
                            <div className='card hvr-float' key={item.id}>
                                <h2>{item.item_name}</h2>
                                <h2>{item.item_size}</h2>
                                <h2>{item.item_note}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FollowedUserBrandCloset;