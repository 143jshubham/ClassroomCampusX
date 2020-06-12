import React, { Component } from 'react'

class eventhead extends Component {
    render() {
        return (
                <div className="eventhead">    
                     <h6 className="card-title"><strong>Category:Coding</strong></h6><span className="time"><h6 class="float-right"><strong>Start time:12:00 am</strong></h6></span>
                        
                        <h6 className="float-right duration" style={{marginRight:-137}}><strong>Duration:2 hours</strong></h6>
                   
                    
                    <div className="mt-5 inside">
                        <h6 className="card-title"><strong>Event Description</strong></h6>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                         Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                       
                        <h6 className="card-title"><strong>Description Image</strong></h6>
                        <div className="mt-1">
                            <div className="card" style={{height:400}}> 
                                    <img src="img/bg1-min.jpeg" style={{height:400,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
            
        )
    }
}
export default  eventhead