import axios from 'axios';
import {BehaviorSubject} from 'rxjs';

const API_URL = '/api/user/';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

class UserService {

  get currentUserValue() {

    return currentUserSubject.value;
  }

  get getCurrentAccId() {
    //dari BE harus return userId dlu
    return currentUserSubject.value['accountId'];
  }

  get currentUser() {
    return currentUserSubject.asObservable();
  }

  login(user) {
    //btoa: Basic64 encryption
    const body = {
      'username':user.username,
      'password': user.password
    };

    return axios.post(API_URL + 'login', body)
          .then(response => {
              localStorage.setItem('currentUser', JSON.stringify(response.data));
              currentUserSubject.next(response.data);
              return response;
          })
          .catch(error => {
            console.log("error",error)
            return Promise.reject(error);
        });
  }

  
  isUserActive(user) {
    const header = {
      'Content-Type':'application/json',
      'authorization':'Bearer ' + user.token
    };

    const body = {
      token: user.token
    }
    return axios.post(API_URL + "validateUser",body,{headers:header})
            .then(response => {
              console.log("responseresponse",response);
              if(response.data === "expired"){
                this.logOut(user);
                window.location.href='/';
              }
            });
  }

  forgotPassword(user) {
    console.log("user her",user)
  //btoa: Basic64 encryption
  const body = {
    'username':user
  };

  return axios.post(API_URL + 'forgotPassword', body)
        .then(response => {
            return response;
        })
        .catch(error => {
          return  Promise.reject(error);
        });
}

changePassword(user) {
  console.log("user her",user)

  const header = {
    'Content-Type':'application/json',
    'authorization':'Bearer ' + user.token
  };


//btoa: Basic64 encryption
const body = {
  'password':user.password,
  'newPassword': user.newPassword
};

console.log("bodyyy",body)
return axios.post(API_URL + 'changePassword', body, {header:header})
      .then(response => {
        return response;
      })
      .catch(error => {
        return  Promise.reject(error);
      });
}

  logOut(user) {
    const body = {
      'username':user.username,
    };

    console.log("logout",user);

    const header = {
      'Content-Type':'application/json',
      'authorization':'Bearer ' + user.token
    };

    console.log("headers",header);

    return axios.post(API_URL + 'logout',body,{headers:header})
            .then(response => {
              localStorage.removeItem('currentUser');
              currentUserSubject.next(null);
            });
           // localStorage.removeItem('currentUser');
            //currentUserSubject.next(null);
            
  }

  register(user) {
    return axios.post(API_URL + 'registration', JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllProducts() {
    return axios.get(API_URL + "products",
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  purchaseProduct(transaction) {
    return axios.post(API_URL + "purchase", JSON.stringify(transaction),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

}

export default new UserService();
