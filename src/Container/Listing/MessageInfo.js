import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';

class MessageInfo extends Component {

    saveAndContinue = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO_NEXT'})
    }
    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO'})
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div>
            <div class="section">
                 <div class="container">
                 <i class="small material-icons"onClick={this.back}>arrow_back</i>

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
                                <input id="bride_name" type="text" class="validate" value={values.brideName.value} onChange={handleChange('brideName')}/>
                                <label for="bride_name">Bride Name *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="groom_name" type="text" class="validate"  value={values.groomName.value} onChange={handleChange('groomName')}/>
                                <label for="groom_name">Groom Name *</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="when" type="date" class="validate"  value={values.weddingDate.value} onChange={handleChange('weddingDate')}/>
                                <label for="when">Wedding Date *</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="when" type="time" class="validate"  value={values.weddingTime.value} onChange={handleChange('weddingTime')}/>
                                <label for="when">Wedding Time *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="where" type="text" class="validate" value={values.loc1.value} onChange={handleChange('loc1')}/>
                                <label for="where">Wedding Venue *</label>
                            </div>
                            <a class="waves-effect main-color btn u-wid-100" onClick={this.saveAndContinue}>continue</a>
                        </div>
                    </div>
                 </div>
            </div>
            <Footer/>
            </div>
        );
    }
}

MessageInfo.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(MessageInfo);


