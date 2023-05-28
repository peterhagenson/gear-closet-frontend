//create a component that registers users with an email and password

import {useState} from 'react';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const userData = {
            email,
            password
        };
        console.log(email, password)
    }
        


    return (
        <div>
        <header>
            <p>
            Register Page
            </p>
        </header>
        <div>
            <form onSubmit={handleSubmit}>
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