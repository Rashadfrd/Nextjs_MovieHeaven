'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginFooter from './loginfooter'
import LoginHeader from './loginheader'
import classes from './style.module.css'
import { useFormik } from 'formik'
import { loginSchema } from '@/schemas'
import { signIn } from 'next-auth/react'

function LoginPage() {
    const[visible,setVisible] = useState(false)

    //Delay function
    async function delay(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      }


    const onSubmit = async (values, actions) => {
        const result = await signIn('credentials',{
            userName:values.userName,
            password:values.password,
            redirect:true,
            callbackUrl:'/'
        })
    }

    const handleGoogle = () => {
        signIn('google',{callbackUrl:'http://localhost:3000'})
    }

    const {handleSubmit, values, errors, touched, isSubmitting, handleChange, handleBlur} = useFormik({
        initialValues:{
            userName: '',
            password: ''
        },
        validationSchema:loginSchema,
        onSubmit
    })


  return(
    <section className={classes.login}>
        <LoginHeader />
        <div className={classes.loginContent}>
            <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
                <div className={classes.titleAndLine}>
                    <h1 className={classes.title}>Sign In</h1>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.formItem}>
                    <input className={errors.userName && touched.userName ? classes.inputError : ``} id='userName' type="text" placeholder='Username' onChange={handleChange} onBlur={handleBlur} value={values.userName} />
                    {errors.userName && touched.userName && <p className={classes.error}>{errors.userName}</p>}
                </div>
                <div className={classes.formItem}>
                    <input className={errors.password && touched.password ? classes.inputError : ``} id='password' type="password" placeholder='Password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    {errors.password && touched.password && <p className={classes.error}>{errors.password}</p>}
                </div>
                <button  disabled={isSubmitting} className={classes.submitBtn} type='submit'> Sign In</button>
                <button onClick={handleGoogle}  className={classes.submitBtn} type='button'> Sign In With Google</button>

                <div className={classes.info}>
                    <p>New to MovieHeaven? {<Link href='/' style={{color:'white'}}>Sign up now</Link>}.</p>
                    {visible &&<p style={{fontSize:'13px'}}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <br/>
                    The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}
                    <button type='button' className={classes.moreBtn} onClick={()=>{setVisible(!visible)}}>{visible ? 'show less' : 'learn more'}</button>
                </div>
            </form>
        </div>
        <LoginFooter />
    </section>
  )
}

export default LoginPage
