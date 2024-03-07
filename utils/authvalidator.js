import {z} from 'zod';

const email = z.string().email({message : "Enter a valid Email"});
const password = z.string().min(8, {message : "Password contains atleast 8 characters"})

export const validation = (input) =>{

    const isEmailValid = email.safeParse(input.email);
    const isPasswordValid = password.safeParse(input.password);

    let error = {};
    error.success = true;

    if(!isEmailValid.success){
        error.success = false;
        error = {...error , email : isEmailValid.error.issues[0].message}
    }

    if(!isPasswordValid.success){
        error.success = false;
        error = {...error , password : isPasswordValid.error.issues[0].message};
    }

    return error;

}