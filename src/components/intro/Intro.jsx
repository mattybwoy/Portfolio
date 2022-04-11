import "./intro.scss"
import { ExpandMore } from '@material-ui/icons';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 200,
      startDelay: 1000,
      backDelay: 3000,
      backSpeed: 100,
      strings: ["Junior Developer"],
    })
  },[]);

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
          <h3>
            <span ref={textRef}></span>
          </h3>

          <a href="#about">
            <ExpandMore className="icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}
