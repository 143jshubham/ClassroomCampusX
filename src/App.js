import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./static/css/dashboard.css";
import "./static/css/style.css";
import "./static/css/theme.min.css";
import Login from "./components/login/login";
import Logout from "./components/logout";
import Dashboard from "./components/dashboard/dashboard";
import NavigationComponent from "./components/navigation/navigation";
import MyClass from "./components/my_class/myClass";
import Profile from './components/profile/profile';
import TaskDetail from './components/taskDetail/taskDetail'
import Timeline from './components/timeline/timeline'

class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   sideDrawerOpen: false,
  // };

  // async componentDidMount() {
  //   if (localStorage.getItem("user_id")) {
  //     this.setState({ isLoggedIn: true });
  //   } else {
  //     this.setState({ isLoggedIn: false });
  //   }
  // }

  // handleLogin = () => {
  //   this.setState({ isLoggedIn: true });
  // };

  // drawTogglerClickHandler = () => {
  //   console.log("On Draw Toggler Click");
  //   this.setState((prevState) => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen };
  //   });
  // };

  render() {
    // const { isLoggedIn, sideDrawerOpen } = this.state;
    // console.log("Render called ", isLoggedIn);
    // console.log("SideBar opened ", sideDrawerOpen);
    // const renderNavBar = () => {
    //   if (isLoggedIn) {
    //     return (
    //       <NavigationComponent
    //         onDrawTogglerClick={this.drawTogglerClickHandler}
    //         sideDrawerOpen={sideDrawerOpen}
    //       />
    //     );
    //   }
    // };

    return (
       <React.Fragment>
      {/* {renderNavBar()} */}
        <div>
          <Switch>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/my-class" component={MyClass}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/task" component={TaskDetail}></Route>
            <Route path="/timeline" component={Timeline}></Route>
            {/* <Route
              path="/"
              exact
              render={() => {
                if (isLoggedIn) {
                  return <Dashboard />;
                } else {
                  return <Login onLogin={this.handleLogin} />;
                }
              }}
            ></Route> */}
          </Switch>
          </div>
        
       </React.Fragment>
    );
  }
}
export default App;
