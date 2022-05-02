import "./topbar.scss"
import { Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className="handle">MattyBwoy</a>
          <div className="itemContainer">
            <a href="#contact" className="mailTo"><Mail className="icon" />matthew_lock20@hotmail.com</a>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
