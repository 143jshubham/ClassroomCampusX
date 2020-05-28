import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { facebookSquare } from "@fortawesome/free-solid-svg-icons";
import WriteSomething from './gyan/writeSomething'
import Gyan from './gyan/gyan'

class  createFeed extends Component{
    state={
        isdisplay:true
    }
    somethingClick=(e)=>{
        this.setState({
            ...this.state,
            isdisplay:false
        })
    }
    gyanClick=(e)=>{
        this.setState({
            ...this.state,
            isdisplay:true
        })
    }
    render(){
    return (
        <div className="feed">
            <div className="card">
                
                    {/* <h5>Create Feed</h5>
                    <textarea className="form-control"></textarea> */}
                    <ul>
                        <li onClick={this.somethingClick}><span style={{marginRight:8}}> <FontAwesomeIcon icon={faPenSquare} /></span>Write Post</li>
                        <li onClick={this.gyanClick}><span style={{marginRight:8}}> <FontAwesomeIcon icon={faPenSquare} /></span>Gyan</li>
                    </ul>
                <div className="card-body">
                    {this.state.isdisplay ? <Gyan />:<WriteSomething />}
                </div>
            </div>
        </div>
    )
}
}

export default createFeed
