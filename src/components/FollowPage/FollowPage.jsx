import React, { useEffect } from 'react';
import AddUserCloset from '../AddUserCloset/AddUserCloset';
import { useDispatch, useSelector } from 'react-redux'
import '../App/App.css'
import FollowedUserCard from './FollowedUserCard';


const FollowPage = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(store => store.user)
    const followedUsers = useSelector(store => store.followedUsers)


    useEffect(() => {
        dispatch({ type: 'FETCH_FOLLOWED_USERS', payload: userInfo.id })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Your Followed Closets</h1>
            <div className='brandCardContainer'>
                {
                    followedUsers.map(user => {
                        return (
                            <div key={user.id}>
                                <FollowedUserCard user={user} />
                            </div>
                        )
                    })
                }
            </div>
            <AddUserCloset />
        </div>
    )
}

export default FollowPage