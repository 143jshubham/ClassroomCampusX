import React from 'react'

function leaderboard() {
    return (
        <div className="card shadow-lg">
        <div className="card-header bg-primary-3">
            <h4 className="text-md-center text-light">Leaderboard</h4>

        </div>
            <div className=" overflow-auto" style={{height:300}}>
       
                <table className="table table-bordered table-striped mb-0">
                <tr className="first" style={{backgroundColor:`#ddd`}}>
                    <th style={{color:`#fff`}}>Name</th>
                    <th style={{color:`#fff`}}>Marks Score</th>
                </tr>
                <tr>
                    <td class="last"><a>Shubham</a></td>
                    <td><a>95%</a></td>
                  
                </tr>
                <tr>
                    <td>Himanshu</td>
                    <td>86%</td>   
                </tr>
                <tr>
                    <td>Suman</td>
                    <td>82%</td>   
                </tr>
                <tr>
                    <td><a>Adarsh</a></td>
                    <td>74%</td>
                </tr>
                <tr>
                    <td>Suraj</td>
                    <td>80%</td>
                </tr>
             
                </table>
              
            <p><strong>*Green color signifies the winner of the task</strong></p>
            <p><strong>*Click on the name to view submissions</strong></p>
            <div className="card">
                <div className="card-body align-items-center d-flex justify-content-center">
                    <h4 className="text-center"><strong>No one has submitted yet</strong>
                    </h4>
                </div>
            </div>
           
        </div>
        <div className="modal fade" id="submissionmodal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Task Submissions</h3>
                    </div>
                    <div className="modal-body">
                        <h4 id="submissions"></h4>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default leaderboard
