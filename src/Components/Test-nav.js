import React from "react";
import { NavLink} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Nav extends React.Component {
  constructor(){
    // goTo = () => {
    //   this.setState({pin: 2});
    // }
  }
  
  
  render() {
    
    
   
    return (<ul className="nav">
      <li ><NavLink exact className="inactive" activeClassName="_active" to="/">Home</NavLink> </li>
      <li ><NavLink className="inactive" activeClassName="_active" to="/about">About</NavLink> </li>
      <li ><NavLink className="inactive" activeClassName="_active" to="/contact">Contact</NavLink>  </li>
      <li ><NavLink className="inactive" activeClassName="_active" to="/projects">Projects</NavLink>  </li>
      <li ><NavLink className="inactive" activeClassName="_active" to="/customers">Customers</NavLink>  </li>
      <li ><NavLink className="inactive" activeClassName="_active" to="/blog"><FontAwesome
        className="super-crazy-colors"
        name="rocket"
        
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />Blog</NavLink>  </li>
      
    </ul>);
  }
}
export { Nav };