import React from 'react'
import './Contact.css'
function Contact() {

  function sendMessage(){
    fetch('http://localhost:8080/contact',({
      method:'POST',
      body :JSON.stringify( {
        "name":"Rohit",
        "email":"rohit001@gmail.com",
        "message":"I have a query about visiting paris"
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }))
    .then(response=>response.json())
    .then((data)=>{
      console.log(data)
    })
  }

  
  return (
    <div class="box-contact">
      <div class='form'>
        <h1>Have any questions? <br></br>
          Contact Us!
        </h1>
        <form className='d-flex flex-column' >
          <input type="text" placeholder='Your name' className='my-2 p-2'/>
          <input type="email" placeholder='Your Email'className='my-2 p-2' />
          <textarea name="" id="" cols="10" rows="10"className='my-3' placeholder='Your message to Us'></textarea>
         
        </form>
        <button class="btn-contact" onClick={sendMessage}>SEND MESSAGE</button>
      </div>
    {/* Correct  Usage of If else in react is with Ternary operator */}
      {/* {number=='2' ? "Its a even number" :"its not 2"}

      Traditional Methos of if-else

      if(number=='2'){
        "its a even number"
      }
      else{
        "its not 2"
      } */}
      <div class="picture">
      <img src="https://cdn-imgix.headout.com/blog-content/image/9ead73c770c985c17e2f969da09fb013-See%20the%20Eiffel%20Tower.jpg" alt="" />
      </div>
    </div>
    
  )
}

export default Contact
