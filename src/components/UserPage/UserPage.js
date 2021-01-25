import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrandCards from '../BrandCards/BrandCards.jsx'
import AddBrandForm from '../AddBrandForm/AddBrandForm.jsx';
import { Button } from '@material-ui/core'
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
      <div className='updateORDelete'>
        <Button variant='contained' color='primary' onClick={() => setEditMode(!editMode)}>{editMode ? 'Done' : 'Delete Brand'}</Button>
      </div>
    </div>
  );
}

export default UserPage;
