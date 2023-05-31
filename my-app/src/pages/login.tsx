
import {useEffect, useState} from 'react';
import loginInputValidator from '../utilities/loginInputValidator';
import { useLoginUserMutation } from '../services/usersApi';


function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [validationErrors, setValidationErrors] = useState([""])
const [loginUser, {error}] = useLoginUserMutation();



const handleLogin = async (event: any) => {
  event.preventDefault()
  const userCreds = {
    email: email,
    password: password
  }
  const validationErrors = await loginInputValidator(userCreds)
        if(validationErrors) {
            setValidationErrors(validationErrors)
        } else {
        
            const response = await loginUser(userCreds)
            console.log(response)
            }
            //navigate('/login')
        }


    return (
      <div>
        <header>
          <p>
            Login Page
          </p>
        </header>
        <div>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>

              Password:
              <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );

  }

export default Login;




