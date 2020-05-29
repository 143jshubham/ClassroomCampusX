import React from 'react'

function hint() {
    return (
        <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="false"
                                aria-controls="collapseOne">
                            Hint
                        </button>
                    </h2>
                </div>



                 <div id="collapseOne" className="collapse" aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                    <div className="card-body align-items-center d-flex justify-content-center">
                        
                        <iframe id="iframe1" width="100%" height="400px"
                                 src="https://www.youtube.com/embed/{{ task_det.5 }}"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                        >
                        </iframe>
                       
                        <h4 className="text-center"><strong>No Hint Video Added Yet</strong>
                        </h4>
                        
                    </div>
                </div>

             </div>
    )
}

export default hint
