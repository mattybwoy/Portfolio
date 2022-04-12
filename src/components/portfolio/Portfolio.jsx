import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Website</li>
        <li>Web App</li>
        <li>Mobile</li>
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
