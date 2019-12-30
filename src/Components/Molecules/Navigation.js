import React, { Component, Fragment } from 'react';
import { ScrollTo } from "react-scroll-to";
import {Link} from 'react-router-dom';
import UserService from '../../Service/UserService';
import {isMobile} from 'react-device-detect';


class Navigation extends Component {

    state ={
        drawerOpen : 'translateX(-100%)'
    }

    componentDidMount() {
    }

    openEditModal(){
        const {editToggle}=this.props;

        editToggle();
    }

    handleLogout(){
        UserService.logOut(UserService.currentUserValue) .then(res => {
            window.location.href='/';
          })
        
    }

    render() {
      const {homepage,user} = this.props;

        return (
            <nav class="white" role="navigation">
                <div class="nav-wrapper container">
                <a id="logo-container" href="/" class="brand-logo">Logo</a>
    
    {
        homepage &&
    
                <ul class="right hide-on-med-and-down">
    <ScrollTo>
        {({ scrollTo }) => (
          <li><a onClick={() => scrollTo({ x: 0, y: 1000 })}>Fitur</a></li>
        )}
    </ScrollTo>

      <ScrollTo>
        {({ scrollTo }) => (
          <li><a onClick={() => scrollTo({ x: 0, y: 2150 })}>Desain</a></li>
        )}
    </ScrollTo>
    <ScrollTo>
            {({ scrollTo }) => (

            <li><a onClick={() => scrollTo({ x: 0, y: 2800 })}>Paket Harga</a></li>
            )}
    </ScrollTo>

    <ScrollTo>
            {({ scrollTo }) => (

            <li><a onClick={() => scrollTo({ x: 0, y: 3500 })}>Contact</a></li>
            )}
    </ScrollTo> 
    {
        user ?
        <Fragment>
            <li><a onClick={this.handleLogout.bind(this)}>Logout</a></li> 
            <li><Link to="/changepassword">Change Password</Link></li>  
            <li><a onClick={this.openEditModal.bind(this)}>Edit</a></li>  
        </Fragment>
        :
        <Fragment>
            <li><Link to="/login">Login</Link></li> 
        </Fragment>  
    }           
                </ul>
    }
                 <ul id="nav-mobile" class="sidenav" style={{transform: this.props.drawerOpen}} >
                 <ScrollTo>
        {({ scrollTo }) => (
          <li><a onClick={() => scrollTo({ x: 0, y: 1000 })}>Fitur</a></li>
        )}
    </ScrollTo>

      <ScrollTo>
        {({ scrollTo }) => (
          <li><a onClick={() => scrollTo({ x: 0, y: 2150 })}>Desain</a></li>
        )}
    </ScrollTo>
    <ScrollTo>
            {({ scrollTo }) => (

            <li><a onClick={() => scrollTo({ x: 0, y: 2800 })}>Paket Harga</a></li>
            )}
    </ScrollTo>

    <ScrollTo>
            {({ scrollTo }) => (

            <li><a onClick={() => scrollTo({ x: 0, y: 3500 })}>Contact</a></li>
            )}
    </ScrollTo> 
    {
        user ?
        <Fragment>
            <li><a onClick={this.handleLogout.bind(this)}>Logout</a></li> 
            <li><Link to="/changepassword">Change Password</Link></li>  
            <li><a onClick={this.openEditModal.bind(this)}>Edit</a></li>  
        </Fragment>
        :
        <Fragment>
            <li><Link to="/login">Login</Link></li> 
        </Fragment>  
    }       
                </ul>
                {isMobile && <a href="#" onClick={this.props.openDrawer} data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>}

                
                </div>
            </nav>
        );
    }
}



Navigation.propTypes = {

};


export default Navigation;