import React from 'react'

function gyan() {
    return (
        <div className="gyanplace">
            <form className="createArea">
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
                <button type="Submit">Submit</button>
        </form>
    </div>
    )
}

export default gyan
