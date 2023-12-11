import React from 'react'

export default function Login() {
  return (
    <div class="con2">
    <div class="Form-Wrap">
      <h3>Login to your Account</h3>
      <form class="Form">
        <div class="Email">
          <label for="Email">Email</label>
          <input type="text" placeholder="Enter your Email" />
        </div>
        <div class="Password">
          <label for="Password">Password</label>
          <input type="text" placeholder="Enter Password" />
        </div>
        <button class="Login" type="submit">Login</button>
        <span id="forgot">Forgot password</span>
        <div class="hr-container">
          <div class="hr-line"></div>
          <span id="s4">or</span>
          <div class="hr-line"></div>
          </div>
          <button class="google-btn">
            <img  src="../img/Google.png" alt="Google logo" />
            <span id="s5">Sign in with Google</span>
          </button>
          <button class="fb-btn">
            <img src="../img/Fb.png" alt="Facebook logo" />
            <span id="s5">Login with Facebook</span>
          </button>
          <div class="signup">
            <i class="fa fa-gift" style={{color: "#ff0238"}}></i>&nbsp;<a id="signup-1" style={{color: "#ff0238"}} href="#">Signup & Earn</a>
            <span id="signup-2">loyalty points</span>
          </div>
          </form>
        </div>
        <div class="account">
          <span>Don't have an Account?</span>
          <a href="#" style={{fontSize: "0.9rem", color: "#ff0238"}}>Create account</a>
        </div>
      </div>
  );
}
