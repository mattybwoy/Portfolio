import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <h1>About</h1>
      <div className='top'>
        <div className='imageContainer'>
          <img src='/assets/iceBear2.png' alt='' />
        </div>
      </div>
      <div className='middle'>
        My name is Matthew and I have resurfaced as a software developer. 
      </div>
      <div className='bottom'>
        Likes
        
      </div>
      <img src='/assets/coffee.png' alt='' />
    </div>
  )
}
