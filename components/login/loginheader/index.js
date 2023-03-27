import React from 'react'
import {TbCircleLetterM} from 'react-icons/tb'
import classes from './style.module.css'
import Link from 'next/link'

function LoginHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <Link href='/' className={classes.logo}>
          <TbCircleLetterM size={35} />
          MOVIEHEAVEN
        </Link>
      </div>
    </header>
  )
}

export default LoginHeader
