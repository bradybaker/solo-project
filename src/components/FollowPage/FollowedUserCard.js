import React from 'react';
import '../App/App.css'


const FollowedUserCard = (props) => {

    const { f_name, l_name } = props.user

    return (
        <>
            <div className='card hvr-float'>
                <h2>{f_name} {l_name}</h2>
            </div>
        </>
    )
}

export default FollowedUserCard