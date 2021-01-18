import React from 'react';
import { useHistory } from 'react-router'
import '../App/App.css'


const FollowedUserCard = (props) => {
    const history = useHistory();
    const { id, f_name, l_name } = props.user

    const goToCloset = (id, fname, lname) => {
        console.log('Going to this brands closet!', id)

        history.push({
            pathname: `/followedUserCloset`,
            search: `?userid=${id}&fname=${fname}&lname=${lname}`,
        });
    }

    return (
        <>
            <div className='card hvr-float' onClick={() => goToCloset(id, f_name, l_name)}>
                <h2>{f_name} {l_name}</h2>
            </div>
        </>
    )
}

export default FollowedUserCard