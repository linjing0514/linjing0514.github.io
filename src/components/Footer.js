import React from 'react'
import '../styles/Footer.css'
//import differenct icons
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <EmailIcon onClick={event =>  window.location.href='mailto:linjing0514@gmail.com'}/>
            <GitHubIcon onClick={event => window.location.href='https://github.com/linjing0514'}/>
            <LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/jing-lin-iced'}/>
        </div>
        <p>&copy; 2021-2023</p>
    </div>
  )
}

export default Footer