import React from 'react';

const LoginForm = (({isShowLogin})=>{
    return(
        <>
            <div className={`${!isShowLogin ? "active" : ""} show`}>
                <div className="login-form">
                    <div className="form-box solid">
                        <form>
                            <h1 className="login-text">Sign In</h1>
                            <label>Username</label><br></br>
                            <input type="text" name="username" className="login-box"/><br></br>
                            <input type="submit" value="LOGIN" className="login-btn"/><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
})

export default LoginForm