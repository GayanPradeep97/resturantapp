import React from 'react'
import './ForgotPassword.min.css'
import { Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ForgotPassword() {
  return (
    <div class="container">
            <div class="form"> 
                <form action="">
                    <div className="header">
                      <Link to="/"><ArrowBackIosNewIcon className='arrowlogo'/></Link>  
                        <h2>Forgot Password</h2>
                    </div>
                    
                <div className='background'>


                    <div class="inputbox"> 
                        <label>Email Address</label>
                        <input type="email" placeholder='Enter Email Address' required ></input>     
                    </div>


                   <div class="inputbox"> 
                        <button>send Email</button>
                   </div>

                    <div className="bottom">

                        <div class="register">
                        <p>Don't have a account? <Link to="/SignUp">Sign Up</Link></p>
                        </div>

                    </div>
                    
                </div>
                    
                        
                </form>
            </div>
        </div>
  )
}

export default ForgotPassword