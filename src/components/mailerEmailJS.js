import React from "react";
import emailjs from "emailjs-com"

// This service works via https://dashboard.emailjs.com
// Future: this will need to be a paid service or move away to a self contained system

const Mailer = () => {

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm(
                "service_clkp08f",
                "template_fs3l63r",
                event.target,
                "user_ESBZ6f0nCHblj4DBipIIq"
            )
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
            document.getElementById('name').value='';
            document.getElementById('user_email').value='';
            document.getElementById('user_phone').value='';
            document.getElementById('event_date').value='';
            document.getElementById('message').value='';

    }
    
    return (
        <div className="Mailer">
            <h1>Contact</h1>
            <form >

                <label>Name</label>
                <br/>
                <input type="text" name="name" autocomplete="off"/>
                <br/>

                <label>Email</label>
                <br/>
                <input type="text" name="user_email" autocomplete="off"/>
                <br/>

                <label>Phone</label>
                <br/>
                <input type="text" name="user_phone" autocomplete="off"/>
                <br/>

                <label>Event Date</label>
                <br/>
                <input type="date" name="event_date" autocomplete="off"/>
                <br/>

                <label>Message</label>
                <br/>
                <textarea name="message" rows="4" autocomplete="off"/>
                <br/>

                <input type="submit" value="Send Email" onclick={sendEmail}/>

            </form>
        </div>
    );
}

export default Mailer;
