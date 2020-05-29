import React from 'react'
import ProfileInfo from './profileInfo'
import ProfileLinks from './profileLinks'
import NavBar from '../navigation/navBar'

function profile() {
    return (
        <div>
        <NavBar />
        <div class="container-fluid userinfo mt-5 mb-5">
        <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <ProfileInfo /> 
                </div>
                <div class="col-lg-8 col-md-8 col-12">
                    <div className="row">
                        <div className="col-md-10" style={{marginTop:50}}>
                            <div className="card" style={{height: 400}}>
                            <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/{{ task_det.6 }}"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                             </iframe>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <ProfileLinks />
                        </div>
                    </div>
                    
                </div>
            </div>        
        </div>
    </div>
    )
}

export default profile
