import React, { Component } from 'react';
class Footer extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="">Company Bio</h5>
                  <p class="grey-text text-lighten-4">Kami adalah website maker specialize dalam pembuatan undangan digital / wedding website. Customize wedding website yang anda inginkan dengan kami untuk penawaran khusus dan ide-ide menarik lainnya. </p>
        
        
                </div>
                <div class="col l3 s12">
                  <h5 class="">Contact</h5>
                  <ul>
                    <li class="row">
                      <i class="material-icons col l2">add_location</i>
                      <span class="col l10"> Jalan Grindo 4 No 7 Duri Selatan jakarta</span>
                    </li>
                    <li class="row">
                      <i class="material-icons col l2">email</i>
                      <span class="col l10"> datengyuk@gmail.com</span>
                    </li>
                    <li class="row">
                      <i class="material-icons col l2">local_phone</i>
                      <span class="col l10"> 0878321321312</span>
                    </li>
                  </ul>
                </div>
                <div class="col l3 s12">
                  <h5 class="">Kepoin Kami</h5>
                  <ul>
                    <li><a class="u-tx-white" href="#!">IG: datengyukguys</a></li>
                    <li><a class="u-tx-white" href="#!">WA: 08783231232</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright bg-grey">
              <div class="container">
              Made by <a class="u-tx-white text-lighten-3" href="http://materializecss.com">Materialize</a>
              </div>
            </div>
          </footer>
        );
    }
}




export default Footer;