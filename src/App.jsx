import React, { Component } from "react";
import { hot } from "react-hot-loader";
import BoxesContainer from "./BoxesContainer.jsx";

// style importing - Eliot test
import "../public/style.css";

// importing Material Design io
import Button from "@material-ui/core/Button";

// my test components
import InputForm from "./testComponent - InputForm.jsx";
import InfoForm from "./testComponent - InfoPage.jsx";
import HabitCalendar from "./testComponent - Calendar.jsx";

//Importing test Form component to test rendering to page - Ashley
import Form from "./testComponent - Form.jsx";


// this is the destructuring from react router
import { Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Eliot's Test Code
class App extends Component {
  /*
Declaring state in app component so that habit prop name can be passed
down to child components in order to keep track of which habit was 
chosen from the home page. 
*/
  constructor(props) {
    super(props);
    this.state = {
      habitName: []
    };
  }
  // This is rendering using Router - Eliot's test code
  render() {
    return (
      <Switch>
        <div>
          <h1>APP</h1>
          {/* <Link to="/">Boxes</Link> */}
          <Button
            className="buttonsRouter"
            // placeholder="Button 1"
            component={Link}
            to="/"
          ></Button>
          <Route exact strict path="/" component={BoxesContainer} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            // placeholder="Button 2"
            to="/asdf"
          ></Button>
          <Route exact strict path="/info" component={InfoForm} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            // placeholder="Button 4"
            to="/input"
          ></Button>
          <Route exact strict path="/input" component={Form} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            // placeholder="Button 5"
            component={Link}
            to="/cal"
          ></Button>
          <Route exact strict path="/cal" component={HabitCalendar} />
        </div>
      </Switch>
    );
  }
}

// export default hot(module)(App);
export default App;
