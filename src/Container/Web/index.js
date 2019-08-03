import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import Title from '../../Components/Atom/Title';
import { webAction } from './_Action/webAction';
import {connect} from 'react-redux';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';

import 'react-notifications/lib/notifications.css';
import Template1 from './Template1';
import Template2 from './Template2';


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
         const {dispatch} =this.props;
           setTimeout(() => {
                this.setState({didMount: true})
            }, 0)
                let bridegroomcd=this.props.match.params.name
                dispatch(webAction.getData(bridegroomcd)) 
                
		
    }
    sendMessage =()=>{
        const formSubmit ={
            "from": this.state.form.from.value,
            "email": this.state.form.email.value,
            "message":"yes attend",
            "brideGroomCd":this.state.data.brideGroomCd
        }
        axios.post('/api/send',formSubmit).then( 
            (response) => {
                //dispatch(confirmAction.saveData(response.data)) 
               // this.props.history.push("/undangkamu/" + this.state.data.name)
               NotificationManager.success('Success message', 'Konfirmasi Anda Sukses');
            },
        );
        
        
    }
    render() {
        const {didMount,data}=this.state;

        console.log("bridegrooms",this.props.bridegroom.templateId)
        
        if(this.props.bridegroom.templateId !== undefined){
            switch(this.props.bridegroom.templateId){
                case 17:
                    return <Template1 
                    data={this.props.bridegroom}
                    didMount={didMount}
                    sendMessage={this.sendMessage}
                    handleChange={this.handleChange}
                    />
                case 18:
                    return <Template2 
                    data={this.props.bridegroom}
                    didMount={didMount}
                    sendMessage={this.sendMessage}
                    handleChange={this.handleChange}
                    />
            }
            
        }else{
            return "haha"
        }
               
        
    }
}

index.propTypes = {

};

const mapStateToProps = state => {
    return {
        bridegroom: state.bridegroomdetail2.data 
    }
}
export default connect(mapStateToProps)(index);