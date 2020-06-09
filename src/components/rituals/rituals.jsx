import React, { Component } from 'react'
import Quiz from './cards/quiz'
import Puzzle from './cards/puzzle'
import Code from './cards/code'
import Reading from './cards/reading'
import Aptitude from './cards/aptitude'

class rituals extends Component {
    render() {
        return (
                <div className="container-fluid ritual">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-11 col-12">
                            <div className="card maincard bg-primary-3" style={{marginTop:70,width:'100%'}}>    
                                <div className="row">
                                    <div className="col-md-7 col-7 upcard">
                                        <div className="row">
                                            <div className="col-md-12 col-12"><Code /></div>
                                            <div className="col-md-6 col-6 mt-1"><Aptitude /></div>
                                            <div className="col-md-6 col-6 mt-1"><Puzzle /></div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-5 lowcard">
                                         <div className="col-md-12 col-12"><Quiz /></div>
                                        <div className="col-md-12 col-12 mt-1"><Reading /></div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            
        

        )
    }
}
export default rituals