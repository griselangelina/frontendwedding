import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import Title from '../../Components/Atom/Title';
import ListingProduct from '../../Components/Molecules/Home/ListingProduct';
import StepInfo from '../../Components/Molecules/Home/StepInfo';
import axios from 'axios';

class index extends Component {
  state = {
    template: [],
    drawerOpen : 'translateX(-100%)',
  }
  handlerOpenDrawer () {
    this.setState({drawerOpen:'translateX(0%)'})
  }
  handlerCloseDrawer () {
      this.setState({drawerOpen:'translateX(-100%)'})
  }
  componentDidMount(){
    axios.get(`/api/get-template`)
    .then(res => {
      console.log("res",res.data)
    })
  }
    render() {
        return (
            <div>
                
                  <Navigation drawerOpen={this.state.drawerOpen}
                  openDrawer={this.handlerOpenDrawer.bind(this)}
                  closeDrawer={this.handlerCloseDrawer.bind(this)}
                  />
                <div onClick={this.handlerCloseDrawer.bind(this)}>
                  <Banner />
                
                <StepInfo bg="bg-white" title="Buat Gratis Wedding Website-Mu" text="Dengan UndangKamu.com Anda dapat membuat wedding website digital gratis hanya dengan mengisi data 
                sesuai dengan yang anda ingin infokan dan voilaaa undangan digital mu lansung dapat di akses."
                isBtn="y"
                isContainer="y"
                />

                <div class="container">

                <div class="section">
                  <Title>
                        <h2>FITUR</h2>
                        <span>Yang Kami Berikan Spesial Untuk Anda</span>
                    </Title>
                  <div class="row u-margin-bottom u-padding-bottom ">
                    <div class="col s12 m4 ">
                      <div class="icon-block">
                        <h2 class="icon-title u-fw-bold">
                          <div class="icon-div">
                            <i class="material-icons">info</i>
                          </div>
                         
                        </h2>
                        <h5 class="center u-fw-bold">Wedding Info</h5>

                        <p >Dengan wedding website anda dapat mencantumkan informasi detail mengenai acara dari tanggal pelaksanaan hingga tempat pelaksanaan, Anda juga dapat menulis couple story untuk dibagikan ke para tamu udnangan.</p>
                      </div>
                    </div>

                    <div class="col s12 m4 ">
                      <div class="icon-block">
                        <h2 class="icon-title u-fw-bold">
                          <div class="icon-div">
                            <i class="material-icons">insert_invitation</i>
                          </div>
                        </h2>
                        <h5 class="center u-fw-bold">RSVP</h5>

                        <p >Anda dapat mendapatkan informasi mengenai ketersediaan tamu anda untuk hadir beserta wedding wishes dari mereka.</p>
                      </div>
                    </div>

                    <div class="col s12 m4">
                      <div class="icon-block">
                        <h2 class="icon-title u-fw-bold">
                          <div class="icon-div">
                            <i class="material-icons">settings</i>
                          </div>
                        </h2>
                        <h5 class="center u-fw-bold ">Costumize Template</h5>

                        <p >We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="step-info-container">
                <span class="step-info-image">
                  <p class="step-info-text">
                    <div class="container">
                      <div class="row" >
                        <div class="col s12 m8 u-margin-top u-p-32 u-tx-d1">
                            Get your guest list with our guestbook feature
                        </div>
                      </div>
                    </div>
                  </p>
                </span>
              </div>

                  <ListingProduct/>

                


                <Footer />
                </div> 
            </div>

        );
    }
}

index.propTypes = {

};

export default index;