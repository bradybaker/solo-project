import React from 'react';
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import '../App/App.css'


const FollowedUserCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.user)
    const { id, f_name, l_name } = props.user


    const goToCloset = (id, fname, lname) => {
        console.log('Going to this brands closet!', id)

        history.push({
            pathname: `/followedUserCloset`,
            search: `?userid=${id}&fname=${fname}&lname=${lname}`,
        });
    }

    const unfollowUser = (id) => {
        dispatch({ type: 'UNFOLLOW_USER', payload: { friendID: id, userID: userInfo.id } })
    }

    return (
        <>
            <div className='card hvr-float' onClick={() => goToCloset(id, f_name, l_name)}>
                <h2>{f_name} {l_name}</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
                {props.editMode &&
                    <i className="fas fa-user-times deleteIcon" onClick={() => unfollowUser(id)}></i>
                }
            </div>
        </>
    )
}

export default FollowedUserCard