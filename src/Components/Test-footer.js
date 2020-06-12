import React from "react";

class Footer extends React.Component {
  render() {
    const now = new Date();
    const nowYear = now.getFullYear();
    return (<div className="footer"><p >{nowYear} - WSB Projekt 2 - GR I - Przemek</p></div>);
  }
}
export { Footer };