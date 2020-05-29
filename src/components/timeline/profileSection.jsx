import React from 'react'

function profileSection() {
    return (
        <div class="profilesec">
        <div class="card">
          <img src="img/sir.png" alt="Avatar" class="avatar"/>
          <div class="card-body">
              
            <table className="table table-bordered table-striped mb-0">
                  <tr className="first">
                      <th>Name <span>:</span></th>
                      <th class="Information">Shubham kr. Raj</th>
                      
                  </tr>
                   <tr className="first">
                      <th>College <span>:</span></th>
                      <th class="Information">Haldia Institute of Technology</th>
                     
                  </tr>
                  <tr className="first">
                      <th>Department <span>:</span></th>
                      <th class="Information">Information Technology</th>
                      
                  </tr>
                   <tr className="first">
                      <th>Passing Year <span>:</span></th>
                      <th class="Information">2022</th>
                     
                  </tr>
                  <tr className="first">
                      <th>Batch Id<span>:</span></th>
                      <th class="Information">001-0010</th>
                     
                  </tr>
                 
                  </table>

           </div>
        </div>
      </div>
    )
}

export default profileSection
