import React from "react";
import "./App.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup"; 
import Block from "./Block";

export default function App() {
  // let history = useHistory();

  // function redirect() {
  //   history.push("./Block")
  // }

  return (
      <Router>
    <div className="App">
      <h1>Reports</h1>
    <div className="listContainer">
      <ListGroup>
        <ListGroup.Item>
          Id: 722019d4f302 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          {/* <button onClick={redirect} className="button1">Block</button> */}
          <br />
          State: Open <span className="middleText2">Message: null</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>
          Id: 3c4224f40ba2 <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: null</span>  
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>   
          Id: 06aff536bb6c <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: null</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>

        <ListGroup.Item>
          Id: 24a79676a5ac <span className="middleText1">Type: Spam</span>
          <button className="button1">Block</button>
          <br />
          State: Open <span className="middleText2">Message: null</span> 
          <button className="button2">Resolve</button>
          <br />
          <a className="link">Details</a>
        </ListGroup.Item>
      </ListGroup>

      {/* <Switch> 
       <Route exact path="/" component={Home} />
        <Route exact path="./Block" component={Block} /> 
      </Switch> */}
    </div>
    </div>
    </Router>
  );
}


