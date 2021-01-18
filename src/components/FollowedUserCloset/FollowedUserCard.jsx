import React from 'react';
import '../App/App.css'
import { useHistory, useLocation } from 'react-router-dom'


const FollowedUserCard = (props) => {
    const history = useHistory();
    const location = useLocation();
    const params = new URLSearchParams(location.search.substring(1))
    const userID = params.get('userid')
    const fName = params.get('fname');
    const lName = params.get('lname')


    const goToFollowedUserBrandCloset = (brandName, brandID, userID, fname, lname) => {
        console.log('Going to this brands closet!', id)

        history.push({
            pathname: `/followedUserBrandCloset`,
            search: `?userid=${userID}&fname=${fname}&lname=${lname}&brandid=${brandID}&brandname=${brandName}`,
        });
    }

    const { id, name, logo } = props.item
    return (
        <>
            <div
                onClick={() => goToFollowedUserBrandCloset(name, id, userID, fName, lName)}
                style={{ backgroundImage: `url("${logo}")`, backgroundSize: 'cover' }}
                className='card hvr-float'>
            </div>
        </>
    )
}

export default FollowedUserCard