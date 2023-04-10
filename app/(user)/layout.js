import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Search from '@/components/search'

async function Layout({children}) {
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative'}}>
      <Header />  
      <Search />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
