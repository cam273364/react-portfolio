import React from 'react';
import githubMarkWhite from './github-mark.png'
import linkedInLogo from './LI-In-Bug.png'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/cam273364"><span class="github-logo"><img src={githubMarkWhite} class="footer-logos" /></span></a>
            <a href="https://www.linkedin.com/in/cameron-malone-7585b798/"><span><img src={linkedInLogo} class="footer-logos"/></span></a>
        </footer>
    )
}

export default Footer

//a tag around entirety of line 8 and 9

// class="footer-logos"