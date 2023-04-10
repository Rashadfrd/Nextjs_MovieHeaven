'use client'
import React, {useRef, useState, useEffect } from 'react'
import classes from './style.module.css'
import Link from 'next/link'


function Search() {
    const [show, setShow] = useState(true)
    const search = useRef('')
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const submitHandler = async (e) => {
      e.preventDefault();
      if(search.current.value.trim() !== ''){
        const data = movies.filter(x=>x.title.includes(search.current.value.charAt(0).toUpperCase() + search.current.value.slice(1)))
        setFilteredMovies(data)
      }
    }

    useEffect(()=>{
      const fetchPopular = async () => {
        const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
        const data = await result.json()
        console.log(data.results)
        setMovies(data.results)
      }
      fetchPopular()
    },[])

  return (
    <section className={classes.searchSection} style= {{ display: show ? 'flex' : 'none'}}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.formItem}>
            <input ref={search} type='search' placeholder='Search' />
        </div>  
        <button style={{color:'white'}} type='submit'>Submit</button> <br />
        {
          filteredMovies && filteredMovies.map((item)=>{
            return <Link href={`movie/${item.id}`} key={item.id + Math.random()}>{item.title}{item.id}</Link>
          })
        }

        <span onClick={() => {setShow(!show)}} style={{cursor:'pointer'}}>Click to collapse</span>
      </form>
    </section>
  )
}

export default Search
