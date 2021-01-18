import React from 'react';
import '../App/App.css'


const FollowedUserCard = (props) => {

    const { f_name, l_name } = props.user

    return (
        <>
            <div className='card hvr-float'>
                {f_name} {l_name}
            </div>
        </>
    )
}

export default FollowedUserCard