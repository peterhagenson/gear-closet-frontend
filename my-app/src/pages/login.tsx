
import {useEffect, useState} from 'react';
import loginInputValidator from '../utilities/loginInputValidator';
import { useLazyLoginUserQuery } from '../services/usersApi';
import { useDispatch } from 'react-redux';
import {userActions} from '../redux/users/userSlice';
import { useNavigate } from 'react-router-dom';


function Login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [userNotFound, setUserNotFound] = useState(false)
const [validationErrors, setValidationErrors] = useState([""])
const [loginUser, {error}] = useLazyLoginUserQuery();


const dispatch = useDispatch()
const navigate = useNavigate()


const handleLogin = async (event: any) => {
  event.preventDefault()
  const userCreds = {
    username: username,
    password: password
  }
  const validationErrors = await loginInputValidator(userCreds)
        if(validationErrors) {
            setValidationErrors(validationErrors)
        } else {
            await loginUser(userCreds)
            .then((response: any) => {
              console.log(response)
              if(response?.data?.accessToken) {
              dispatch(userActions.user({username: response.data.username, accessToken: response.data.accessToken}))
              navigate('/')
              } else {
                setUserNotFound(true)
            }
            })
        }}


    return (
      <div>
        <header>
          <p>
            Login Page
          </p>
        </header>
        <div>
          {userNotFound && <p>User not found</p>}
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
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