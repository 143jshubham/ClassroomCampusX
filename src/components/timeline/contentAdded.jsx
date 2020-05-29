import React from 'react'

function contentAdded() {
    return (
        <div className="card m-1 border border-danger border-3">
        <div className="card-body">
            <h6 className="card-text float-right">20/05/2020</h6><br/>
            <h6 className="card-title">Created the task on Movie review sentiment analyzer. People who have done the project can submit it</h6>
            <a href="/course_content?course_id={{ activity.2 }}" className="btn btn-danger">Go to
                Course</a>
        </div>
    </div>
    )
}

export default contentAdded
