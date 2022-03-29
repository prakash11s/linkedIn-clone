import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import  Widgets  from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        dispatch(logout());
      }
    })
  }, []);
  console.log("user", user)
  return (
    <div className="app">
      {/* Header */}
      <Header />
      
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          {/* Sidebar */}
          <Sidebar />
          <Feed />
          {/* Feed */}
          <Widgets />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
