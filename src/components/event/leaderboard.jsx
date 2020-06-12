import React, { Component } from 'react'

 class leaderboard extends Component {
    render() {
        return (
            <div className="card shadow-lg">
            <div className="card-header bg-primary-3">
                <h4 className="text-md-center text-light">Winners</h4>
            </div>
            <div className=" overflow-auto" style={{height:300}}>
       
                <table className="table table-bordered table-striped mb-0">
                <tr className="first" style={{backgroundColor:`#ddd`}}>
                    <th style={{color:`#fff`}}><strong>Name</strong></th>    
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td> Shubham</td> 
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Himanshu</td>   
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Suman</td>   
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Adarsh</td>  
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Suraj</td>
                   
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Suraj</td>
                   
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Suraj</td>
                   
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td>Suraj</td>
                   
                </tr>
             
                </table>
              
           
        </div>
        </div>
        
        
        )
        }
    }

export default leaderboard