import React, { Component } from 'react';
import UserService from '../../Service/UserService';
import { Navigation,Footer } from '../../Components/Molecules';
import Modal from '../../Components/Molecules/Modal';
import {isMobile} from 'react-device-detect';

class index extends Component {

  constructor(props) {
      super(props);

      // redirect to home if already logged in
      if (UserService.currentUserValue) {
          this.props.history.push('/');
      }

      this.state = {
          user: {},
          submitted: false,
          loading: false,
          errorMessage: '',
          showRegistPopup: false
      };
  }

  handleChange(e){
      var { name, value } = e.target;
      var user = this.state.user;
      user[name] = value;
      this.setState({ user: user });
  }

  
  handleRegist(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;

      console.log("regist ",user)
      // stop here if form is invalid
      if (!(user.username && user.password && user.name)) {
          return;
      }

      this.setState({ loading: true });
      UserService.register(user)
          .then(
              data => {
                  this.setState({showRegistPopup: true});
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
      const { user, submitted, loading, errorMessage, showRegistPopup } = this.state;
      return (
        <div>
        <Navigation />
        <div className="login-body">
        <div className="back-section"><a><i class="small material-icons arrow-btn" onClick={this.back}>arrow_back</i></a></div>

        <div className={isMobile ? 'card': 'card card-desktop'}>
            {errorMessage &&
              <div className="alert alert-danger" role="alert">
                <strong>Error! </strong> {errorMessage}
              </div>
            }
            <div class="title">Register</div>
            <form name="form" onSubmit={(e) => this.handleRegist(e)}>
                <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                    <label htmlFor="username">Full Name</label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.username &&
                        <div className="help-block">Full Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Email</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block  btn-signin form-submit-button" disabled={loading}>Register</button>
                </div>
                
                <div className="form-group">
                   <p className="register-section">Sudah punya akun? <a href='/login'>LOGIN disini</a></p>
                </div>
            </form>
            </div>
            </div>
            <Footer />
            {
                showRegistPopup &&
                <Modal>
                    <p>Register Sukses. Lanjutkan Login ?</p>
                    <div>
                        <a href="/login" class="button">OK</a>
                        <a href="/" class="button">NO</a>
                    </div>
                </Modal>
            }
        </div>
      )
  }
}

export default index;
