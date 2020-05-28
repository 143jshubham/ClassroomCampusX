import React, { Component } from "react";
import AllFeed from "./allFeed";
import Classmate from "./classmate";
import CreateFeed from "./createFeed";
import Jumbo from "./jumbo";
import Ticker from "./ticker";
import KnowYourMate from "./knowYourMate";
import ClassState from "./classState";
import NavBar from '../navigation/navBar'

class MyClass extends Component {
  state = {};
  render() {
    console.log("MyClass mounted");
    return (
      <div>
      <NavBar/>
      <div className="container">
        <Jumbo />

        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <Classmate />
              </div>

              <div className="col-md-12">
                <KnowYourMate />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <CreateFeed />
              </div>

              <div className="col-md-12">
                <AllFeed />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <Ticker />
              </div>
              <div className="col-md-12">
                <ClassState />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MyClass;
