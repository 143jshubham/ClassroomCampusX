import React ,{ Component } from "react";
import boyerror from '../../static/img/boyerror.png'


class Working extends Component {
    constructor(props) {
      super(props);

    this.countDate = new Date("July 5, 2020 15:37:25").getTime()
    }
    
    getProgress() {
        const now = new Date().getTime()
        const distance=this.countDate-now
        return Math.round(distance % (1000 * 60 * 60 * 24)) / (1000 * 40 * 40)
    }
    
    render() {
      const progress = this.getProgress()
      return (
          <div className="row bg-primary-3">
          
            <div className="container workIn">
            <hgroup><h1>Work in progress</h1></hgroup>
            
            <div className="work-progress">
                <div className="work-complete" style={{width:`${progress}%`}}>
                <div className="fill-liquid"></div>
                </div>
                <span className="progressStatus" style={{color:`#fff`,zIndex:`2`}}>{progress}%</span>
            </div>
            </div>
            <div id="boy" style={{backgroundImage:`url(${boyerror})`,width:`300px`,height:`400px`,backgroundSize:`cover`,marginTop:90,marginLeft:200}}></div>
        </div>
      )
    }
  }
  
  export default Working;
  