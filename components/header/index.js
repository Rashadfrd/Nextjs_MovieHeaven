'use client'
import {signOut, useSession } from 'next-auth/react'
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
          <TbCircleLetterM className={classes.logoM} size={35} />
          MOVIEHEAVEN
        </Link>
        {session?.user ?
         <nav className={classes.nav}>
          <span>{session.user.name || session.user.email}</span>
          <span className={classes.navItem} style={{cursor:'pointer'}} onClick={()=>{signOut()}}>
          SignOut
          </span>
         </nav> : 
          <nav className={classes.nav}>
            <Link className={classes.navItem} href='/login'>Sign In</Link>
          </nav>
        }
      </div>
    </header>
  )
}

export default Header