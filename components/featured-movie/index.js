import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaPlus} from 'react-icons/fa'
import classes from './styles.module.css'

const Featured = ({featuredMovie, isCompact}) => {
  return (
        <div className={classes.movieWrapper}>
            <div className={classes.movieContainer}>
                <h1 className={classes.movieTitle}>{featuredMovie.title}</h1>
                <p className={
                    isCompact ?
                    `${classes.overview} ${classes.shortOverview}` : 
                    `${classes.overview}`
                    }>
                    {featuredMovie.overview}
                </p>
                <div className={classes.actionButtons}>
                    <Link className={classes.playButton} href='/'>
                    Play
                    </Link>
                    <button className={classes.addButton}>
                    <FaPlus />
                    </button>
                </div>
                <div className={classes.moviePoster}>
                    <div className={classes.moviePosterOverlay}></div>
                    <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
                    alt={featuredMovie.title}
                    fill
                    />
                </div>
            </div>
        </div>
  )
}

export default Featured
