import React from 'react'

function gyan() {
    return (
        <div className="gyanplace">
        <div className="card" style={{width:`32rem`,marginLeft:-32,}}>
            <form className="createArea">
                <textarea   name="content"  placeholder="Write Something ......" rows="2" cols="80"/> 
                <input type="url" name="link"  placeholder="Place you Link here......" />
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>General</option>
                    <option value="1">Web Design</option>
                    <option value="2">Data Analysis</option>
                    <option value="3">Machine Learning</option>
                    <option value="1">Networking</option>
                    <option value="2">Data Science</option>
                    <option value="3">Artificial Intelligence</option>
                </select>
                <button type="Submit" className="btn badge-primary">Submit</button>
        </form>
    </div>
    </div>
    )
}

export default gyan
