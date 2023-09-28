import {object, string, ref} from 'yup' 

export interface Schema{
    name: string
    email: string
    message: string
}

export const schema = object({
    name: string().required(),
    email: string().required().email(),
    message: string().max(100)
})