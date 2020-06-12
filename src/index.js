import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as BRouter, Route, Switch} from 'react-router-dom';
import './style.css';
import { Nav } from './Components/Test-nav';
import { Home } from './Components/Test-home';
import { About } from './Components/Test-about';
import { Contact } from './Components/Test-contact';
import { Projects } from './Components/Test-projects';
import { Customers } from './Components/Test-Customers';
import { Blog } from './Components/Test-Blog';
import { Footer } from './Components/Test-footer';
import { NotFound } from './Components/Test-notfound';



class App extends Component {
  constructor() {
    super();
    this.state = {
      pin: 1
    };
  }
  
  render() {
    
    return (
    <BRouter>
      <section>
        <Nav/>
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/customers" component={Customers} />
          <Route path="/blog" component={Blog} />
          <Route  component={NotFound} />
        </Switch>
        <Footer />
    </section>
    </BRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
