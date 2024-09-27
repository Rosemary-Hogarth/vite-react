import './App.css'
import Image from './Image'
import Header from './Header'
import ButtonSection from './ButtonSection'
import MainContent from "./MainContent"
import FooterSection from "./FooterSection"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faLinkedin)


export default function App() {

  return (
    < div className="container">
      <Image />
      <Header />
      <ButtonSection />
      <MainContent />
      <FooterSection />
    </div>
  )
}





// footer
