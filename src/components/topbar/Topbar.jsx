import "./topbar.scss"
import { Mail } from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className="handle">MattyBwoy</a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>matthew_lock20@hotmail.com</span>
          </div>
        </div>
        
        <div className="right">
          This is Right
        </div>
      </div>
    </div>
  )
}
