import React from 'react';
import headshot from './headshot.jpeg'

function AboutMe() {
    return (
        <div>
            <img src={headshot}/>
            <div><h1>About Me</h1></div>
            <div><h5>My name is Cam Malone, and I'm a PTR certified tennis coach who has been working on learning software development for the last 6 months. Please, check out all of the projects I've been working on and let me know if you have any advice for a green software engineer!</h5></div>
        
        </div>
        
    )
    
}

export default AboutMe