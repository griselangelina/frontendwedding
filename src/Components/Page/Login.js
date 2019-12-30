
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../Service/UserService';
import { timingSafeEqual } from 'crypto';
import {isMobile} from 'react-device-detect';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            submitted: false,
            loading: false,
            errorMessage: ''
        };
    }

    componentDidMount(){

    }
  
    handleChange(e){
        var { name, value } = e.target;
        var user = this.state.user;
        user[name] = value;
        this.setState({ user: user });
    }
  
    
    handleLogin(e) {
        e.preventDefault();
  
        this.setState({ submitted: true });
        const { user } = this.state;
        const { popup }= this.props;

        console.log("user",user)
        // stop here if form is invalid
        if (!(user.username && user.password)) {
            return;
        }
  
        this.setState({ loading: true });
        UserService.login(user)
            .then(
                response => {
                    console.log("dataaaaaa",response)
                    if(popup){
                        window.location.href="/create";
                    }else{
                        console.log("dataaa",response)
                        window.location.href="/";
                    }

                },
                error => {
                  console.log(error);
                  this.setState({ errorMessage: "Username or password is not valid.", loading: false });
                }
            );
    }

    render() {
    const { errorMessage, submitted, user,loading}= this.state;
    const {back} = this.props;

        return (
    <div className="login-body">
        <p><i class="small material-icons arrow-btn" onClick={back}>arrow_back</i></p>

        <div className={isMobile ? 'card': 'card card-desktop'}>
            {errorMessage &&
            <div className="alert alert-danger" role="alert">
                <strong>Error! </strong> {errorMessage}
            </div>
            }
            <div class="title">Log In</div>
            <form name="form" onSubmit={(e) => this.handleLogin(e)}>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Email</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => this.handleChange(e)} />
                    {submitted && !user.username &&
                        <div className="help-block">Email is required</div>
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
                    <div className="forgot-password">
                        <p><Link to='/forgotpassword'>Lupa kata sandi ?</Link></p>
                </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block  btn-signin form-submit-button" disabled={loading}>Login</button>
                </div>
                
                <div className="form-group">
                <p className="register-section">Belum punya akun? <a href='/register'>REGISTER disini</a></p>
                </div>
            </form>
            </div>
        </div>
        );
    }
}




export default Login;