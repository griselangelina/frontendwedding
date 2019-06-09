import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';

class NextInfo extends Component {

    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
    }

    render() {
        const { values, handleChange,submit,handleFileChosen } = this.props;

        console.log("lohhh",values)
        return (
            <div>
            <div class="section">
                 <div class="container">
                 <i class="small material-icons" onClick={this.back}>arrow_back</i>

                 <p>
                    <h4>Create Invitation</h4>
                    Select one of our 100+ new designs to start your wedding website. Try it out – you can change it at any time.


                </p>
                    <div class="row">
                    </div>
                    <div class="row" >
                        <div class="col s12 m7 ">
                            <div class="icon-block">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                            </div>
                        </div>
                        <div class="col s12 m5 bg-color">
                            <div class="input-field col s12">
                                <textarea id="quotes" class="materialize-textarea"  value={values.ourStory1.value} onChange={handleChange('ourStory1')}></textarea>
                                <label for="quotes">Quotes</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="story" class="materialize-textarea"  value={values.ourStory2.value} onChange={handleChange('ourStory2')}></textarea>
                                <label for="story">Groom/Bride Story</label>
                            </div>
                            <div class="input-field col s12">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input type="file" name="file" accept=".png" onChange={e=>handleFileChosen(e.target.files[0])}/>
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text"/>
                                </div>
                                </div>
                            </div>
                            <a class="waves-effect main-color btn u-wid-100" onClick={()=>submit()}>Submit</a>
                        </div>
                    </div>
                 </div>
            </div>
            <Footer/>
            </div>
        );
    }
}

NextInfo.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(NextInfo);