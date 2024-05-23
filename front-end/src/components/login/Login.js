import React from 'react';
import './login.css'; // Import your CSS file
import PropTypes from 'prop-types';

const Login = ({handleOnSubmit, handleOnChange, email, password, switchform}) => {
    

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className='text-black text-center'>Client Login</h1>
        <hr />
        <form  onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

         
        </form>
        <hr/>
        <a href='#!' onClick={() => switchform('reset')}>Forgot Password?</a>
      </div>
    </div>
  );
};
Login.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    switchform:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

}

export default Login;
