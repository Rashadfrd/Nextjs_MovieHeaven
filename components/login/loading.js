import React from 'react'
import classes from './style.module.css'
import Skeleton from '../skeleton'

function LoginLoading() {
  return (
    <div className={classes.loginContent}>
      <div className={classes.form} style={{padding:0,overflow:'hidden',position:'relative'}}>
        <div style={{height:'100%', width:'100%',position:'absolute',top:0,}}>
            <Skeleton />
        </div>
      </div>
    </div>
  )
}

export default LoginLoading
