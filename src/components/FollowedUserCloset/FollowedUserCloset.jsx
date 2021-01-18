import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const FollowedUserCloset = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search.substring(1))
    const userID = params.get('userid')

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_BRAND', payload: userID })
        // eslint-disable-next-line
    }, [])

    return (
        <div >
            <h1>Followed user closet</h1>
        </div>
    )
}

export default FollowedUserCloset