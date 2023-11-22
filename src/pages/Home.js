import React from 'react'
import '../styles/Home.css'
import {AiOutlineMail}  from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Anna</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <AiOutlineMail />
          <BsGithub />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJS, HTML, CSS
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>PHP,MySql,Laravel,OOP,MVC</span>
            </li>
                  <span>PHP,MySql,Laravel,OOP,MVC</span>

            <li className='item'>
              <h2>Languages</h2>
              <span>JavaScript,TypeScript</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
