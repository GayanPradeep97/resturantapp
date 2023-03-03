import React from 'react'

function SignUp() {
  return (
    <div class="container">
            <div class="form"> 
                <form action="">
                    <div className="header">
                        <h2>Login</h2>
                    </div>
                    
                <div className='background'>
                    <div class="inputbox"> 
                        <label>First Name</label>
                        <input type="text" placeholder='Enter First Name' required ></input>     
                    </div>
                    <div class="inputbox"> 
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter Last Name' required ></input>     
                    </div>

                    <div class="inputbox"> 
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' required ></input>     
                    </div>
                    <div class="inputbox"> 
                        <label>Phone Number</label>
                        <input type="number" placeholder='+44' required ></input>     
                    </div>

                    <div class="inputbox"> 
                        <label>Password</label>
                        <input type="password" placeholder='Enter Password' required ></input>            
                   </div>
                   <div class="inputbox"> 
                        <label>Password</label>
                        <input type="password" placeholder='Enter Confirm Password' required ></input>            
                   </div>

                   <div class="inputbox"> 
                        <button>Sign Up</button>
                   </div>

                    <div className="bottom">

                        <div class="register">
                            <p>Have an account? <a href="register" >Sign In</a></p>
                        </div>

                    </div>
                    
                </div>                   
                </form>
            </div>
        </div>
  )
}

export default SignUp