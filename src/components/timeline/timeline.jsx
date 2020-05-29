import React from 'react'
import ProfileSection from './profileSection'
import GyanAdded from './gyanAdded'
import TaskAdded from './taskAdded'
import ContentAdded from './contentAdded'
import TaskEvaluation from './taskEvaluation'
import Youtube from './youtube'
import NavBar from '../navigation/navBar'


function timeline() {
    return (
        <div>
        <NavBar />
        <div class="container-fluid" style={{marginTop:80}}>
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
             <ProfileSection />      
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                
                <h4 class="card-title underline mt-3 mb-3 ml-1 mr-1"><u>Day <span>129</span></u></h4>
                    <TaskAdded />
                    <ContentAdded />
                    <TaskEvaluation />
                    <Youtube />
                    <GyanAdded />
                <div class="card m-1">
                    <div class="card-body border border-secondary border-3">
                        <h6 class="card-text float-right"></h6><br/>
                        <h6 class="card-title"></h6>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    </div>
    )
}

export default timeline
