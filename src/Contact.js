import React from 'react';
import { useState } from 'react';

function Contact() {

    const[errorMessage, setErrorMessage] = useState('')

    const [email, setEmail] = useState('') 
    function handleEmailChange(event) {
        setEmail(event.target.value)
      }
    
    function handleEmailBlur(event) {
       const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
       if(!re.test(email)) {
            setErrorMessage(`${email} is not a valid email, you'll need a valid email to send Cam a message.`)
       }
    }

    const [name, setName] = useState('')
    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleNameBlur(event) {
        console.log('blur')
        if(!name) {
            setErrorMessage(`The 'Name' field is required to send Cam a message.`)
        }
    }

    const [message, setMessage] = useState('')
    function handleMessageChange(event) {
        setMessage(event.target.value)
    }

    function handleMessageBlur(event) {
        if(!message) {
            setErrorMessage(`The 'Message' field is required to send Cam a message.`)
        }
    }

    function handleMessageButton(event) {
        if (!message) {
            setErrorMessage(`You need to fill in the 'Message' field before pressing the send button.`)
            return  
        }
        sendEmail(name, email, message)
    }

    function sendEmail(name, email, message) {
        const subject = `${name} wants to network with Cam`
        window.open(`mailto:cam273364@gmail.com?subject=${subject}&body=${message}`)
    }

    //blur event
    return (
        <div>
            <form>
  <div class="form-group">
    <label for="inputEmail4"><h5>Email</h5></label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="rickybobby@shake_n_bake.com" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur}/>
  </div>
  <div class="form-group">
    <label for="inputName"><h5>Name</h5></label>
    <input type="text" class="form-control" id="inputName" placeholder="Ricky Bobby" value={name} onChange={handleNameChange} onBlur={handleNameBlur}/>
  </div>
  <div class="form-group">
    <label for="inputMessage"><h5>Message</h5></label>
    <input type="text" class="form-control" id="inputMessage" placeholder="If you ain't first, you're last!" value={message} onChange={handleMessageChange} onBlur={handleMessageBlur}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleMessageButton}>Send Message</button>
</form>
<div class="error-message">{errorMessage}</div>
        </div>
        
    )
    
}

export default Contact