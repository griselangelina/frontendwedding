import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';

class BasicInfo extends Component {


    saveAndContinue = (value) => {
        //check email sudah terpakai atau belum
        const {dispatch}=this.props;
         //get code from redux
        if(!true ){
            axios.get(`/api/bridegroom/email/${value}`).then( 
                (response) => { 
                    response.data === 0 ? dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'}) : alert('same')
                    //console.log("resp",response)
                },
            );
        }else dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
       // e.preventDefault()
        //dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
    }
    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'TEMPLATE_LIST'})
    }

    render() {
        const { values, handleChange, btnStatus } = this.props;

        return (
            <div>
            <div class="">
            
                 <div class="container">
                    <p><i class="small material-icons" onClick={this.back}>arrow_back</i></p>
                    <p>
                        <h3>Step - 1</h3>
                        Isikan data yang diperlukan di bawah ini
                    </p>
                    <div class="row">
                    </div>
                    <div class="row" >
                        <div class="col s12 m5 ">
                            <div class="icon-block">
                                <img src={"/template/"+values.templateId.value+".png"} style={{width:`100%`}} />
                            </div>
                        </div>
                        <div class="col s12 m7 bg-color">
                            <div class="input-field col s12">
                                <input id="url_name" type="text" class="validate" value={values.name.value} onChange={handleChange('name')}/>
                                <label for="url_name" className={values.name.value ? 'active' : ''}>URL Name *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_email" type="text" class="validate" disabled={btnStatus === "edit"? true:false} value={values.email.value} onChange={handleChange('email')}/>
                                <label for="bride_groom_email" className={values.email.value ? 'active' : ''}>Bride/Groom Email *</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_phone" type="text" class="validate" value={values.phone.value} onChange={handleChange('phone')}/>
                                <label for="bride_groom_phone" className={values.phone.value ? 'active' : ''}>Bride/Groom Phone *</label>
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