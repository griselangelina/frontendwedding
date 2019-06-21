import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import Title from '../../Components/Atom/Title';
import { confirmAction } from '../Confirmation/_Action/confirmAction';
import {connect} from 'react-redux';
import axios from 'axios';
import Countdown from '../../Components/Molecules/Coundown';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class index extends Component {
    constructor(){
        super()
        this.state={
           data:{},
           form:{
                from: {
                    value: '',
                    validation: {
                        required: true
                    },
                    isError: false,
                    errorMessage: '',
                    label: 'from'
                },
                email: {
                    value: '',
                    validation: {
                        required: true,
                    },
                    isError: false,
                    errorMessage: '',
                    label: 'email'
                },
            },
            didMount:false
        }
    }
    handleChange = input => e => {
        let statusCopy = Object.assign({}, this.state.form);
        statusCopy[input].value = e.target.value;
        this.setState({ ...this.state,form: statusCopy});
    };
    componentDidMount(){
        //axios get data from 

           setTimeout(() => {
                this.setState({didMount: true})
            }, 0)
        
		const { dispatch } = this.props;
        let bridegroomcd=this.props.match.params.name
		console.log("param",this.props.match.params.bridegroomcd)
		axios.get(`http://172.31.23.179:8080/api/bridegroom/${bridegroomcd}`).then( 
            (response) => {
                //dispatch(confirmAction.saveData(response.data)) 
                this.setState({data:response.data})
            },
		);
    }
    sendMessage =()=>{
        const formSubmit ={
            "from": this.state.form.from.value,
            "email": this.state.form.email.value,
            "message":"yes attend",
            "brideGroomCd":this.state.data.brideGroomCd
        }
        axios.post('http://172.31.23.179:8080/api/send',formSubmit).then( 
            (response) => {
                //dispatch(confirmAction.saveData(response.data)) 
               // this.props.history.push("/undangkamu/" + this.state.data.name)
               NotificationManager.success('Success message', 'Konfirmasi Anda Sukses');
            },
        );
        
        
    }
    render() {
        

        const isHeader=
        
            /*this.state.data.headerPic === ""?                             
                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h"/>
            :   <img src={this.state.data.headerPic}  />
        */
       <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h"/>

        //const isStory=this.state.data.ourStory2 === ""? "" : this.state.data.ourStory2
        const isStory="test loveee ar "
        return (
            
            <div>
                <NotificationContainer/>
                <div class={`u-bg-img-bg${this.state.data.templateId}`}></div>
               <div class="container">
                <div class="row" >
                        <div class="col s12 m12 u-ps-relative ">
                            <p class={`title-header-bg${this.state.data.templateId}`}>{this.state.data.groomName} & {this.state.data.groomName}</p>
                            <p class={`theme-header-bg${this.state.data.templateId}`}><span>28.12.2017</span></p>
                        </div>
                    </div>
               
               </div>
               <div class="row u-mb-0">
                    <div class="col s12 m12 center u-ps-relative u-bg-white ">
                        <div class={`theme-body ${this.state.didMount && 'visible'}`}>
                            { isHeader}
                            <p>{isStory}</p>
                            <i class="far fa-heart">lovee</i>


                            <p class="theme-couple-bg17">{this.state.data.groomName} & {this.state.data.groomName}</p>    
                            <p class={`section-heading-bg${this.state.data.templateId}`}>Are Getting Married </p>
                            <p class='u-fw-bold'>{this.state.data.whenDate} </p>
                        </div>
                    </div>
                </div> 


                <div class="row u-mb-0">
                    <div class="col s12 m12 center u-ps-relative u-bg-primary-30 ">
                    <div class={`theme-body ${this.state.didMount && 'visible'}`}>
                        <Countdown date={'7/8/2019'} />
                    </div>


                       {/* <p class={`theme-header-bg${this.state.data.templateId}`} > 7 Days Ahead</p>
                       <p class={`theme-header-bg${this.state.data.templateId}`} > I love you like that much forever</p> */}

                    </div>
                </div> 


                <div class="container">
                    <div class="row" >
                            <div class="col s12 m12 u-ps-relative ">
                                <p class={`title-header-bg${this.state.data.templateId}`}>Are You Attending</p>
                                <p class={`theme-header-bg${this.state.data.templateId}`} >Please fill up this form</p>
                                <div class="col s12 m12 bg-color">
                                    <div class="input-field col s12 m4">
                                        <input type="name" class="form-control u-wd-full u-p-8" id="from" placeholder="From" onChange={this.handleChange('from')}/>
                                    </div>
                                    <div class="input-field col s12 m4">
                                        <input type="name" class="form-control u-wd-full u-p-8" id="email" placeholder="Email" onChange={this.handleChange('email')}/>
                                    </div>
                                    <div class="input-field col s12 m4">
                                        <button type="submit" class="btn btn-primary-30 u-wd-full btn-block" onClick={this.sendMessage}> I am Attending</button>
                                    </div>
                                </div>
                            </div>
                    </div>
               </div> 
               <div class="row u-mb-0" >
                            <div class="col s12 m12 center u-ps-relative u-bg-white">
                                <p class={`theme-header-bg${this.state.data.templateId}`} >Made with  by Freehtml5.co / Demo Images: Unsplash</p>
                            </div>
                    </div> 
              
            </div>

        );
    }
}

index.propTypes = {

};

const mapStateToProps = state => {
    return {
        bridegroom: state.bridegroomdetail.data,   
    }
}
export default connect(mapStateToProps)(index);