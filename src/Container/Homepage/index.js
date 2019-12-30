import React, { Component } from 'react';
import axios from 'axios';

import { Navigation,Footer,Banner } from '../../Components/Molecules';
import FeatureList from '../../Components/Molecules/Home/FeatureList';
import ListingProduct from '../../Components/Molecules/Home/ListingProduct';
import StepInfo from '../../Components/Molecules/Home/StepInfo';
import Modal from '../../Components/Molecules/Modal';
import Login from '../../Components/Page/Login';
import UserService from '../../Service/UserService';
import Edit from '../../Components/Page/EditBrideGroom';
import EditBrideGroom from '../../Components/Page/EditBrideGroom';

class index extends Component {
  state = {
    template: [],
    drawerOpen : 'translateX(-100%)',
    showModalLogin: false,
    showModalEdit: false,
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

  handleCreate(){
    
    if(UserService.currentUserValue){
     window.location.href='/create';
    }else{
      this.setState({showModalLogin:true});
    }
  }

  handleEdit(){
    const {showModalEdit}=this.state;
    
    this.setState({showModalEdit:!showModalEdit});
  }
  
    render() {
      console.log("state",this.state);
        const { showModalLogin,showModalEdit } = this.state;
        return (
            <div>
              <Navigation drawerOpen={this.state.drawerOpen}
                openDrawer={this.handlerOpenDrawer.bind(this)}
                closeDrawer={this.handlerCloseDrawer.bind(this)}
                homepage
                editToggle={this.handleEdit.bind(this)}
                user={UserService.currentUserValue}
              />
              <div onClick={this.handlerCloseDrawer.bind(this)}>
                <Banner />

                <StepInfo bg="bg-white" title="Buat Gratis Wedding Website-Mu" text="Dengan UndangKamu.com Anda dapat membuat wedding website digital gratis hanya dengan mengisi data 
                sesuai dengan yang anda ingin infokan dan voilaaa undangan digital mu lansung dapat di akses."
                isBtn="y" isContainer="y" handleCreate={this.handleCreate.bind(this)} />

                <FeatureList />

                <div class="step-info-nocontainer">
                  <span class="step-info-image">
                    <p class="step-info-text">
                      <div class="container">
                        <div class="row" >
                          <div class="col s12 m8 u-margin-top u-p-32 u-tx-d1 ">
                              <p class="quote-section">Get your guest list with our guestbook feature</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </span>
                </div>

                <ListingProduct/>
                
                <Footer />
              </div> 
              {
                showModalLogin &&
                <div className="modal">
                  <Login popup/>
                </div>
              }
              {
                showModalEdit &&
                  <Modal handleCancel={this.handleEdit.bind(this)}>
                    <EditBrideGroom/>
                  </Modal>
              }
            </div>

        );
    }
}

index.propTypes = {

};

export default index;