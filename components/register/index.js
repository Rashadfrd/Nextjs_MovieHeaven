'use client'
import { useState } from 'react'
import Link from 'next/link'
import classes from './style.module.css'

function RegisterPage() {
    const [visible, setVisible] = useState(false)
  return (
    <div className={classes.registerContent}>
    <form className={classes.form}autoComplete='off'>
        <div className={classes.titleAndLine}>
            <h1 className={classes.title}>Sign Up</h1>
            <div className={classes.line}></div>
        </div>
        <div className={classes.formItem}>
            <input id='email' type="email" placeholder='Email' />
        </div>
        <div className={classes.formItem}>
            <input id='password' type="password" placeholder='Password' />
        </div>
        <div className={classes.formItem}>
            <input id='confirmpassword' type="password" placeholder='Confirm Password' />
        </div>
        <button  className={classes.submitBtn} type='submit'> Sign Up</button>

        <div className={classes.info}>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            {visible &&<p style={{fontSize:'13px'}}>
            The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}
            <button type='button' className={classes.moreBtn} onClick={()=>{setVisible(!visible)}}>{visible ? 'show less' : 'learn more'}</button>
        </div>
    </form>
</div>
  )
}

export default RegisterPage
