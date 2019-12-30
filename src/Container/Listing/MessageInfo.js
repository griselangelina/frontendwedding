import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

class MessageInfo extends Component {

    saveAndContinue = (e) => {
        const {dispatch,checkValidation}=this.props;
        const inputs = ReactDOM.findDOMNode(this).querySelectorAll('.validate');

        console.log("inputspart2",inputs)
        let val=[]; 
        inputs.forEach((input) => {  
            let check=checkValidation(input.name, input.value)
            val.push(check);
        });

        if(val.indexOf(false)===-1){
            dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO_NEXT'})
        }else{
            return;
        }
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
            <div class="">
                 <div class="container">
                 <i class="small material-icons arrow-btn"onClick={this.back}>arrow_back</i>

                 <p>
                    <h3>Step - 2</h3>
                    Isikan data yang diperlukan di bawah ini.

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
                                <input id="bride_name" name="brideName" type="text" class="validate" value={values.brideName.value} onChange={handleChange('brideName')}/>
                                <label for="bride_name" class={values.brideName.value ? 'active':''}>Bride Name *</label>
                                <span class="helper-text" data-error="right">{values.brideName.errorMessage}</span>
                            </div>
                            <div class="input-field col s12">
                                <input id="groom_name" type="text" name="groomName" class="validate"  value={values.groomName.value} onChange={handleChange('groomName')}/>
                                <label for="groom_name" class={values.groomName.value ? 'active':''}>Groom Name *</label>
                                <span class="helper-text" data-error="right">{values.groomName.errorMessage}</span>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="when" type="date" name="whenDate" class="validate"  value={values.whenDate.value} onChange={handleChange('whenDate')}/>
                                <label for="when" class={values.whenDate.value ? 'active':''}>Wedding Date *</label>
                                <span class="helper-text" data-error="right">{values.whenDate.errorMessage}</span>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="when" type="time" name="whenTime" class="validate"  value={values.whenTime.value} onChange={handleChange('whenTime')}/>
                                <label for="when" class={values.whenTime.value ? 'active':''}>Wedding Time *</label>
                                <span class="helper-text" data-error="right">{values.whenTime.errorMessage}</span>
                            </div>
                            <div class="input-field col s12">
                                <input id="where" type="text"  name="loc1" class="validate" value={values.loc1.value} onChange={handleChange('loc1')}/>
                                <label for="where" class={values.loc1.value ? 'active':''}>Wedding Venue *</label>
                                <span class="helper-text" data-error="right">{values.loc1.errorMessage}</span>

                            </div>
                            <a class="waves-effect main-color btn u-wid-100 u-mr-12" onClick={this.back}>back</a>
                            <a class="waves-effect main-color btn u-wid-100 u-mr-12" onClick={this.saveAndContinue}>continue</a>
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


