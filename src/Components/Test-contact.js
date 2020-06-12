import React from "react";

class Contact extends React.Component {
  state = {
    sent: true,
    err: true,
    nme: "ss"
  }
  toggleSent = () => {
    this.setState({sent: !this.state.sent} );
  }

  render() {
    const test = (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const msg = document.getElementById("message").value;
      this.setState({nme: name})
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validEmail = re.test(String(email).toLowerCase());
      
      const result = {}
      name ? result.name = 1 : result.name = 0;
      validEmail ? result.email = 1 : result.email = 0;
      msg ? result.msg = 1 : result.msg = 0;

      if (result.name && result.email && result.msg) {
        this.toggleSent();
      } else {

      }
      
      console.log(result);
      //return result;
    }
    const Rsnt = (props) => {
      return <div>Thank you contacting me <span className="name">{props.name}</span>. <br/> I'll get back to you as soon as I can. until please keep exploring my website.<br/>
      <button onClick={this.toggleSent} className="btn puffy">Send another message</button>
      </div>
    }
    const Frm = () => {
      return <div className="myForm">
        <form >
        <p>Name</p>
        <input type="text" id="name" name="name" placeholder="Your name.."/>
        <p>Email</p>
        <input type="text" id="email" name="email" placeholder="Your email.."/>
        <p>Query type</p>
        <select id="country" name="country">
          <option value="1">Quote request</option>
          <option value="2">Other</option>
          <option value="3">Consultation</option>
        </select>
        <p>Message</p>
        <textarea id="message" name="message" rows="20" placeholder="Write something.." ></textarea>
        <br/>
        <input onClick={test} className="btn" type="submit" value="Submit"/>
        </form>
      </div>
    }
    const Myform = () => 
    <div className="body">
      <div className="contain">
      <div className="map">
      <iframe src="https://maps.google.com/maps?q=berlin&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://divi-discount.com/elegant-themes/"></a>
      
      </div>
      <h2 >Contact</h2>
      <div>{this.state.sent? <Frm/> : <Rsnt name={this.state.nme}/>}</div>
      
      </div>
    </div>
    return <Myform />;
  }
}
export { Contact };
