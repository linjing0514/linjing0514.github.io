import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Jing!</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript ⋅ Python ⋅ Java ⋅ C</span>
          </li>
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML/CSS ⋅ Angular ⋅ React ⋅ Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>MongoDB ⋅ Node.js ⋅ Express ⋅ SQL ⋅ REST APIs</span>
          </li>
          <li className="item">
            <h2>Analytics</h2>
            <span>R ⋅ Excel ⋅ Databricks/Jupyter Notebook</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home