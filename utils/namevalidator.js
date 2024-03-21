import {z} from 'zod';

const name = z.string().min(3, {message : "name atleast 3 character"});

export const nameValidation = (input) =>{
    const isNameValid = name.safeParse(input);
    let error = {};
    error.success = true;

    if(!isNameValid.success){
        error.success = false;
        error = {...error, name : isEmailValid.error.issues[0].message}
    }

    return error;
}