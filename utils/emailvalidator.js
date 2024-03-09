import {z} from 'zod';

const email = z.string().email("Enter a valid email");

export const emailValidation = (input) =>{
    const isEmailValid = email.safeParse(input);
    let error = {};
    error.success = true;

    if(!isEmailValid.success){
        error.success = false;
        error = {...error, email : isEmailValid.error.issues[0].message}
    }

    return error;
}