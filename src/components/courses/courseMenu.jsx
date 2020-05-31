import React from 'react'
import NavBar from '../navigation/navBar'
import { NavLink } from "react-router-dom";

function courseMenu() {
    return (
        <div>
            <NavBar />
            <div className="container coursemenu">
            <div className="coursehead" style={{marginTop:150}}><h3 className="text-primary-3">Let's start learning, Shubham Kumar</h3></div>
                <div className="row" style={{marginTop:50}}>
                    <div className="col-md-4">
                    <NavLink to="/coursedash">
                        <div className="card">
                            <img class="card-img-left" src="img/web.jpeg" alt="Card image cap" style={{width:124,height:126}} />
                                <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i>  
                            <div className="card-body">
                            <h5>Principle of Component Analysis</h5> 
                        
                            <hr/>
                            </div>  
                        </div>
                     </NavLink>
                        
                    </div>
                    <div className="col-md-4">
                        <NavLink to="/coursedash">
                            <div className="card">
                                <img class="card-img" src="img/bg1-min.jpeg" alt="Card image cap" style={{width:124,height:126}} />
                                <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i>
                                <div className="card-body">
                                    <h5>Logic Behind Naive Bayes</h5> 
                                <hr />
                                </div>  
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-4">
                        <NavLink to="/coursedash">
                            <div className="card">
                                <img class="card-img-left" src="img/web.jpeg" alt="Card image cap" style={{width:124,height:126}} />
                                <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i>
                                <div className="card-body">
                                <h5>Principle of Component Analysis</h5> 
                                <hr/>
                                </div>  
                            </div>
                        </NavLink>    
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default courseMenu
