import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./static/css/dashboard.css";
import "./static/css/style.css";
import "./static/css/theme.min.css";
import Login from "./components/login/login";
import Logout from "./components/logout";
import Dashboard from "./components/dashboard/dashboard";
import NavigationComponent from "./components/navigation/navigation";
import MyClass from "./components/my_class/myClass";
import Task from "./components/task/task";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timeline from "./components/timeline/timeline";
import Profile from "./components/profile/profile";
import WorkInProgress from "./components/common/workInProgress";
import MyCourses from "./components/my_courses/myCourses";
import Course from "./components/my_courses/course";
import GuestLogin from "./components/login/guestLogin";
import NotFound from "./components/common/notFound";
import Rituals from "./components/rituals/rituals";
import Quiz from "./components/rituals/form/quizform";
import Reading from "./components/rituals/form/reading"
import Aptitude from "./components/rituals/form/aptitude";
import Puzzle from "./components/rituals/form/puzzle"

class App extends Component {
  state = {
    isLoggedIn: false,
    sideDrawerOpen: false,
  };

  async componentDidMount() {
    if (localStorage.getItem("user_id")) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  drawTogglerClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    const { isLoggedIn, sideDrawerOpen } = this.state;
    const renderNavBar = () => {
      if (isLoggedIn) {
        return (
          <NavigationComponent
            onDrawTogglerClick={this.drawTogglerClickHandler}
            sideDrawerOpen={sideDrawerOpen}
          />
        );
      }
    };

    return (
      <React.Fragment>
        <ToastContainer />
        {renderNavBar()}
        <div>
          <Switch>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/guest" component={GuestLogin}></Route>
            <Route path="/my-courses/:courseId" component={Course}></Route>
            <Route path="/my-courses" component={MyCourses}></Route>
            <Route path="/fun-cards" component={WorkInProgress}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/timeline" component={Timeline}></Route>
            <Route path="/task/:taskId" component={Task}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/my-class" component={MyClass}></Route>
            <Route path="/rituals" component={Rituals}></Route>
            <Route path="/quiz" component={Quiz}></Route>
            <Route path="/reading" component={Reading}></Route>
            <Route path="/aptitude" component={Aptitude}></Route>
            <Route path="/puzzle" component={Puzzle}></Route>
            <Route
              path="/"
              exact
              render={() => {
                if (isLoggedIn) {
                  return <Dashboard />;
                } else {
                  return <Login onLogin={this.handleLogin} />;
                }
              }}
            ></Route>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
