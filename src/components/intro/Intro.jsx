import "./intro.scss"
//import { ExpandMoreIcon } from "@material-ui/icons";
import {ExpandMore} from '@material-ui/icons';

export default function intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/lofi_me.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Matthew Lock</h1>
          <h3>Junior Developer<span></span></h3>
          <a href="#about">
            <ExpandMore className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
