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
  state={}
  render() {
    // const { onDrawTogglerClick, sideDrawerOpen } = this.props;
    // console.log("Inside Navigation Compoenent", sideDrawerOpen);
    // const renderDrawer = () => {
    //   if (sideDrawerOpen) {
    //     return <SideBar />;
    //   }
    // };
    return (
      <div className="wrapper">
        {/* {<NavBar onDrawTogglerClick={onDrawTogglerClick} /> } */}
       
      </div>
    );
  }
}

export default Navigation;
