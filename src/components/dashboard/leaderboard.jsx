import React from "react";

const Leaderboard = () => {
  return (
    <div className="leader">
      <div> <a class="Atitle" style={{color:`#fff`,textAlign:"center"}}>Leaderboard</a></div>
      <div className="leader-hr">
      <hr/>
      <div className="card">
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
      
                  <table className="table table-bordered table-striped mb-0">
                  <thead style={{backgroundColor:`#327697`}}>
                  <tr className="first">
                      <th style={{fontSize:20}}>Rank</th>
                      <th style={{fontSize:20}}>Name</th>
                      <th style={{fontSize:20}}>Score</th>
                  </tr>
                  </thead>
                
                  <tr>
                      <td>01</td>
                      <td><a>Nitish</a></td>
                      <td><a>160</a></td>
                    
                  </tr>
                  <tr>
                      <td>02</td>
                      <td>Sutirthasaha</td>
                      <td><a>140</a></td>   
                  </tr>
                  <tr>
                      <td>03</td>
                      <td>Katrina</td>
                      <td><a>135</a></td>   
                  </tr>
                  <tr>
                      <td><a>04</a></td>
                      <td>Akash</td>
                      <td><a>130</a></td>
                  </tr>
                  <tr>
                      <td>05</td>
                      <td>Rahul</td>
                      <td><a>120</a></td>
                  </tr>
                  <tr>
                      <td>06</td>
                      <td>Shubham</td>
                      <td><a>110</a></td>
                  </tr>
                  <tr>
                      <td>05</td>
                      <td>Suman</td>
                      <td><a>110</a></td>
                  </tr>
              
                  </table>
              </div>
              </div>
              
      </div>
    </div>
  );
};

export default Leaderboard;
