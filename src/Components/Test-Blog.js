import React from "react";

class Blog extends React.Component {
  state = {
    isLoading: true,
    items: [],
    error: null
  };
 
  url = `https://jsonplaceholder.typicode.com/posts/1/comments`;
  //url = `https://chatterberry.com/db/db.json`;
 
  fetchNews() {
    fetch(this.url)
        .then( (response) => response.json() ) 
        .then( data => 
  
          this.setState({
            items: data,
            isLoading: false,
          })
  
      )
      .catch(error => this.setState({ error, isLoading: false }));
    }
  componentDidMount() {
    this.fetchNews();
    console.info("zupa");
  }
  render() {
    
    const { isLoading, items } = this.state;
    //const lines = ["adress line 1", "city", "post code"];
    
    
    


    console.log("out:",items)

    return (<div className="body">
    <div className="contain">
    <div className="article">
    <h2 >{this.state.isLoading?"Loading...":"Testimonials"}</h2>
    {items.map( line=> (
      <div>
      <h5 key={line.id}>{line.name}<span> {line.email.toLowerCase()}</span></h5>
      <p>{line.body}</p>
      </div>
    ))}
    </div>
    </div>
    </div>);
  }
}
export { Blog };