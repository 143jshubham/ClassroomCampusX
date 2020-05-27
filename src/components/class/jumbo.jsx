import React from 'react'
import bgimg from '../../static/img/class_bg.jpg'

function jumbo() {
    return (
        <div className="jumbo jumbotron bg-white text-white"  style={{ marginTop: 60 ,backgroundImage:`url(${bgimg})`,backgroundSize:`cover` }} >
            <h1 className="display-4"style={{marginTop:10}}>KolMLB#3</h1>
            <p classname="lead text-white" style={{marginBottom: -20 ,color:`#fff`}}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    )
}

export default jumbo
