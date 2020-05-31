import React from 'react'

function courseVideo() {
    return (
        <div>
            <div className="card" style={{height: 550}}>
                <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/{{ task_det.6 }}"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                    </iframe>
                </div>
            
        </div>
    )
}

export default courseVideo
