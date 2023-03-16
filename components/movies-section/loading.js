import React from 'react'
import Skeleton from '../skeleton';
import classes from "./styles.module.css";

const MoviesLoading = () => {
  return (
    <div className={classes.moviesSection}>
      <div className={classes.moviesWrapper}>
      <h3 className={classes.title}>{<Skeleton className={classes.title} width={75} height={30} />}</h3>
        <div className={classes.movies}>
            {Array(7).fill(null).map((item,index)=>{
                return(
                    <div className={classes.movie} key={index} >
                        <Skeleton />
                    </div>
                ) 
            })
            }
        </div>
      </div>
    </div>
  )
}

export default MoviesLoading
