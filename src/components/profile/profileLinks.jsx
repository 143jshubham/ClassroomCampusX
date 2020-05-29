import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

function profileLinks() {
    return (
        <div class="container infopro">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
             
        </div>
        <div class="col-md-6 mt-5">
            
            <div class="card">
            <div class="visit">
           
            <i class="fa fa-linkedin fa-4x" aria-hidden="true"></i>
            </div>
                <h5 class="card-title">Linkdin</h5>
                <a href="#" class="btn btn-succes">visit your Linkdin</a>
            </div>


        </div>
        <div class="col-md-6 mt-5">
            <div class="card rcard">
            <div class="visit">
                <i class="fa fa-github fa-4x" aria-hidden="true"></i>
            </div>
                <h5 class="card-title">Github</h5>
                <a href="#" class="btn btn-succes">Visit your Github </a>
            </div>
            </div>
        
        <div class="col-md-6 mt-5">
            <div class="card">
            <div class="visit">
            <i class="fa fa-medium fa-4x" aria-hidden="true"></i>
            </div>
                <h5 class="card-title">Medium</h5>
                <a href="#" class="btn btn-succes">visit your Medium</a>
            </div>
        </div>
        <div class="col-md-6 mt-5">
            <div class="card rcard">
            <div class="visit">
            <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
            </div>
                <h5 class="card-title">Portfolio</h5>
                <a href="#" class="btn btn-succes">visit your Portfolio</a>
            </div>
        </div>
        </div>
    </div>

    
    )
}

export default profileLinks
