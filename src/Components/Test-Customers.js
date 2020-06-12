import React from "react";
import { customerLogos } from "./customerLogo"

class Customers extends React.Component {
  render() {
    const lines = customerLogos;
    return (
    <div className="body">
        <div className="contain">
        <h3 >Customers</h3>
          <div className="artile logoWrap">
          {lines.map((line,idx)=> (
            <div className="logo" key={idx}>
              <img src={line.logo} alt={line.name}/>
            </div>
          ))}
          </div>
        </div>
    </div>
    );
  }
}
export { Customers };