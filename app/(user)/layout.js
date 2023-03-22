import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

function Layout({children}) {
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Header />  
      {children}
      <Footer />
    </div>
  )
}

export default Layout
