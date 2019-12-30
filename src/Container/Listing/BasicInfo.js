import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import BrideGroomService from '../../Service/BrideGroomService';

class BasicInfo extends Component {


    saveAndContinue = (value) => {
        //check email sudah terpakai atau belum
        const {dispatch,checkValidation,setErrorMessage,btnStatus}=this.props;
        const inputs = ReactDOM.findDOMNode(this).querySelectorAll('.validate');

        let val=[]; 
        inputs.forEach((input) => {  
            let check=checkValidation(input.name, input.value)
            val.push(check);
        });
          
        console.log("value",value);
        
         //get code from redux
        if(val.indexOf(false)===-1){
            if(btnStatus !== "edit"){
                BrideGroomService.checkName(value).then( 
                    (response) => { 
                        response.data === 0 ? dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'}) : setErrorMessage("email","email sudah terpakai")
                        //console.log("resp",response)
                    },
                );
            }else{
                dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'});
            }
        }else return false;//dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
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
                    <p><i class="small material-icons arrow-btn" onClick={this.back}>arrow_back</i></p>
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
                                <input id="url_name" name="name" type="text" class="validate" value={values.name.value} onChange={handleChange('name')}/>
                                <label for="url_name" className={true ? 'active' : ''}>URL Name *</label>
                                <span class="helper-text" data-error="right" >{values.name.errorMessage}</span>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_email" name="email" type="text" class="validate" disabled={btnStatus === "edit"? true:false} value={values.email.value} onChange={handleChange('email')}/>
                                <label for="bride_groom_email" className={values.email.value ? 'active' : ''}>Bride/Groom Email *</label>
                                <span class="helper-text" data-error="right" >{values.email.errorMessage}</span>
                            </div>
                            <div class="input-field col s12">
                                <input id="bride_groom_phone"  name="phone" type="text" class="validate" value={values.phone.value} onChange={handleChange('phone')}/>
                                <label for="bride_groom_phone" className={values.phone.value ? 'active' : ''}>Bride/Groom Phone *</label>
                                <span class="helper-text" data-error="right">{values.phone.errorMessage}</span>
                            </div>
                            <div class="input-field col s12">
                            <a class="waves-effect main-color btn u-wid-100" onClick={()=>this.saveAndContinue(values.name.value)}>continue</a>
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