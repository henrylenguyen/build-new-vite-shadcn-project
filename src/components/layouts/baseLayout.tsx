import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/header'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ children }) => {
  return (
    <main className='font-proxima text-light min-h-screen w-full'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default BaseLayout
