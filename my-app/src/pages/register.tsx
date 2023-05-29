//create a component that registers users with an email and password

import {useState, useEffect} from 'react';
import {useRegisterUserMutation} from '../services/usersApi';
import { useNavigate } from 'react-router-dom';
import registrationInputValidator from '../utilities/registrationInputValidator';



function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    //const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([""])


    const [registerUser] = useRegisterUserMutation();

    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };
        
        const validationErrors = await registrationInputValidator(userData)
        if(validationErrors) {
            setErrors(validationErrors)
        } else {
        
            const response = await registerUser(userData)
            console.log(response)
            navigate('/login')
        }
       }
                
      
    
        
       


    return (
        <div>
        <header>
            <p>
            Register Page
            </p>
        </header>
        <div>
        {errors.length > 1 ? JSON.stringify(errors): ''}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                First Name:
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>                                                 
                Last Name:
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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