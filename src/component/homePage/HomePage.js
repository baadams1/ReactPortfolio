import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="HomePage">
        <header className="HomePage-Header">
          <div class="Title">
            <h1>
              Hello
              <span class="color">.</span>
              <br />I am
              <br />
              Bobby
            </h1>
          </div>
        </header>
        <div id="social-media">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/bobby-adams-ab330ba8/" target="">Linkedin</a>
          </li>
          <li>
            <a href="mailto:baadams1@coastal.edu">Mail</a>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}
HomePage.propTypes = {};

export default HomePage;
