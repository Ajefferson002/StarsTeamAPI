import React, { useState, useEffect } from "react"; 

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }

    
    useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
    
    return(

    <div className={`nav ${show && 'nav_black'}`}>
       
     <div className="nav_contents">
    
        <img 
        className="nav_logo"
        src="https://www.pngaaa.com/search/movie-logo/"
        alt=""
        />
        <img
        className="nav_avatar"        
        src="https://upleap.com/blog/how-to-create-the-perfect-instagram-profile-picture/"
        alt=""
        />
   
    <h1>This is the search</h1>
    </div>
    </div>

    )
    }