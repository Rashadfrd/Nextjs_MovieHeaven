import React from 'react'
import classes from './styles.module.css'

const SimpleLoader = () => {
  return (
    <div className={classes.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
}
export default SimpleLoader