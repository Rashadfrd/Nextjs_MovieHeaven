import '../styles/reset.css'
import '../styles/global.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  )
}
