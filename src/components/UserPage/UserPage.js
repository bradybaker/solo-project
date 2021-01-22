import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrandCards from '../BrandCards/BrandCards.jsx'
import AddBrandForm from '../AddBrandForm/AddBrandForm.jsx';
import '../App/App.css'

function UserPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.user)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_BRAND', payload: userInfo.id })
    // eslint-disable-next-line
  }, [])

  return (
    <div id='UserPage' className='root'>

      <h1 className='textTitle'>Welcome to Your Closet {userInfo.f_name}!</h1>
      <BrandCards editMode={editMode} /> {/* refactor  */}
      <AddBrandForm />
      <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Delete Brand'}</button>
    </div>
  );
}

export default UserPage;
