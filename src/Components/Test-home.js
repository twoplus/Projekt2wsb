import { particleConfig } from "./ParticleConfig";
import Particles from 'react-particles-js';
import React from "react";

class Home extends React.Component {
  
  render() {
    return (<div className="body">
      <div id="particles-js">
      <Particles params={particleConfig}/>
        <div className="phrase">
          <h1>UX designer</h1>
        </div>
      </div>
      <div className="banner">
      <img  src="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="a photo of the ux designer"/>
        
      </div>
      <div className="contain">
        <div className="article">
        <h3>Jan Dzban, UX designer</h3>
        <p>
        I work all various aspects of design, traditional branding, marketing, and advertising, as well as, web and mobile UI design. I also have significant experience managing print and interactive projects, in-house staff and freelance designers, developers, photographers, editors and writers. I have an excellent design aesthetics and efficient time management skills. I enjoy finding creative solutions through technology and design, while maintaining superb quality and within budget. I also have a passion for emerging technology, branding and marketing strategy, as well as, UI/UX. And I have taught undergraduate and extended ed print and web design a various colleges/universities and conferences. 
        </p>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <p>

        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <p>

        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        <div className="signature" >
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Timothy_Spall_Signature.png" />
        </div>
        
        </div>


      </div>
    </div>
    );
  }
}
export { Home };