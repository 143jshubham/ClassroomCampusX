import React from 'react'

function taskhead() {
    return (
        <div>
        <h6 className="card-title"><strong>Marks: 10 </strong><span class="float-right"><p><strong>Deadline: 20/07/2020 </strong></p></span>
                    </h6>
                    <h6 className="card-title"><strong>Qualities: </strong>
                        <span className="badge badge-primary p-2 m-1">coding </span>
                        <span className="badge badge-primary p-2 m-1"> Diligence</span>
                       </h6>
                    <h6 className="card-title"><strong>Task Description</strong></h6>
                    <p className="card-text">In this task, you have to plot the decision boundary by building a predictor on the Iris Dataset.
                    </p>
                    <p>Note: Consider only the Petal Length and Sepal Lenght column to do the predictions, ignore the other 2.</p>
                    <h6 className="card-title"><strong>Description Video</strong></h6>
                    <div className="mt-1">
                        <div className="card" style={{height: 400}}>
                            <div className="card-body align-items-center d-flex justify-content-center">
                               
                                <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/{{ task_det.6 }}"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                </iframe>
                                
                               
                                
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default taskhead
