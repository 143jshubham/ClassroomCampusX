import React from 'react'

function youtube() {
    return (
        <div className="card m-1 border border-warning">
        <div className="card-body">
            <h6 className="card-text float-right"></h6><br/>
            <h6 className="card-title"></h6>
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/{{ activity.3 }}"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
        </div>
    </div>
    )
}

export default youtube
