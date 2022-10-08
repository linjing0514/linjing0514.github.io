import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReOrderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    // if the location is changed, we need to close the navbar
    const location = useLocation();
    useEffect(()=>{
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open': 'close'}>
        <div className="toggleButton">
            <button onClick= {() => {
                setExpandNavbar((prev)=> !prev);
            }}>
                <ReOrderIcon/>
            </button>
        </div>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experiences'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar