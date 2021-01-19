import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrandCards from '../BrandCards/BrandCards.jsx'
import LogOutButton from '../LogOutButton/LogOutButton';
import AddBrandForm from '../AddBrandForm/AddBrandForm.jsx';
import { useHistory } from 'react-router-dom'
import '../App/App.css'

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector(store => store.user)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_BRAND', payload: userInfo.id })
    // eslint-disable-next-line
  }, [])

  const goToFollowedClosets = () => {
    history.push('/followPage')
    console.log('Click friend button')
  }

  return (
    <div className='root'>

      <h1 id="welcome">Welcome, {userInfo.f_name}!</h1>
      <p>Your ID is: {userInfo.id}</p>
      <BrandCards editMode={editMode} /> {/* refactor  */}
      <AddBrandForm />
      <LogOutButton className="log-in" />
      <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Delete Brand'}</button>
      <button onClick={() => goToFollowedClosets()}>Followed Closets</button>
    </div>
  );
}

export default UserPage;
