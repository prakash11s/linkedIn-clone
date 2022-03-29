import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import linkedin from "./assets/images/LinkedIn-toolkit.jpg";
import { auth } from './firebase';
import { login } from './features/userSlice';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl:userAuth.user.photoURL,
                }))
            }).catch((error) => alert(error));
    };
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        )
                    })
            }
        ).catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <img src={linkedin} />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)'
                    type='text' />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)'
                    type='text' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'
                    type='password' />
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not s member?{' '}
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login