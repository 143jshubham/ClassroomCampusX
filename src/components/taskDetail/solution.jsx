import React from 'react'

function solution() {
    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                     <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                             data-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                         Solution
                    </button>
                </h2>
             </div>


            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                <div className="card-body align-items-center d-flex justify-content-center">
                   
                    <iframe id="iframe2" width="100%" height="300px"
                            src="https://www.youtube.com/embed/{{ task_det.4 }}"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                     >
                    </iframe>
                    
                    <h4 className="text-center"><strong>No Solution Video Added Yet</strong>
                    </h4>
                   
                </div>
            </div>

        </div>
    )
}

export default solution
