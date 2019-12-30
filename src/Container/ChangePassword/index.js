import React, { Component } from 'react';
import UserService from '../../Service/UserService';
import { Navigation,Footer } from '../../Components/Molecules';
import {isMobile} from 'react-device-detect';

class index extends Component {

  constructor(props) {
      super(props);
      window.scrollTo(0, 0);

      // redirect to home if already logged in
      if (!UserService.currentUserValue) {
          this.props.history.push('/');
      }

      this.state = {
          user: {},
          submitted: false,
          loading: false,
          errorMessage: ''
      };
  }

  handleChange(e){
      var { name, value } = e.target;
      var user = this.state.user;
      user[name] = value;
      this.setState({ user: user });
  }

  
  handleChangePass(e) {
      e.preventDefault();

     // this.setState({ submitted: true });
      const { user } = this.state;

      
      // stop here if form is invalid
      if (!(user.password && user.newPassword && user.newpasswordconfirm)) {
          return;
      }

      this.setState({ loading: true });
      console.log("user change pass",user)
      UserService.changePassword(user)
          .then(
              data => {
                  window.location.href='/'; 
              },
              error => {
                console.log(error);
                this.setState({ errorMessage: "change password failed", loading: false });
              }
          );
  }

back = (e) => {
    e.preventDefault()
    this.props.history.goBack();
}

  render() {
      const { user, submitted, loading, errorMessage } = this.state;
      return (
        <div>
        <Navigation />
        <div className="login-body">
        <p><i class="small material-icons arrow-btn" onClick={this.back}>arrow_back</i></p>

        <div className={isMobile ? 'card': 'card card-desktop'}>
            {errorMessage &&
              <div className="alert alert-danger" role="alert">
                <strong>Error! </strong> {errorMessage}
              </div>
            }
            <div class="title">Change Password</div>
            <form name="form" onSubmit={(e) => this.handleLogin(e)}>

                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Old Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" className="form-control" name="newPassword" value={user.newpassword} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="newpasswordconfirm">Confirm New Password</label>
                    <input type="password" className="form-control" name="newpasswordconfirm" value={user.newpasswordconfirm} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block  btn-signin form-submit-button" disabled={loading} onClick={this.handleChangePass.bind(this)}>Ubah Password</button>
                </div>

            </form>
            </div>
            </div>
            <Footer />
        </div>
      )
  }
}

export default index;
