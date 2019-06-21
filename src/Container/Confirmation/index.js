import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation,Footer,Banner } from '../../Components/Molecules';

import axios from 'axios';
import * as Validator from '../../helper/Validator';
import { confirmAction } from './_Action/confirmAction';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class index extends Component {

	componentDidMount(){
		//axios get data from 
		const { dispatch } = this.props;
        let bridegroomcd=this.props.match.params.bridegroomcd
		console.log("param",this.props.match.params.bridegroomcd)
		axios.get(`http://172.31.23.179:8080/api/bridegroom/${bridegroomcd}`).then( 
            (response) => {
				dispatch(confirmAction.saveData(response.data)) 
            },
		);
	}
    saveAndContinue = (value) => {
        let bridegroomcd=this.props.match.params.bridegroomcd

		this.props.history.push("/create?done="+bridegroomcd);
    }
    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'TEMPLATE_LIST'})
    }

    render() {
        console.log(this.props.bridegroom)
		const{id,name,brideName,email,whenDate,whenTime,loc1,ourStory1,ourStory2} =this.props.bridegroom
        return (
            <div>
            
            <div class="section">
            
                 <div class="container">

                 <p class="u-fw-bold u-bd u-p-8 center">Konfirmasi Detail Website {name} </p>
                    <div class="row ">
                    </div>
                    <div class="row  icon-block" >
                        <div class="col s12 m5 center ">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                        <div class="col s12 m6 bg-color">
							<p class="row u-mb-8">
									<p class="col s5 m5">Url Name</p>
									<p class="col s6 m6 "><a href={`/undangkamu/${name}`}>undangkamu.com/undangkamu/{name}</a></p>
							</p>
                            <p class="row u-mb-8">
									<span class="col s5 m5">Email</span>
									<span class="col s6 m6">{email}</span>
							</p>   
                            <p class="row u-mb-8">
									<span class="col s5 m5">Bride Name</span>
									<span class="col s6 m6">{brideName}</span>
							</p>
                            <p class="row u-mb-8">
									<span class="col s5 m5">Groom Name</span>
									<span class="col s6 m6">{brideName}</span>
							</p>   
                            <p class="row u-mb-8">
									<span class="col s5 m5">When</span>
									<span class="col s6 m6">{whenDate} {whenTime}</span>
							</p>
                            <p class="row u-mb-8">
									<span class="col s5 m5">Where</span>
									<span class="col s6 m6">{loc1}</span>
							</p> 
                            <p class="row u-mb-8">
									<span class="col s5 m5">Quote</span>
									<span class="col s6 m6">{ourStory1}</span>
							</p>       
                            <p class="row u-mb-8">
									<span class="col s5 m5">Story</span>
									<span class="col s6 m6">{ourStory2}</span>
							</p>             

                            <div class=" left u-mt-36 ">
                                <Link to={`/create/${this.props.match.params.bridegroomcd}`}  class="waves-effect main-color btn" >Edit</Link>
                                <Link to={`/`}  class="waves-effect  btn  u-ml-32" >Back to Home</Link>

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

index.propTypes = {

};

const mapStateToProps = state => {
    return {
        bridegroom: state.bridegroomdetail.data,   
    }
}
export default connect(mapStateToProps)(index);