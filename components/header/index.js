import Link from 'next/link'
import React from 'react'
import {TbCircleLetterM} from 'react-icons/tb'
import classes from './style.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <Link href='/' className={classes.logo}>
          <TbCircleLetterM size={35} />
          MOVIEHEAVEN
        </Link>
        <nav className={classes.nav}>
          <Link href='/'>Test1</Link>
          <Link href='/'>Test2</Link>
          <Link href='/'>Test3</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header