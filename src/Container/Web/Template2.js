import React, { Component } from 'react';
import Countdown from '../../Components/Molecules/Coundown';
import {NotificationContainer} from 'react-notifications';

import axios from 'axios';

class Template2 extends Component {

    render() {
        const { data, didMount} = this.props;
        return (
            <div>
                <NotificationContainer/>
                <div class={`u-bg-img-bg${data.templateId}`} style={{backgroundImage:"url(https://res.cloudinary.com/sdr-i-grissella/image/upload/v1564668567/couple2.jpg)",opacity: 0.3}}></div>
                <div class="">
                    <div class="row">
                        <div class="col s12 m12 u-ps-relative">
                            <p class={`title-header-bg${data.templateId}`}>{data.groomName} & {data.groomName}</p>
                             <p class={`theme-header-bg${data.templateId}`}><span>Are Getting married</span></p> 
                        </div>
                    </div>
               
               
                    <div class="row">
                        <div class="col s12 m12 center u-ps-relative ">
                            <div class={`${didMount && 'visible'}`}>
                            {/* <div class="file-web">
                                <div class="file-image">
                                    <img class="image" src={data.headerPicture}/>
                                </div>
                            </div> */}
                                <div class="quote-section">
                                    <p>{"You are the bset thing that I ever had now and forever"}</p>
                                    <i class="far fa-heart">To have and to hold</i>
                                </div>
                                <div class={`detail-section-bg${data.templateId}`}>
                                    <div class="detail-bg">
                                        <p class={`detail-word`}>You are accordially invited<br/> to our journey</p>    
                                        {/* <p class={`section-heading-bg${data.templateId}`}>Are Getting Married </p> */}
                                        <p class='u-fw-bold'>{data.whenDate} </p>
                                        <p class='u-fw-bold'>{data.whenDate} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
               
               <div class="u-ps-relative bg-grad-blue-180 u-pb-32">
                    <div class="container">
                        <div class="row">
                            <div class="col s12 m12 ">
                                <p class={`title-header-bg${data.templateId}`}>Are You Attending</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 ">
                                <p class={`theme-header-bg${data.templateId}`} >Please fill up this form</p>
                            </div>
                        </div>
                        <div class="row ">   
                            <div class="col s12 m12 bg-color">
                                <div class="input-field col s12 m4">
                                     <input type="name" class="form-control u-wd-full u-p-8" id="from" placeholder="From" onChange={() => this.props.handleChange('from')}/>
                                </div>
                                 <div class="input-field col s12 m4">
                                     <input type="name" class="form-control u-wd-full u-p-8" id="email" placeholder="Email" onChange={() => this.props.handleChange('email')}/>
                                </div>
                                <div class="input-field col s12 m4">
                                    <button type="submit" class="btn bg-grey-30 u-wd-full btn-block" onClick={() => this.props.sendMessage()}> I am Attending</button>
                                </div>
                            </div>
                       {/* <p class={`theme-header-bg${this.state.data.templateId}`} > 7 Days Ahead</p>
                       <p class={`theme-header-bg${this.state.data.templateId}`} > I love you like that much forever</p> */}

                        </div>
                    </div> 
                </div>

                <div class="container">
                    <div class="row" >
                        <div class="col s12 m12 u-ps-relative ">
                            <div class={`theme-body ${didMount && 'visible'}`}>
                                <div class={`countdown-section-bg${data.templateId}`}>
                                    <p class={`couple-name`} >Joni & Lila</p>
                                    <p class={`wording-quotes`} >Be part of our Journey</p>
                                </div>
                                <Countdown date={'7/8/2019'} template={'18'} />
                            </div>      
                        </div>
                    </div>
               </div>
               <div class="container">
                    <div class="row u-mb-0" >
                            {/* <div class="col s12 m12 center u-ps-relative u-bg-white">
                                <p class={`theme-header-bg${data.templateId}`} >Made with  by Freehtml5.co / Demo Images: Unsplash</p>
                            </div> */}
                    </div> 
               </div> 
               
           </div>
        );
    }
}




export default Template2;