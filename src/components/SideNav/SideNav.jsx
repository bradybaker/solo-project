import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './SideNav.css'


function SideNav(props) {
    const location = useLocation();
    // eslint-disable-next-line
    const dispatch = useDispatch();
    console.log('Window location', location)
    return (


        <div className='SideNav'>
            <h2>MySize</h2>
            <ul className='SideNavList'>
                <Link to='/user'>
                    <li id={location.pathname === '/user' ? 'active' : ''}
                        className='ListItem'><i className="fas fa-user-circle"></i>
                        <div className='title'>Your Closet </div></li>
                </Link>
                <Link to='/followPage'>
                    <li id={location.pathname === '/followPage' ? 'active' : ''}
                        className='ListItem'><i className="fas fa-user-friends"></i>
                        <div className='title'>Followed Closets</div></li>
                </Link>
                <div className='LogoutButton'>
                    <li className='ListItem' onClick={() => dispatch({ type: 'LOGOUT' })}><i className="fas fa-sign-out-alt"></i>
                        <div className='title'>Logout</div>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default SideNav;