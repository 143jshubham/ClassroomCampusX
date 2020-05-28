import React from 'react'

function pending() {
    return (
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
                <tr className="first">
                    <th>Task</th>
                    <th>Last Date of Submission</th>
                </tr>
                <tr>
                    <td class="last"><a>Task-5 (on Pandas)</a></td>
                    <td><a>15/06/2020</a></td>
                  
                </tr>
                <tr>
                    <td>Task-4 (on pandas)</td>
                    <td>18/06/2020</td>   
                </tr>
                <tr>
                    <td>Task-3 (on pandas)</td>
                    <td>21/06/2020</td>   
                </tr>
                <tr>
                    <td><a>Task-2 (on pandas)</a></td>
                    <td>25/06/2020</td>
                </tr>
                <tr>
                    <td>Task-1 (on pandas)</td>
                    <td>30/06/2020</td>
                </tr>
               
                </table>
            </div>
            
        
    )
}

export default pending
