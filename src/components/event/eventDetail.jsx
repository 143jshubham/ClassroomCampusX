import React, { Component } from 'react'
import Eventhead from './eventhead'
import Leaderboard from './leaderboard'

 function taskDetail()  {
   
        return (
            <div ClassName="container-fluid" style={{marginTop:80}}>
                <div class="row" style={{padding:10}}>
                    <div class="col-md-9  col-12 mt-3">
                        <div class="card shadow-lg" style={{height:`100%`,width:'100%'}}>
            
                            <div class="card-header bg-primary-3" >
                                <h4 class="text-md-center text-light">Event Name</h4>
                            </div>
                            <div class="card-body">
                                <Eventhead />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-3">
                        <Leaderboard />
                     </div> 
                 </div>
            </div>
        )
    }

export default taskDetail