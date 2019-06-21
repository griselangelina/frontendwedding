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
					label: 'name'
				},
                brideName: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'brideName'
				},
                groomName: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'groomName'
				},
                email: {
					value: '',
					validation: {
						required: true,
						isEmail: true
					},
					isError: false,
					errorMessage: '',
					label: 'email'
				},
                phone: {
					value: '',
					validation: {
						required: true,
						isNumber:true,
					},
					isError: false,
					errorMessage: '',
					label: 'phone'
				},
                weddingDate: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'weddingDate'
				},
                weddingTime: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'weddingTime'
				},
                loc1: {
					value: '',
					validation: {
						required: true,
					},
					isError: false,
					errorMessage: '',
					label: 'loc1'
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
				files:{
					value: '',
					validation: {
					},
					isError: false,
					errorMessage: '',
					label: 'files'
				}
			},
		btnStatus:"save"
        }
    
        componentDidMount(){
            const values = queryString.parse(this.props.location.search)
            console.log("values",values.done)
            let form = Object.assign({}, this.state.form);
            if(values.done ){
                let statusCopy = Object.entries(this.props.bridegroom);
                for(const [x,t]  of statusCopy){
				  // form[x].value=t
				  if(form[x]){
					form[x].value=t
				  }
                }
                this.setState({ ...this.state,form: form}, console.log("formmmmmmmm ",this.state.form));
				this.setState({btnStatus:"edit"})
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

	handleFileChosen =(e)=> {
        let form = Object.assign({}, this.state.form);
        let files = e;
        let reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
          form['files'].value=reader.result
          this.setState({...this.state,
            form:form
          },() => { console.log("file",this.state.form) })
        };
        

	  }

    submit = () => {
        const { name, brideName, groomName, phone, email, weddingDate,weddingTime,loc1,ourStory1,ourStory2,templateId,files } = this.state.form;
		//const {validation,value,label}=urlName
		const values = queryString.parse(this.props.location.search)

		 let reValidate = Object.entries(this.state.form).map(([p,q]) => {
             return this.checkValidation(p, q.value)
             
		 })
		 if(reValidate.indexOf('false')== -1){
			let formSubmit={
				"templateId": 17,
				"phone":phone.value,
				"email":email.value,
				"name": name.value,
				"brideName":brideName.value,
				"groomName": groomName.value,
				"ourStory1": ourStory1.value,
				"ourStory2": ourStory2.value,
				"whenTime": weddingTime.value,
				"whenDate": weddingDate.value,
                "loc1": loc1.value,
                "headerPicture":files.value
            }
			
			if(this.state.btnStatus==="save"){
				axios.post('http://172.31.23.179:8080/api/bridegroom/save',formSubmit).then( 
						(response) => { 
							//return <Redirect to={"/confirm/" + response.data.brideGroomCd} /> //nanti ganti with /confirm/kodecd
							this.props.history.push("/confirm/" + response.data.brideGroomCd)
						},
					);
			}else{
				formSubmit={...formSubmit,"brideGroomCd":values.done}
				axios.put('http://172.31.23.179:8080/api/bridegroom/update',formSubmit).then( 
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

    render() {
        const { name, brideName, groomName, phone, email, weddingDate,weddingTime,loc1,ourStory2,ourStory1,templateId } = this.state.form;
        const values = { name, brideName, groomName, phone, email, weddingDate,weddingTime,loc1,ourStory2,ourStory1,templateId };

            switch(this.props.step) {
                case "TEMPLATE_LIST":
                    return <TemplateList 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                 />
                 
                case "BASIC_INFO":
                    return <BasicInfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                 />

                case "MESSAGE_INFO_NEXT":
                return <MessageInfo 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                 />

                 case "BASIC_INFO_NEXT":
                    return <NextInfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
					submit={this.submit}
					handleFileChosen={this.handleFileChosen}
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