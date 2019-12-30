import React, { Component } from 'react';
import UserService from '../../Service/UserService';
import { Navigation,Footer } from '../../Components/Molecules';
import {isMobile} from 'react-device-detect';
import Modal from '../../Components/Molecules/Modal';

class index extends Component {

  constructor(props) {
      super(props);
      window.scrollTo(0, 0);

      // redirect to home if already logged in
      if (UserService.currentUserValue) {
          this.props.history.push('/');
      }

      this.state = {
          user: {},
          submitted: false,
          loading: false,
          errorMessage: '',
          showModalPopupp: false
      };
  }

  handleChange(e){
      var { name, value } = e.target;
      var user = this.state.user;
      user[name] = value;
      this.setState({ user: user });
  }

  redirectLogin(){
      window.location.href='/login'
  }
  
  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;

      console.log("user",user)
      // stop here if form is invalid
      if (!(user.username)) {
          return;
      }

      this.setState({ loading: true });
      UserService.forgotPassword(user.username)
          .then(
              data => {
                this.setState({ showModalPopupp: true });
                  
              },
              error => {
                console.log(error);
                this.setState({ errorMessage: "Username or password is not valid.", loading: false });
              }
          );
  }

back = (e) => {
    e.preventDefault()
    this.props.history.goBack();
}

  render() {
      const { user, submitted, loading, errorMessage, showModalPopupp } = this.state;
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
            <div class="title">Forgot Password</div>
            <form name="form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Email</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
               
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block  btn-signin form-submit-button" disabled={loading}>Send</button>
                </div>
            </form>
            </div>
            </div>
            {
                showModalPopupp &&
                <Modal>
                    <p>Password baru telah dikirim ke email mu. silahkan cek </p>
                    <div>
                        <button onClick={this.redirectLogin.bind(this)}>OK</button>
                    </div>
                </Modal>
            }
            <Footer />
        </div>
      )
  }
}

export default index;
