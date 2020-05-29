import React, { Component } from 'react'
import EditprofileForm from './editprofileForm'

class profileInfo extends Component {
    state={
        editform:false
    }
    handleEdit=(e)=>{
        this.setState({
            ...this.state,
            editform:true
        })
    }
    handleClose=(e)=>{
        this.setState({
            ...this.state,
            editform:false
        })
    }
    render(){
    return (
        <div class="profilesec">
        <div class="card">
          <img src="img/sir.png" alt="Avatar" class="avatar"/>
          <div class="card-body">
              
            <table className="table table-bordered table-striped mb-0">
                  <tr className="first">
                      <th>Name <span>:</span></th>
                      <th class="Information">Shubham kr. Raj</th>
                      
                  </tr>
                   <tr className="first">
                      <th>College <span>:</span></th>
                      <th class="Information">Haldia Institute of Technology</th>
                     
                  </tr>
                  <tr className="first">
                      <th>Department <span>:</span></th>
                      <th class="Information">Information Technology</th>
                      
                  </tr>
                   <tr className="first">
                      <th>Passing Year <span>:</span></th>
                      <th class="Information">2022</th>
                     
                  </tr>
                 
                  </table>

           </div>
           <button type="button" className="btn badge-primary" onClick={this.handleEdit}>Edit</button>
           {this.state.editform ? <EditprofileForm handleClose={this.handleClose} />:null }
        </div>
      </div>
    )
}
}
export default profileInfo
