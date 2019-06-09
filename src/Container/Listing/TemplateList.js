import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import axios from 'axios';

class TemplateList extends Component {
    state = {
        template:[]
    }
    saveAndContinue = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO'})
    }

    componentDidMount(){
        axios.get(`/api/get-template`)
        .then(res => {
          console.log("res",res.data)
          this.setState({template:res.data})
        })
      }

    render() {
        return (
            <div>
                <Navigation />
               
                <div class="section" >
                <div class="container">
                <p>
                    <h4>Find Your Design</h4>
                Select one of our 100+ new designs to start your wedding website. Try it out – you can change it at any time.


                </p>
                </div>
                </div>
               

                <div class="section bg-color">
                <div class="container">
               

                  
                  <div class="row" >

                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                        <a onClick={this.saveAndContinue} href="#">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </a>
                        </div>
                    </div>
                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                    </div>
                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                    </div>



                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                    </div>
                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                    </div>
                    <div class="col s12 m4 u-margin-top">
                        <div class="icon-block">
                            <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                        </div>
                    </div>
                  </div>

                </div>
              </div>


                <Footer />
            </div>

        );
    }
}

TemplateList.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(TemplateList);