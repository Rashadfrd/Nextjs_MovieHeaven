import '../styles/reset.css'
import '../styles/global.css'
import Providers from './providers'
import { Provider } from '@/context/AppContext'

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body>
          <Provider>
            <Providers> 
              {children}
            </Providers>
          </Provider>
        </body>
    </html>
  )
}
