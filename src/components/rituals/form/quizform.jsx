import React, { Component } from 'react'
import { auto } from '@popperjs/core'

 class quizForm extends Component {
    render() {
        return (
            <div className="quiz-info py-4" style={{marginTop:50,width:'100%',paddingLeft:'auto',paddingRight:'auto',height:'100%'}}>
                
                    <h2 className="my-4 text-primary-3" style={{marginLeft:30}}>On with the Questions.....</h2>

                    <form className="quiz-form text-light" >
                        <div className="question" style={{marginBottom:100}}>
                             <p className="lead form-weight-normal">1.What is the output of the following program ?</p>
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
                             <p className="lead form-weight-normal">3. Find the Largest number from the given option  ?</p>
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
                             <p className="lead form-weight-normal">3. Find the Largest number from the given option  ?</p>
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
export default quizForm