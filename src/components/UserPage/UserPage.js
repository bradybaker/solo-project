import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrandCards from '../BrandCards/BrandCards.jsx'
import LogOutButton from '../LogOutButton/LogOutButton';
import AddBrandForm from '../AddBrandForm/AddBrandForm.jsx';

function UserPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.user)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_BRAND', payload: userInfo.id })
    // eslint-disable-next-line
  }, [])

  return (
    <div>

      <h1 id="welcome">Welcome, {userInfo.f_name}!</h1>
      <p>Your ID is: {userInfo.id}</p>
      <BrandCards editMode={editMode} /> {/* refactor  */}
      <AddBrandForm />
      <LogOutButton className="log-in" />
      <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Delete Brand'}</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
