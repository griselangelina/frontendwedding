import React, { Component } from 'react';
import UserService from '../../Service/UserService';
import { Navigation,Footer } from '../../Components/Molecules';
import Login from '../../Components/Page/Login';

class index extends Component {

  constructor(props) {
      super(props);

      window.scrollTo(0, 0);

      // redirect to home if already logged in
      if (UserService.currentUserValue) {
          this.props.history.push('/');
      }
  }

  handleBack = (e) => {
    e.preventDefault()
    this.props.history.goBack();
}

  render() {
      return (
        <div>
        <Navigation />
            <Login back={this.handleBack.bind(this)} />

            <Footer />
        </div>
      )
  }
}

export default index;
