import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import picbutton from '../../../asset/img/picbutton.png'
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
                                <img src={picbutton} style={{width:`100%`}} />
                            </div>
                        </div>
                        <div class="col s12 m6 ">
                            <div class="u-mr-28 u-pt-32 ">
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