import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("website")
  const list = [
    {
      id: "website",
      title: "Website"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
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
