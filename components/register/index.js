'use client'
import { useState } from 'react'
import Link from 'next/link'
import classes from './style.module.css'
import { useFormik } from 'formik'
import { registerSchema } from '@/schemas'
import { useRouter } from 'next/navigation'

function RegisterPage() {

    const router = useRouter()

    async function onSubmit (values, actions){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000/login')
            })
    }

    const {handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting,} = useFormik({
        initialValues: {
            userName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema:registerSchema,
        onSubmit
    })

    const [visible, setVisible] = useState(false)
  return (
    <div className={classes.registerContent}>
    <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
        <div className={classes.titleAndLine}>
            <h1 className={classes.title}>Sign Up</h1>
            <div className={classes.line}></div>
        </div>
        <div className={classes.formItem}>
            <input className={errors.userName && touched.userName ? classes.inputError : ``} id='userName' type="text" placeholder='Username' onChange={handleChange} onBlur={handleBlur} value={values.userName} />
            {errors.userName && touched.userName && <p className={classes.error}>{errors.userName}</p>}
        </div>
        <div className={classes.formItem}>
            <input className={errors.email && touched.email ? classes.inputError : ``} id='email' type="email" placeholder='Email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && <p className={classes.error}>{errors.email}</p>}
        </div>
        <div className={classes.formItem}>
            <input className={errors.password && touched.password ? classes.inputError : ``} id='password' type="password" placeholder='Password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {errors.password && touched.password && <p className={classes.error}>{errors.password}</p>}
        </div>
        <div className={classes.formItem}>
            <input className={errors.confirmPassword && touched.confirmPassword ? classes.inputError : ``} id='confirmPassword' type="password" placeholder='Confirm Password' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
            {errors.confirmPassword && touched.confirmPassword && <p className={classes.error}>{errors.confirmPassword}</p>}
        </div>
        <button disabled={isSubmitting}  className={classes.submitBtn} type='submit'> Sign Up</button>

        <div className={classes.info}>
            <p>Have an account? {<Link href='/login' style={{color:'white'}}>Sign In</Link>}.</p>
            {visible &&<p style={{fontSize:'13px'}}>This page is protected by Google reCAPTCHA to ensure you're not a bot <br/>
            The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}
            <button type='button' className={classes.moreBtn} onClick={()=>{setVisible(!visible)}}>{visible ? 'show less' : 'learn more'}</button>
        </div>
    </form>
</div>
  )
}

export default RegisterPage
