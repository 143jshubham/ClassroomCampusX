import React from 'react'

function writeSomething() {
    return (
        <div className="something">
       
            <form className="createArea">
                <textarea   name="content"  placeholder="Write Something ......" rows="30" cols="100"/>
                <button type="Submit" className="btn badge-primary">Post</button>
            </form>    
        
        </div>
    )
}

export default writeSomething
