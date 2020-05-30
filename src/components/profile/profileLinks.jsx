import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

function profileLinks() {
    return (
        <div className="container infopro">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
             
        </div>
        <div className="col-md-6 mt-5">
            
            <div className="card">
            <div className="visit">
           
            <i className="fa fa-linkedin fa-4x" aria-hidden="true"></i>
            </div>
                
                <a href="#" > Linkdin profile</a>
            </div>


        </div>
        <div className="col-md-6 mt-5">
            <div className="card rcard">
            <div className="visit">
                <i className="fa fa-github fa-4x" aria-hidden="true"></i>
            </div>
               
                <a href="#"> Github profile</a>
            </div>
            </div>
        
        <div className="col-md-6 mt-5">
            <div className="card ">
            <div className="visit">
            <i className="fa fa-medium fa-4x" aria-hidden="true"></i>
            </div>
               
                <a href="#"  >Medium profile</a>
            </div>
        </div>
        <div className="col-md-6 mt-5">
            <div className="card rcard">
            <div className="visit">
            <i className="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
            </div>
                
                <a href="#"> Portfolio profile</a>
            </div>
        </div>
        </div>
    </div>

    
    )
}

export default profileLinks
