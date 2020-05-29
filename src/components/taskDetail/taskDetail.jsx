import React from 'react'
import TaskHead from './taskhead'
import Hint from './hint'
import Solution from './solution'
import Leaderboard from './leaderboard'
import GoToTask from './goToTask'
import NavBar from '../navigation/navBar'


function taskDetail() {
    return (
        <div>
         <NavBar />
       
        <div class="container-fluid " style={{marginTop:80}}>
        <div class="row">
            <div class="col-md-9 col-sm-12 col-xs-12 mt-3">
                <div class="card shadow-lg" style={{height: `100%`}}>
    
                    <div class="card-header bg-primary-3" >
                        <h4 class="text-md-center text-light">Decision Boundary on Iris Dataset</h4>
                    </div>
                    <div class="card-body">
                        <TaskHead />
                       
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 mt-1">
                                <div class="accordion" id="accordionExample">
                                    <Hint />
                                    <Solution />
    
                                  
                                  
    
    
                                </div>
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
    
            <div class="col-md-3 col-sm-12 col-xs-12">
               
                <a href="#" target="_blank">
                    <button class="btn btn-lg btn-block mt-3 text-light bg-primary-3" style={{height:30,lineHeight:0,marginTop:40}}>Go to Task</button>
                </a>
                <GoToTask />
                <Leaderboard />
              
              
                </div> 
    
            </div>
    
        </div>
        </div>
    
    
    )
}

export default taskDetail
