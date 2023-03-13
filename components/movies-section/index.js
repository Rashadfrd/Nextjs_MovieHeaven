import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./styles.module.css";

function MoviesSection({ title, movies }) {
  return (
    <div className={classes.moviesSection}>
      <div className={classes.moviesWrapper}>
      <h3 className={classes.title}>{title}</h3>
        <div className={classes.movies}>
            {movies.map((movie) => (
            <div className={classes.movie} key={movie.id}>
                <Link href={`/`}>
                <Image
                    fill
                    unoptimized
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
                </Link>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesSection;