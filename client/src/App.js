import React from "react";
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'; 

function App() {
  return (
    <div className="App">
      <h1>Reports</h1>
    <div className="listContainer">
      <ListGroup>
        <ListGroup.Item>
          Id: 722019d4f302 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: Some message...</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>
          Id: 722019d4f302 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: Some message...</span>  
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>   
          Id: 722019d4f302 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: Some message...</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>
          Id: 722019d4f302 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: Some message...</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>
      </ListGroup>
    </div>
    </div>
  );
}

export default App;
