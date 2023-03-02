import React from 'react'
import './Login.min.css'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ClearIcon from '@mui/icons-material/Clear';

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

                   <div class="inputbox"> 
                   <button>Log In</button>
                   </div>

                    <div className="bottom">

                    <div class="register">
                        <p>Don't have a account <a href="#" >Sign Up</a></p>
                    </div>

                    <div class="forget">   
                        <a href="#">Forget Password</a>
                    </div>
                    </div>
                    
                </div>
                    
                        
                </form>
            </div>
        </div>
    
              
   
  )
}

export default LoginPage