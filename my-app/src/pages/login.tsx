//create react component for login page with inputs for username and password and one button to submit

import {useState} from 'react';


function Login() {




    return (
      <div>
        <header>
          <p>
            Login Page
          </p>
        </header>
        <div>
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>

              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

export default Login;




