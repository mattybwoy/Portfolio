import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("all")
  const list = [
    {
      id: "all",
      title: "All"
    }, 
    {
      id: "react",
      title: "React"
    }, 
    {
      id: "react native",
      title: "React Native"
    }, 
    {
      id: "javascript",
      title: "Javascript"
    },
    {
      id: "swift",
      title: "Swift"
    }
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
      {list.map((item) => (
        <PortfolioList title = {item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
      ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt=""/>
        <h3>Lofi Radio</h3>
        </div>
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt="" />
          <h3>Lofi Radio</h3>
        </div>
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt="" />
          <h3>Lofi Radio</h3>
        </div>
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt="" />
          <h3>Lofi Radio</h3>
        </div>
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt="" />
          <h3>Lofi Radio</h3>
        </div>
        <div className="item">
          <img src="assets/Lofi_girl_logo.jpeg" alt="" />
          <h3>Lofi Radio</h3>
        </div>
      </div>
    </div>
  )
}
