import React, { Component } from 'react'

class reading extends Component {
    render() {
        return (
            <div className="reading-info py-5" style={{marginTop:50,width:'100%',paddingLeft:'auto',paddingRight:'auto',height:'100%'}}>
                
            <h2 className="my-4 text-primary-3">Read the Paragraph Carefully....</h2>
                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                   like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <h3 className="my-4 text-primary-3 ml-4">Solve the given Question....</h3>
            <form className="quiz-form text-light" >
                <div className="question" style={{marginBottom:100}}>
                     <p className="lead form-weight-normal text-primary-3">1.What is the output of the following program ?</p>
                        <div className="float-left">
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q1" value="A" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>two</label>
                            </div>
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q1" value="B" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>error</label>
                            </div>
                        </div>
                       <div className="float-right rside">
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q1" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>10</label>
                            </div>
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q1" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>None of these</label>
                            </div>        
                       </div>    
                </div>

                <div className="question" style={{marginBottom:100}}>
                     <p className="lead form-weight-normal text-primary-3">2. Find the Largest number from the given option  ?</p>
                        <div className="float-left">
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q2" value="A" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>10**20</label>
                            </div>
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q2" value="B" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>10**-20</label>
                            </div>
                        </div>
                       <div className="float-right rside">
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q2" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>-0.1101</label>
                            </div>
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q2" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>-1.0000001</label>
                            </div>        
                       </div>    
                </div>
                <div className="question" style={{marginBottom:100}}>
                     <p className="lead form-weight-normal text-primary-3">3. Find the Largest number from the given option  ?</p>
                        <div className="float-left">
                            <div className="form-check my-1 text-white-50">
                                <input type="radio" name="q3" value="A" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>10**20</label>
                            </div>
                            <div className="form-check my-1 text-white-50">
                                <input type="radio" name="q3" value="B" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>10**-20</label>
                            </div>
                        </div>
                       <div className="float-right rside">
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q3" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>-0.1101</label>
                            </div>
                            <div className="form-check my-2 text-white-50">
                                <input type="radio" name="q3" value="D" checked />
                                <label className="form-check-label text-primary" style={{marginLeft:5}}>-1.0000001</label>
                            </div>        
                       </div>    
                </div>

                <div style={{marginTop:140,marginLeft:0,marginBottom:10}}>
                    <input type="submit" className="btn btn-primary-3" />
                </div>
               
            </form>
        </div>
        
        )
    }
}
export default  reading
