import { ReactNode } from 'react'
import Footer from './footer'

interface LayoutProps {
	children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer copyRight={'Naima'} />
    </>
  )
}

export default Layout
