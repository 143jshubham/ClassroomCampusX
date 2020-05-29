import React from 'react'

function goToTask() {
    return (
        <div class="card mt-2 mb-2" style={{boxShadow:`0px 0px 4px #ddd`}}>
        <div class="card-body">
            <form action="/submission_insert" method="POST">
                <div class="form-group">
                    <div class="form-group">
                    <input type="hidden" class="form-control" name="deadline" value="shubham" />
                        <input type="hidden" class="form-control" name="task_id"
                               value="{{ task_id }}" />
                        <label><b>Task URL:</b></label>
                        <input type="url" class="form-control" name="task_sub_url" style={{borderColor:`#08652B`}} />
                    </div>
                    <input type="submit" class="btn badge-primary" value="Submit" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default goToTask
