import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import axios from 'axios';

class BasicInfo extends Component {


    saveAndContinue = (value) => {
        //check email sudah terpakai atau belum
        const {dispatch}=this.props;
        axios.get(`/api/bridegroom/email/${value}`).then( 
            (response) => { 
                response.data===0 ?dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'}):alert
             },
        );
       // e.preventDefault()
        //dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
    }
    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'TEMPLATE_LIST'})
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div>
            
            <div class="section">
            
                 <div class="container">
                    <p><i class="small material-icons" onClick={this.back}>arrow_back</i></p>
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
                                <input id="url_name" type="text" class="validate" value={values.name.value} onChange={handleChange('name')}/>
                                <label for="url_name">URL Name *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_email" type="text" class="validate" value={values.email.value} onChange={handleChange('email')}/>
                                <label for="bride_groom_email">Bride/Groom Email *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_phone" type="text" class="validate" value={values.phone.value} onChange={handleChange('phone')}/>
                                <label for="bride_groom_phone">Bride/Groom Phone *</label>
                            </div>
                            <div class="input-field col s12">
                            <a class="waves-effect main-color btn u-wid-100" onClick={()=>this.saveAndContinue(values.email.value)}>continue</a>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <Footer/>
            </div>

        );
    }
}

BasicInfo.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(BasicInfo);