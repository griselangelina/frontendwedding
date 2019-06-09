import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot u-bg-primary bg-grad">
              <div class="container">

              <div class="row">

              <div class="col s12 m4 ">
                <h1 class="header">Undangan Digital</h1>
                <div class="row ">
                  <h5 class="header-2 col s12 light white-color">Buat Momen Pernikahan Anda Berkesan dengan Custumize Undangan </h5>
                </div>
                <div class="row " style={{marginLeft:`0.25px`}}>
                  <Link to="/create" id="download-button" class="btn-large waves-effect waves-light u-bg-secondary">Pesan Lansung</Link>
                </div>
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