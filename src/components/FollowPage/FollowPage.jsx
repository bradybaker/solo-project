import React, { useEffect, useState } from 'react';
import AddUserCloset from '../AddUserCloset/AddUserCloset';
import { useDispatch, useSelector } from 'react-redux'
import '../App/App.css'
import FollowedUserCard from './FollowedUserCard';
import '../App/App.css'


const FollowPage = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(store => store.user)
    const followedUsers = useSelector(store => store.followedUsers)
    const [editMode, setEditMode] = useState(false)



    useEffect(() => {
        dispatch({ type: 'FETCH_FOLLOWED_USERS', payload: userInfo.id })
        // eslint-disable-next-line
    }, [])

    return (
        <div className='root'>
            <h1 className='textTitle'>Closets You Follow</h1>
            <div className='brandCardContainer'>
                {
                    followedUsers.map(user => {
                        return (
                            <div key={user.id}>
                                <FollowedUserCard
                                    user={user}
                                    editMode={editMode}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <AddUserCloset />
            <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Unfollow Closet'}</button>
        </div>
    )
}

export default FollowPage