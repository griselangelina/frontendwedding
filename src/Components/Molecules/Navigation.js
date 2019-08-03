import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";

class Navigation extends Component {

    state ={
        drawerOpen : 'translateX(-100%)'
    }

    componentDidMount() {
    }

    render() {
      

        return (
            <nav class="white" role="navigation">
                <div class="nav-wrapper container">
                <a id="logo-container" href="#" class="brand-logo">Logo</a>
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
                </ul>
                {/* <ul id="nav-mobile" class="sidenav" style={{transform: this.props.drawerOpen}}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fitur</a></li>
                    <li><a href="#">Desain</a></li>
                    <li><a href="#">Paket Harga</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" onClick={this.props.openDrawer} data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
                </div>
            </nav>
        );
    }
}



Navigation.propTypes = {

};


export default Navigation;