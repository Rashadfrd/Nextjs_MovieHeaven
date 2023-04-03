import * as yup from 'yup'


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case, 1 lower case letter and 1 numeric digit

export const loginSchema = yup.object().shape({
    userName: yup.string().required('Username is required'),
    password: yup.string().min(5).matches(passwordRules,{message:'Please create a stronger password'}).required('Password is required')
})
