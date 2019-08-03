import React, { Component } from 'react';
import Countdown from '../../Components/Molecules/Coundown';
import {NotificationContainer} from 'react-notifications';

import axios from 'axios';

class Template1 extends Component {

    render() {
        const { data, didMount} = this.props;

        return (
            <div>
                <NotificationContainer/>
                <div class={`u-bg-img-bg${data.templateId}`}></div>
                <div class="container">
                <div class="row" >
                        <div class="col s12 m12 u-ps-relative ">
                            <p class={`title-header-bg${data.templateId}`}>{data.groomName} & {data.groomName}</p>
                            <p class={`theme-header-bg${data.templateId}`}><span>28.12.2017</span></p>
                        </div>
                    </div>
               
               </div>
               <div class="row u-mb-0">
                    <div class="col s12 m12 center u-ps-relative u-bg-white ">
                        <div class={`theme-body ${didMount && 'visible'}`}>
                            <div class="file-web">
                                <div class="file-image">
                                    <img class="image" src={data.headerPicture}/>
                                </div>
                            </div>
                            <p>{"test loveee ar "}</p>
                            <i class="far fa-heart">lovee</i>


                            <p class="theme-couple-bg17">{data.groomName} & {data.brideName}</p>    
                            <p class={`section-heading-bg${data.templateId}`}>Are Getting Married </p>
                            <p class='u-fw-bold'>{data.whenDate} </p>
                        </div>
                    </div>
                </div> 


                <div class="row u-mb-0">
                    <div class="col s12 m12 center u-ps-relative u-bg-primary-30 ">
                    <div class={`theme-body ${didMount && 'visible'}`}>
                        <Countdown date={'7/8/2019'} />
                    </div>


                       {/* <p class={`theme-header-bg${this.state.data.templateId}`} > 7 Days Ahead</p>
                       <p class={`theme-header-bg${this.state.data.templateId}`} > I love you like that much forever</p> */}

                    </div>
                </div> 


                <div class="container">
                    <div class="row" >
                            <div class="col s12 m12 u-ps-relative ">
                                <p class={`title-header-bg${data.templateId}`}>Are You Attending</p>
                                <p class={`theme-header-bg${data.templateId}`} >Please fill up this form</p>
                                <div class="col s12 m12 bg-color">
                                    <div class="input-field col s12 m4">
                                        <input type="name" class="form-control u-wd-full u-p-8" id="from" placeholder="From" onChange={() => this.props.handleChange('from')}/>
                                    </div>
                                    <div class="input-field col s12 m4">
                                        <input type="name" class="form-control u-wd-full u-p-8" id="email" placeholder="Email" onChange={() => this.props.handleChange('email')}/>
                                    </div>
                                    <div class="input-field col s12 m4">
                                        <button type="submit" class="btn btn-primary-30 u-wd-full btn-block" onClick={() => this.props.sendMessage()}> I am Attending</button>
                                    </div>
                                </div>
                            </div>
                    </div>
               </div> 
               <div class="row u-mb-0" >
                            <div class="col s12 m12 center u-ps-relative u-bg-white">
                                <p class={`theme-header-bg${data.templateId}`} >Made with  by Freehtml5.co / Demo Images: Unsplash</p>
                            </div>
                    </div> 
           </div>
        );
    }
}




export default Template1;