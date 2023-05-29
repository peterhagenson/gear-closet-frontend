import { Request } from 'express';

const registrationInputValidator = (userData: any) => {
    const {firstName, lastName, email, password} = userData
    const errors: string[] = [];
    if (!firstName) {
        errors.push('First name is required');
    }
    if (!lastName) {
        errors.push('Last name is required');
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