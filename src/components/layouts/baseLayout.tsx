import IconBxChevronUp from '@/assets/icons/chevUp'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/header'
import ScrollToTop from 'react-scroll-to-top'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ children }) => {
  return (
    <main className='font-proxima min-h-screen w-full  text-light'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default BaseLayout
