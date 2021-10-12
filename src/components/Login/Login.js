import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './shop';

    const handlaGoogleSignin = () =>{
        signInUsingGoogle()
        .then( result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" /><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="Sumit" /><br />
                </form>
                <p>new to ema-john?<Link to='/registar'>Create Account</Link></p>
                <div>------or-------</div>
                <button 
                className='btn-regular'
                onClick={handlaGoogleSignin}
                >Google sign in</button>
            </div>
        </div>
    );
};

export default Login;