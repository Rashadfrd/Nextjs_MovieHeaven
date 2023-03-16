import React from 'react'
import SimpleLoader from '../simpleloading'
import classes from './styles.module.css'

const FeaturedLoader = () => {
  return (
    <div className={classes.movieWrapper}>
      <div className={classes.movieContainer} style={{height:340, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <SimpleLoader />
      </div>
    </div>
  )
}

export default FeaturedLoader
