import React from 'react'
import NavBar from '../navigation/navBar'
import CourseSideLecture from './courseSideLecture'
import Coursevideo from './courseVideo'

function courseDashboard() {
    return (
        <div>
        <NavBar />
        <div className="container-fluid">
            <div className="row" style={{marginTop:100}}>
                <div className="col-md-8">
                   <Coursevideo />

                </div>
                <div className="col-md-4">
                <CourseSideLecture />
                </div>
            </div>
            
        </div>
    
    </div>
    )
}

export default courseDashboard
