'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginFooter from './loginfooter'
import LoginHeader from './loginheader'
import classes from './style.module.css'
import { useFormik } from 'formik'

function LoginPage() {
    const[visible,setVisible] = useState(false)
    const formik = useFormik({
        initialValues:{
            userName: '',
            password: ''
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return(
    <section className={classes.login}>
        <LoginHeader />
        <div className={classes.loginContent}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.titleAndLine}>
                    <h1 className={classes.title}>Sign In</h1>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.formItem}>
                    <input id='userName' type="text" placeholder='Username' onChange={formik.handleChange} value={formik.values.userName} />
                </div>
                <div className={classes.formItem}>
                    <input id='password' type="password" placeholder='Password' onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <button className={classes.submitBtn} type='submit'> Sign In</button>

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
