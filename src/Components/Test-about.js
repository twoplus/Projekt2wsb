import React from "react";
import { childhoodDrivels } from "./autobio"

class About extends React.Component {
  render() {
    const lines = childhoodDrivels;
    return (<div className="body">
    <div className="contain">
    <div className="article">
    <p >About</p>
    {lines.map((line,idx)=> (
      <p key={idx}>{line}</p>
    ))}
    </div>
    </div>
    </div>);
  }
}
export { About };