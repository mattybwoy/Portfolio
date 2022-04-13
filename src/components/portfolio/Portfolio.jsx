import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { allPortfolio, reactPortfolio, reactNativePortfolio, javascriptPortfolio, swiftPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("all")
  const [data, setData] = useState([])

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
      id: "react-native",
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

  useEffect(() => {

    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "react-native":
        setData(reactNativePortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "swift":
        setData(swiftPortfolio);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
      {list.map((item) => (
        <PortfolioList title = {item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
      ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
