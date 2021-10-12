import React from 'react';
import { Link } from 'react-router-dom';

const Registart = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Registar:Create a Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""placeholder='your email' /><br />
                    <input type="password" name="" id=""placeholder='your password' /><br />
                    <input type="password" name="" id=""placeholder='re-enter password' /><br />
                    <input type="submit" value="Sumit" /><br />
                </form>
                <p>Have a account?<Link to='/login'>login</Link></p>
                <div>------or-------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Registart;