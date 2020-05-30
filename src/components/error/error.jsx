import React from 'react'
import boyerror from '../../static/img/boyerror.png'


function error() {
    return (
        <div className="error">
            <div className="row">
                 <hgroup>
                    <h1>Page Not Found</h1>
                    <h2 style={{textAlign:`center`}}>We couldn't find what you were looking for.</h2>
                </hgroup>
                <div id="boy" style={{backgroundImage:`url(${boyerror})`,width:`300px`,height:`400px`,backgroundSize:`cover`}}></div>
            </div>
               
        </div>
    )
}

export default error
