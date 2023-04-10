'use client'
import React, {useRef, useState, useEffect } from 'react'
import classes from './style.module.css'
import Link from 'next/link'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useAppContext } from '@/context/AppContext'


function Search() {
    const{searchVisible,setSearchVisible } = useAppContext()
    const search = useRef('')
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const submitHandler = async (e) => {
      e.preventDefault();
      if(search.current.value.trim() !== ''){
        const data = movies.filter(x=>x.title.includes(search.current.value.charAt(0).toUpperCase() + search.current.value.slice(1)))
        setFilteredMovies(data)
      }
      else{
        setFilteredMovies([])
      }
    }

    useEffect(()=>{
      const fetchPopular = async () => {
        const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
        const data = await result.json()
        setMovies(data.results)
      }
      fetchPopular()
    },[])

  return (
    <section className={classes.searchSection} style= {{ display: searchVisible ? 'flex' : 'none'}}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.formItem}>
            <input className={classes.searchBar} ref={search} type='search' placeholder='Search' />
            <button style={{color:'white'}} type='submit'><BiSearchAlt size={35} color='black' /></button>
            <button type='button' onClick={() => {setSearchVisible(!searchVisible)}} style={{cursor:'pointer', color:'black'}}><AiOutlineCloseCircle size={35} /></button>
        </div>  

          {
            filteredMovies.length > 0 && 
              <div className={classes.searchList}>{
                  filteredMovies.map((item)=>{
                    return (
                      <Link onClick={()=>{setSearchVisible(false)}} className={classes.searchItem} href={`movie/${item.id}`} key={item.id + Math.random()}>{item.title}</Link>
                      )
                    })
                  }
              </div>
          }

      </form>
    </section>
  )
}

export default Search
