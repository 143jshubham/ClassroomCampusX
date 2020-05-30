import React, { Component } from 'react'
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
            <div className="card text-center">

                <div className="col-md-12">
                    <ul className="nav  nav-tabs card-header-tabs id='nav-tab' role='tablist' " style={{marginRight:`0px`,backgroundColor:'#eee',width:'105%'}}>
                        <li className="nav-item" style={{marginRight:-50}}>
                        <a className="nav-link active"
                        id="nav-post-tab" 
                        data-toggle="tab"
                            href="#nav-post" 
                            role="tab" 
                            aria-controls="nav-post"
                            aria-selected="true" style={{width:100}}
                           >
                            <span style={{marginRight:10}}><i class="fa fa-pencil-square" aria-hidden="true"></i></span>
                            Post
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" 
                        id="nav-gyan-tab"
                        data-toggle="tab" 
                        href="#nav-gyan"
                            role="tab" 
                            aria-controls="nav-gyan"
                            aria-selected="false" style={{width:100}}>
                            <span style={{marginRight:10}}><i class="fa fa-link" aria-hidden="true"></i></span>
                            Link
                        </a>
                        </li>
                    </ul>
                    {/* <ul className=" nav nav-tabs id='nav-tab' role='tablist'">
                        <li className="nav-iten" onClick={this.somethingClick}><a className="nav-link active"><span style={{marginRight:8}}> <FontAwesomeIcon icon={faPenSquare} /></span>Write Post</a></li>
                        <li className="nav-iem" onClick={this.gyanClick}><a className="nav-link"><span style={{marginRight:8}}> <FontAwesomeIcon icon={faPenSquare} /></span>Gyan</a></li>
                    </ul> */}
                

                <div className="card-body">
                <div class="tab-content" id="nav-tabContent">
                   
                    <div class="tab-pane fade show active post" id="nav-post" role="tabpanel" aria-labelledby="nav-post-tab">
                        <WriteSomething />
                    </div>
                    <div class="tab-pane fade gyan" id="nav-gyan" role="tabpanel" aria-labelledby="nav-gyan-tab">
                        <Gyan />
                    </div>
                    </div>
              
                </div>
                </div>
            </div>
            </div>
            
        
    )
}
}

export default createFeed
