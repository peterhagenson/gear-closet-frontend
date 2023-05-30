
import {useState} from 'react';


function Login() {

const [email, setUserName] = useState('')
const [password, setPasswrod] = useState('')





    return (
      <div>
        <header>
          <p>
            Login Page
          </p>
        </header>
        <div>
          <form >
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




