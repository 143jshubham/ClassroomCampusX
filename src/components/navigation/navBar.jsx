import React ,{ Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import DrawerToggleButton from "./drawerToggleButton";
import SideBar from "./sideBar";

// const NavBar = ({ onDrawTogglerClick }) => {
  class NavBar extends Component{

    state = {
      isdisplay:false,
    };
   
    onDrawTogglerClick=(e)=>{
      this.setState({
        ...this.state,
        isdisplay:true
  
      })
    }
    handleClose=(e)=>{
      this.setState({
          isdisplay:false,
      })
  }
  
  render(){
    console.log(this.state.isdisplay)
  return (
    <div>
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary-3 fixed-top"
      style={{ height: 60 }}
    >
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-primary btn-sm"
        onClick={this.onDrawTogglerClick}
      >
        <DrawerToggleButton />
      </button>
      <a
        className="navbar-brand navbar-brand-dynamic-color"
        href="/"
        style={{ marginLeft: 20 }}
      >
        CAMPUSX
      </a>
    </nav>
     {this.state.isdisplay ? <SideBar handleClose={this.handleClose} />:null}
    </div>
  );
    }
};

export default NavBar;
