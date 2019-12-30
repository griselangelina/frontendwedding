import axios from 'axios';
import UserService from './UserService';

const API_URL = "/api/bridegroom/";
var headers = {};
class BrideGroomService {

  constructor(){
    UserService.currentUser.subscribe(data => {
      this.headers = {
        'Content-Type':'application/json',
        'authorization':"Bearer " + (data ? data.token: '')
      };
    });
  }

  checkName(user) {
    return axios.get(API_URL + "checkname/"+ user, {headers: this.headers});
  }

  submit(formSubmit) {
    return axios.post(API_URL + "save",formSubmit, {headers:this.headers});
  }

  confirm(brideGroomCd){
    return axios.get(API_URL + brideGroomCd, {headers: this.headers});
  }

  editList(accountId){
    return axios.get(API_URL +"editlist/"+ accountId, {headers: this.headers});

  }
}

export default new BrideGroomService();
