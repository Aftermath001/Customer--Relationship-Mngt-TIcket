import React from 'react'
import PropTypes from 'prop-types';

function PasswordReset({handleResetOnSubmit, handleOnChange, email, switchform}) {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className='text-black text-center'>Reset Password</h1>
        <hr />
        <form  onSubmit={handleResetOnSubmit}>
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

          <button type="submit" className="login-btn">
            Reset Password
          </button>

         
        </form>
        <hr/>
        <a href='#!' onClick={() => switchform('login')}>Login Now</a>
      </div>
    </div>
  )
}
PasswordReset.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleResetOnSubmit:PropTypes.func.isRequired,
    switchform:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,

}

export default PasswordReset