'use client'
import {signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import {TbCircleLetterM} from 'react-icons/tb'
import classes from './style.module.css'

const Header = () => {
  const {data:session} = useSession()

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <Link href='/' className={classes.logo}>
          <TbCircleLetterM size={35} />
          MOVIEHEAVEN
        </Link>
        {session?.user ?
         <nav className={classes.nav}>
          <span>{session.user.name}</span>
          <span style={{cursor:'pointer'}} onClick={()=>{signOut()}}>
          SignOut
          </span>
         </nav> :
          // <button onClick={()=>{signIn()}}> SignIn </button>
          <nav className={classes.nav}>
            <span style={{cursor:'pointer'}} onClick={()=>{signIn()}}>Login</span>
            <Link href='/register'>Register</Link>
          </nav>
        }
      </div>
    </header>
  )
}

export default Header