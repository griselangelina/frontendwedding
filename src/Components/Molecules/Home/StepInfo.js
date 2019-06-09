import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class StepInfo extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div class={this.props.bg}>
 <div class="container">
                <div class="section">

                    <div class="row u-margin-bottom u-padding-bottom ">
                        <div class="col s12 m5">
                            <div class="u-ml-28">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                            </div>
                        </div>
                        <div class="col s12 m6 ">
                            <div class="u-mr-28 ">
                            <h5 class="  u-fw-bold">{this.props.title}</h5>

                            <p class="light">{this.props.text}</p>
                            </div>
                            {
                            this.props.isBtn=== "y"?
                            <div class="row left " style={{marginLeft:`0.25px`}}>
                                <Link to="/create" id="download-button" class="btn-large waves-effect waves-light u-bg-secondary">Buat Gratis Disini</Link> 
                            </div> : ""
                            }
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
        );
    }
}



StepInfo.propTypes = {

};


export default StepInfo;