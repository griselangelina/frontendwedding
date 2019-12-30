import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { Redirect } from 'react-router-dom';

import TemplateList from './TemplateList';
import BasicInfo from './BasicInfo';
import MessageInfo from './MessageInfo';

import NextInfo from './NextInfo';
import axios from 'axios';
import * as Validator from '../../helper/Validator';
import queryString from 'query-string';
import UserService from '../../Service/UserService';
import BrideGroomService from '../../Service/BrideGroomService';

class index extends Component {

        state = {
            step:1,
            form:{
                name: {
					value: '',
					validation: {
						required: true
					},
					isError: false,
					errorMessage: '',
					label: 'Name'
				},
                brideName: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'Bride Name'
				},
                groomName: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'Groom Name'
				},
                email: {
					value: '',
					validation: {
						required: true,
						isEmail: true
					},
					isError: false,
					errorMessage: '',
					label: 'Email'
				},
                phone: {
					value: '',
					validation: {
						required: true,
						isNumber:true,
					},
					isError: false,
					errorMessage: '',
					label: 'Phone'
				},
                whenDate: {
					value: '',
					validation: {
						required: true,
						largeThan:true
					},
					isError: false,
					errorMessage: '',
					label: 'Wedding Date'
				},
                whenTime: {
					value: '',
					validation: {
						required: true
					},
					isError: false,
					errorMessage: '',
					label: 'Wedding Time'
				},
                loc1: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'Venue'
				},
                ourStory1: {
					value: '',
					validation: {
					},
					isError: false,
					errorMessage: '',
					label: 'ourStory1'
				},
                ourStory2: {
					value: '',
					validation: {
					},
					isError: false,
					errorMessage: '',
					label: 'ourStory2'
				},
                templateId: {
					value: '',
					validation: {
					},
					isError: false,
					errorMessage: '',
					templateId: {
						label: 'templateId'
					}
				},
				headerPicture:{
					value: '',
					validation: {
					},
					isError: false,
					errorMessage: '',
					label: 'headerPicture'
				}
			},
		btnStatus:"save",
		loader:false
        }
    
        componentDidMount(){
			const { dispatch } = this.props;

			const values = queryString.parse(this.props.location.search)
			
			let form = Object.assign({}, this.state.form);
            if(values.done ){
				//dont use bridegroom props but use axios to get data first using reducer 
				axios.get(`/api/bridegroom/${values.done}`).then( 
					(response) => {
						let statusCopy = Object.entries(response.data);
						console.log("statusCopy",statusCopy)
						for(const [x,t]  of statusCopy){
						  // form[x].value=t
						  if(form[x]){
							form[x].value=t
						  }
						}
						this.setState({ ...this.state,form: form}, console.log("formmmmmmmm ",this.state.form));
						this.setState({btnStatus:"edit"})
						dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO'})
					},
				);
            }
        }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    checkValidation = (name, value) => {
		const formData = {
			...this.state.form
		}
		const error = Validator.ValidateData(name, value, formData);

		//set data validation
		formData[name].isError = error ? true : false;
		formData[name].errorMessage = error;
		this.setState({
			formData
		});

		return error ? false : true;
	}

	setErrorMessage = (name, errorMessage) => {
		const formData = {
			...this.state.form
		}

		//set data validation
		formData[name].isError = false;
		formData[name].errorMessage = errorMessage;
		this.setState({
			formData
		});

		return false;
	}

	handleFileChosen =(e)=> {
        let form = Object.assign({}, this.state.form);
        let files = e;
        let reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
          form['headerPicture'].value=reader.result
          this.setState({...this.state,
            form:form
          },() => { console.log("headerPicture",this.state.form) })
        };
        

	  }

    submit = () => {
		const { form }=this.state;
        const { name, brideName, groomName, phone, email, whenDate,whenTime,loc1,ourStory1,ourStory2,templateId,headerPicture } = form;
		//const {validation,value,label}=urlName
		const values = queryString.parse(this.props.location.search)

		 let reValidate = Object.entries(this.state.form).map(([p,q]) => {
             return this.checkValidation(p, q.value)
             
		 })
		 if(reValidate.indexOf('false')=== -1){
			 alert("dasdsadsad")
			let formSubmit={
				"templateId":templateId.value,
				"phone":phone.value,
				"email":email.value,
				"name": name.value,
				"brideName":brideName.value,
				"groomName": groomName.value,
				"ourStory1": ourStory1.value,
				"ourStory2": ourStory2.value,
				"whenTime": whenTime.value,
				"whenDate": whenDate.value,
                "loc1": loc1.value,
				"headerPicture":headerPicture.value,
				"accountId": UserService.getCurrentAccId,
            }
			
			this.setState({loader:true})
			if(this.state.btnStatus==="save"){
				BrideGroomService.submit(formSubmit).then( 
						(response) => { 
							//return <Redirect to={"/confirm/" + response.data.brideGroomCd} /> //nanti ganti with /confirm/kodecd
							this.props.history.push("/confirm/" + response.data.brideGroomCd)
							this.setState({loader:false})
						},
					);
			}else{
				formSubmit={...formSubmit,"brideGroomCd":values.done}
				axios.put('/api/bridegroom/update',formSubmit).then( 
					(response) => { 
						//return <Redirect to={"/confirm/" + response.data.brideGroomCd} /> //nanti ganti with /confirm/kodecd
						//console.log("put",response)
						this.props.history.push("/confirm/" + response.data.brideGroomCd)
					},
				);
			}
		 }else{
			 alert("masih ada error")
		 }

        
    }
      // Handle fields change
    handleChange = input => e => {
        let statusCopy = Object.assign({}, this.state.form);
        statusCopy[input].value = e.target.value;
        this.setState({ ...this.state,form: statusCopy});
    };

	handleChangeTemplate = (input) =>{
        let statusCopy = Object.assign({}, this.state.form);
        statusCopy['templateId'].value = input;
        this.setState({ ...this.state,form: statusCopy});
    };
	
    render() {
		const {btnStatus}=this.state;
        const { name, brideName, groomName, phone, email, whenDate,whenTime,loc1,ourStory2,ourStory1,templateId,headerPicture } = this.state.form;
        const values = { name, brideName, groomName, phone, email, whenDate,whenTime,loc1,ourStory2,ourStory1,templateId,headerPicture };

            switch(this.props.step) {
                case "TEMPLATE_LIST":
                    return <TemplateList 
                    nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChangeTemplate={this.handleChangeTemplate}
                 />
                 
                case "BASIC_INFO":
                    return <BasicInfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
					values={values}
					btnStatus={btnStatus}
					checkValidation={this.checkValidation}
					setErrorMessage={this.setErrorMessage}
                 />

                case "MESSAGE_INFO_NEXT":
					return <MessageInfo 
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
					values={values}
					checkValidation={this.checkValidation}
                 />

                 case "BASIC_INFO_NEXT":
                    return <NextInfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
					submit={this.submit}
					handleFileChosen={this.handleFileChosen}
					loader={this.state.loader}
                />
                }
        
    }
}

index.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
        bridegroom: state.bridegroomdetail.data,   
    }
}
export default connect(mapStateToProps)(index);