import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import header from '../../asset/img/header.png';

class Banner extends Component {


    render() {
        return (
            <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot u-bg-primary bg-grad">
              <div class="container u-pt-32 u-pb-32">

              <div class="row">

              <div class="col s12 m5">
                <div>
                  <h1 class="header">DatenginAja</h1>
                  <div class="row ">
                    <h5 class="header-2 col s12 light white-color">Buat Momen Pernikahan Anda Berkesan dengan Custumize Undangan </h5>
                  </div>
                  <div class="row" style={{marginLeft:`0.25px`}}>
                    <a href="https://api.whatsapp.com/send?phone=087887081010&text=Halo%20Admin%20Saya%20Mau%20Tanya%20Undangan%20Digital" id="download-button" class="btn-large waves-effect waves-light u-bg-secondary">Tanya Lansung</a> 
                  </div>
                </div>
              </div>
              <div class="col s12 m7" style={{left:`50%`}}>
                <img src={header} width="100%" />
              </div>
              </div>
              </div>
            </div>
          </div>
        );
    }
}



Banner.propTypes = {

};


export default Banner;