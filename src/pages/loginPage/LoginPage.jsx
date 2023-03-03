import React from 'react'
import './Login.min.css'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LoginPage() {
  return (
    
        <div class="container">
            <div class="form"> 
                <form action="">
                    <div className="header">
                        <h2>Login</h2>
                    </div>
                    
                <div className='background'>

                    <div className="logocontainr">
                        <div className="logo">
                            <span><FoodBankIcon/></span>
                            <span className='text'>Resturant</span>
                            <ClearIcon/>
                        </div>
                    </div>
                    

                    <div class="inputbox"> 
                        <label>Email</label>
                        <input type="email" placeholder='Email' required ></input>     
                    </div>

                    <div class="inputbox"> 
                        <label>Password</label>
                        <input type="password" placeholder='password' required ></input>            
                   </div>

                   <div class="button"> 
                   <Button variant="primary" size="lg">
                        Login
                        </Button>{' '}
                   </div>

                    <div className="bottom">

                        <div class="register">
                        
                            <p>Don't have a account? <Link to="/SignUp">Sign Up</Link></p>
                        </div>

                        <div class="forget">   
                            <Link to="forgotPassword">Forget password?</Link>
                        </div>
                    </div>
                    
                </div>
                    
                        
                </form>
            </div>
        </div>
    
              
   
  )
}

export default LoginPage