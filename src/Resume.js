import React from 'react';
import tennisResume from './Tennis Resume-website.docx'

function Resume() {

    function shareResume() {

    }
    return (
        <div className="resume"><a href={tennisResume} download>Download Resume</a></div>
    )
}

export default Resume


