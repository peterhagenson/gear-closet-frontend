
const registrationInputValidator = (userData: any) => {
    const {username, email, password} = userData
    const errors: string[] = [];
    if (!username) {
        errors.push('Username is required');
    }
    if (!email) {
        errors.push('Email is required');
    }
    if (!password) {
        errors.push('Password is required');
    }
    if (errors.length > 0) {
        return errors;
    }
    return null;
    }

    export default registrationInputValidator;