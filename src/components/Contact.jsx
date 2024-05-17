import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <>
    <div className='main_form_container_contact'>
    <article  className='contact_desc'>Let's Connect To Each Other</article>

        <div className="form-container_contact">
      <form className="form_contact">
        <div className="form-group">
          <label for="text">Full Name</label>
          <input type="text" id="text" name="text" required=""/>
        </div>
        <div className="form-group">
          <label for="text">Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div className="form-group">
          <label for="text">Address</label>
          <input type="text" id="text" name="text" required=""/>
        </div>
      
        <div className="form-group">
          <label for="textarea">Message</label>
          <input name="textarea" id="textarea" rows="10" cols="50" required="" />  
        </div>
        <div className="button">
        <a className="form-submit-btn" type="submit">Submit</a>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact