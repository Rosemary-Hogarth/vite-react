import Facebook_Icon from './images/Facebook_Icon.png'
import GitHub_Icon from './images/GitHub_Icon.png'
import Twitter_Icon from './images/Twitter_Icon.png'
import Instagram_Icon from './images/Instagram_Icon.png'

export default function Footer() {
  return (
    <footer className="footer-socials">
      <img src={Twitter_Icon} alt="twitter-logo" width="25px"/>
      <img src={Facebook_Icon} alt="facebook-logo" width="25px"/>
      <img src={Instagram_Icon} alt="instagram-logo"width="25px"/>
      <img src={GitHub_Icon} alt="github-logo" width="25px"/>
    </footer>
  )
}
