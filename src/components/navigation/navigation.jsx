import React, { Component } from "react";
import NavBar from "./navBar";
import SideBar from "./sideBar";

// const Navigation = ({ onDrawTogglerClick, sideDrawerOpen }) => {
//   return (
//     <div className="wrapper">
//       <NavBar onDrawTogglerClick={onDrawTogglerClick} />
//       {sideDrawerOpen ? <SideBar /> : null}
//     </div>
//   );
// };

// export default Navigation;

class Navigation extends Component {
  state = {};
  render() {
    const { onDrawTogglerClick, sideDrawerOpen } = this.props;
    return (
      <div className="wrapper">
        <NavBar onDrawTogglerClick={onDrawTogglerClick} />
        {sideDrawerOpen ? (
          <SideBar onDrawTogglerClick={onDrawTogglerClick} />
        ) : null}
      </div>
    );
  }
}

export default Navigation;
