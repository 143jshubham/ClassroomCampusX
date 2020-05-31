import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,} from "@fortawesome/free-solid-svg-icons";

function courseSideLecture() {
    return (
       <div className="side-lecture">
           <div className="card">
             <div className="table-wrapper-scroll-y my-custom-scrollbar">
      
                  <table className="table table-bordered table-striped mb-0">
                    <thead style={{backgroundColor:`#4a8964`}}>
                    <tr className="first">
                        <th style={{fontSize:20,color:`#fff`}}>No.</th>
                        <th style={{fontSize:20 ,color:`#fff`}}>Topic Related</th>
                        <th style={{fontSize:20 ,color:`#fff`}}>Duration</th>
                    </tr>
                    </thead>
                
                  <tr>
                      <td>01</td>
                      <td>Course Introduction</td>
                      <td><a>00:03:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>02</td>
                    <td>why this course</td>
                      <td><a>00:09:16</a></td>
                     
                  </tr>
                  <tr>
                      <td>03</td>
                      <td>why programming</td>
                      <td><a>00:13:16</a></td>
                       
                  </tr>
                  <tr>
                      <td><a>04</a></td>
                      <td>why so many programmer job</td>
                      <td><a>00:06:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>05</td>
                      <td>which one is best language</td>
                      <td><a>00:03:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>06</td>
                      <td>what is important</td>
                      <td><a>00:20:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>07</td>
                      <td>Best language 2020</td>
                      <td><a>00:23:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>08</td>
                      <td>Phase of python</td>
                      <td><a>00:03:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>09</td>
                      <td>Python uses in data Analysis</td>
                      <td><a>00:36:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>future of python</td>
                      <td><a>01:03:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>11</td>
                      <td>Basic of python</td>
                      <td><a>00:53:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>Web Development using python</td>
                      <td><a>01:23:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>13</td>
                      <td>Data Analysis</td>
                      <td><a>00:20:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>14</td>
                      <td>Summary of python</td>
                      <td><a>00:03:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>15</td>
                      <td>Everyday Life</td>
                      <td><a>00:10:16</a></td>
                    
                  </tr>
                  <tr>
                      <td>05</td>
                      <td>Aaj ka Gyan</td>
                      <td><a>00:06:16</a></td>
                    
                  </tr>
              
                  </table>
              </div>
              </div>
              
       </div>
    )
}

export default courseSideLecture
