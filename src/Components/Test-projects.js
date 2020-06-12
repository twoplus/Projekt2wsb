import React from "react";
import { MosaicTile } from "./MosaicTile";
import { projects } from "./projects";

class Projects extends React.Component {
  render() {
    const numbers = [32,45354,23,32,743434];
    
    // Correct! Key should be specified inside the array.
   // <MosaicTile key={number.toString()} value={number} />
  
    return (<div className="body grid-contain">
      
       {projects.map( project => (
         <div key={project.id} className="grid-item">
         <p>{project.name}</p>
         <img src={project.img}/>
         
         
        </div>
        ))}

      </div>
    );
  }
}
export { Projects };
