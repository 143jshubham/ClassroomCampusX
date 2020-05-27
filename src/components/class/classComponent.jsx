import React, { Component } from "react";
import AllFeed from './allFeed'
import Classmate from './classmate'
import CreateFeed from './createFeed'
import Jumbo from './jumbo'
import Ticker from './ticker'
import KnowYourMate from './knowYourMate'
import ClassState from './classState'


class classComponent extends Component {
    state = {};
    render() {
      return (
        <div className="container">
            <Jumbo />

             <div class="row">

                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-12">
                            <Classmate />
                            
                        </div>

                        
                        <div class="col-md-12">
                            <KnowYourMate />
                        </div>
                    </div>
                </div>

                <div class="col-md-6">

                    <div class="row">
                        <div class="col-md-12">
                            <CreateFeed />
                            
                        </div>

                        <div class="col-md-12">
                            <AllFeed />
                        
                        </div>
                    </div>
                    
                </div>

                <div class="col-md-3">

                    <div class="row">
                        <div class="col-md-12">
                            <Ticker />

                        
                        </div>
                        <div class="col-md-12">
                            <ClassState />
                            
                        </div>
                    </div>
                    
                </div>

            </div>
          

         
        </div>
      );
    }
  }
  
  export default classComponent;