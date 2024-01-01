//create a component that registers users with an email and password

import {useState, useEffect} from 'react';
import {useRegisterUserMutation} from '../services/usersApi';
import { useNavigate } from 'react-router-dom';
import registrationInputValidator from '../utilities/registrationInputValidator';



function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    //const [lastName,setLastName] = useState("");
    //const [user, setUser] = useState(null);
    const [validationErrors, setValidationErrors] = useState([""])


    const [registerUser, {error}] = useRegisterUserMutation();

    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userData = {
            username: userName,
            email: email,
            password: password,
        };
        
        const validationErrors = await registrationInputValidator(userData)
        if(validationErrors) {
            setValidationErrors(validationErrors)
        } else {
        
            const response = await registerUser(userData)
            console.log(response);
            if(error) {
                console.log(error)
            }
            //navigate('/login')
        }
       }
                
      useEffect(() => {
      }, [error])
    
        
       


    return (
        <div>
        <header>
            <p>
            Register Page
            </p>
        </header>
        <div>
        {validationErrors.length > 1 ? JSON.stringify(validationErrors): ''}
        </div>
        <div>
        {error ? JSON.stringify(error): ''}
        </div>
        <div>
            <form onSubmit={handleSubmit}>

            <label>                                                 
                Username:
                <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

    export default Register