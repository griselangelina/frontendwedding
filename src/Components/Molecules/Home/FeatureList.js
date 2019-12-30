import React, { Component } from 'react';
import Title from '../../Atom/Title';

class FeatureList extends Component {
    render() {
        return (
            <div class="feature-list-container">
                <div class="container">
                    <Title>
                        <h2>FITUR</h2>
                        <span>Yang Kami Berikan Spesial Untuk Anda</span>
                    </Title>
                    <div class="row u-margin-bottom u-padding-bottom ">
                        <div class="col s12 m4 ">
                            <div class="icon-block">
                                <h2 class="icon-title u-fw-bold">
                                <div class="icon-div">
                                    <i class="material-icons">info</i>
                                </div>
                                
                                </h2>
                                <h5 class="center u-fw-bold">Wedding Info</h5>

                                <p >Dengan wedding website anda dapat mencantumkan informasi detail mengenai acara dari tanggal pelaksanaan hingga tempat pelaksanaan, Anda juga dapat menulis couple story untuk dibagikan ke para tamu udnangan.</p>
                            </div>
                        </div>

                        <div class="col s12 m4 ">
                            <div class="icon-block">
                                <h2 class="icon-title u-fw-bold">
                                <div class="icon-div">
                                    <i class="material-icons">insert_invitation</i>
                                </div>
                                </h2>
                                <h5 class="center u-fw-bold">RSVP</h5>

                                <p >Anda dapat mendapatkan informasi mengenai ketersediaan tamu anda untuk hadir beserta wedding wishes dari mereka.</p>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="icon-title u-fw-bold">
                                <div class="icon-div">
                                    <i class="material-icons">settings</i>
                                </div>
                                </h2>
                                <h5 class="center u-fw-bold ">Costumize Template</h5>

                                <p >We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



FeatureList.propTypes = {

};


export default FeatureList;

