import '../../styles/reset.css'
import '../../styles/global.css'
import LoginHeader from '@/components/login/loginheader'
import LoginFooter from '@/components/login/loginfooter'
import classes from '../../components/login/style.module.css'

function Layout({children}) {
  return (
    <section className={classes.login}>
        <LoginHeader />
        {children}
        <LoginFooter />
    </section>
  )
}

export default Layout
