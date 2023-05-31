
import { LoginUser } from "../models/userTypes";

const loginInputValidator = (userCreds: LoginUser) => {
    const { email, password } = userCreds;
    const errors: string[] = [];
    if (!email) {
        errors.push('Username is required');
    }   
    if (!password) {    
        errors.push('Password is required');
    }
    if (errors.length > 0) {
        return errors;
    }
    return null;
}

export default loginInputValidator;