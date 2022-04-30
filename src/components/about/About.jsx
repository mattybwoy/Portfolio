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
        My name is Matthew, resurfacing as a software developer.
        A former Makers alumni with a passion for learning, coding, creating new projects and always challenging myself.
        A full stack developer with native iOS skills, I'm currently working on building more apps within iOS.

        I can tell you I don't have money, but what I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a nightmare for people like you to handle.

      </div>
      <div className='bottom'>
        Likes
        <img src ='assets/heart.png' alt=''/>
      </div>
      <div className='pictures'>
        <img src='/assets/bubble-tea.png' alt=''/>
        <img src='/assets/book.png' alt='' />
        <img src='/assets/binary-code.png' alt='' />
        <img src='/assets/badminton.png' alt='' />
        <img src='/assets/suitcase.png' alt='' />
      </div>
    </div>

  )
}
