import React from 'react'

function editprofileForm(props) {
    function handleClick(e){
        props.handleClose()
    }
    return (
        <div className="edit-info">
        <div className="dropdown">
            <div className="card">
                <div className="headingpart badge-primary">
                    <div className="close" onClick={handleClick}>x</div>
                    <h2 style={{color:`#fff`}}>Update Your Detail</h2>	
                </div>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <div className="form-item">
                <form method="Post" action="/sample">
                    <div className="input-section" method="Post">
                        <label>First Name:-</label>
                        <input type="text" name="skill-inp"  placeholder="ex-shubham" />
                        <label>Last Name:-</label>
                        <input type="text" name="skill-inp"  placeholder="ex-Raj" />
                        <label>College:-</label>
                        <input type="text" name="skill-inp"  placeholder="ex-IIT Delhi" />
                        <label>Branch:-</label>
                        <input type="text" name="skill-inp"  placeholder="ex-Information Technology" />
                        <label>Passing Year:-</label>
                        <input type="text" name="skill-inp"  placeholder="ex-2022" />
                        <label>Resume Video:-</label>
                        <input type="text" name="skill-inp"  placeholder="http://youtube.com" />
                        <label>Blog Link:-</label>
                        <input type="text" name="skill-inp"  placeholder="http://myblog.com" />
                        <label>Github profile:-</label>
                        <input type="text" name="skill-inp"  placeholder="htt://github.com/my_profile"/>
                        <label>Linkdin Profile:-</label>
                        <input type="text" name="skill-inp"  placeholder="http://linkdin.com/my-profile"/>
                        <label>portfolio Link:-</label>
                        <input type="text" name="skill-inp"  placeholder="http://myportfolio.com"/>
                        <div className="but">
                            <button type="submit" className="button badge-primary">Update</button>
                        </div>
                    </div>
                
                </form>
                </div>
            </div>
            </div>
    
    
        </div>
    </div>
    )
}

export default editprofileForm
