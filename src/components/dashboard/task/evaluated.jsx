import React from 'react'

function evaluated() {
    return (
        <div className="card">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
                <tr className="first">
                    <th>Assignment</th>
                    <th>Marks Score</th>
                </tr>
                <tr>
                    <td class="last"><a>Assignment 8</a></td>
                    <td><a>95%</a></td>
                  
                </tr>
                <tr>
                    <td>Assignment 7</td>
                    <td>86%</td>   
                </tr>
                <tr>
                    <td>Assignment 6</td>
                    <td>82%</td>   
                </tr>
                <tr>
                    <td><a>Assignment 7</a></td>
                    <td>74%</td>
                </tr>
                <tr>
                    <td>Assignment 6</td>
                    <td>80%</td>
                </tr>
             
                </table>
            </div>
            
        </div>
    )
}

export default evaluated
