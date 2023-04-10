import Link from 'next/link'
import Header from '../header'
import classes from './style.module.css'

async function LandingPage() {
  return (
    <section className={classes.landingPage}>
      <Header />
      <div className={classes.titleAndDesc}>
            <h3 className={classes.subTitle}>Watch anywhere. Cancel anytime.</h3>
            <Link className={classes.hereBtn} href='/genres'>List →</Link>
            <h1 className={classes.title}>Unlimited movies, TV shows, and more. </h1>
            <h3 className={classes.subTitle}>Ready? Click the button below and create your membership.</h3>
            
            <Link className={classes.btn} href='/register'>Register</Link>
      </div>
    </section>
  )
}

export default LandingPage
