import React, { Component } from 'react';
import Title from '../../Atom/Title';
import templatefree from '../../../asset/img/templatefree.png';
import template2 from '../../../asset/img/template2.png';
import templatefree2 from '../../../asset/img/templatefree2.png';

class ListingProduct extends Component {

    render() {
        return (
            <div class="product-price-container">
                <div class="product-list">
                    <div class="container">
                        <Title>
                            <h2>PILIH TEMPLATE</h2>
                            <span>Pilih Desain Template Sesuai yang Anda Inginkan</span>
                        </Title>
                        <div class="row">
                            <div class="col s12 m4 u-margin-top center">
                                <div style={{maxHeight:`300px`,overflow:`scroll`}}>
                                    <a class="#" >
                                        <img src={templatefree} style={{width:`100%`}} />
                                    </a>
                                </div>
                                
                                <p>Free template</p>
                                {/* <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="/create">Preview</a>

                                </div> */}
                            </div>
                            <div class="col s12 m4 u-margin-top center">
                                <div style={{maxHeight:`300px`,overflow:`scroll`}}>
                                    <a class="#">
                                        <img src={template2} style={{width:`100%`}} />
                                    </a>
                                </div>
                                <p>Custom template 1</p>
                                {/* <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="/create">Preview</a>

                                </div> */}
                            </div>
                            <div class="col s12 m4 u-margin-top center">
                                <div style={{maxHeight:`300px`,overflow:`scroll`}}>
                                    <a hrf="#">
                                        <img src={templatefree2} style={{width:`100%`}} />
                                    </a>
                                </div>
                                <p>Custom template 2</p>
                                {/* <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="/create">Preview</a>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div class="price-list">
                    <Title>
                        <h2>PAKET HARGA</h2>
                        <span>Daftar Paket Harga Sesuai Kebutuhan Anda</span>
                    </Title>
                    <div class="row u-ml-28 u-mr-28">
                        <div class="col s12 m4 ">
                            <div class="icon-block u-bd u-pb-80 u-pt-32">
                                <h5 class="center u-fw-bold u-pb-36">Paket Free</h5>

                                <p class="center">Couple Story</p>
                                <p class="center">Peta dan Tombol Lokasi Acara</p>
                                <p class="center">Detail Acara</p>
                                <p class="center">Show 1 foto </p>
                                <p class="center">RSVP</p>
                                <p class="center">Tema Website ditentukan</p>
                                <h6 class="center u-fw-bold u-pt-36">Free</h6>
                                <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="/create">Create Here</a>

                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4 ">
                            <div class="icon-block u-bd u-pb-80 u-pt-32">
                                <h5 class="center u-fw-bold u-pb-36">Paket Silver</h5>
                                <p class="center">Couple Story</p>
                                <p class="center">Peta dan Tombol Lokasi Acara</p>
                                <p class="center">Detail Acara</p>
                                <p class="center">Gallery Foto maks 6</p>
                                <p class="center">RSVP</p>
                                <p class="center">Tema Website terbatas</p>
                                <h6 class="center u-fw-bold u-pt-36">Harga 150.000</h6>
                                <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="https://api.whatsapp.com/send?phone=087887081010&text=Halo%20Admin%20Saya%20Mau%20Tanya%20Undangan%20Digital">Contact Us</a>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block u-bd u-pb-80 u-pt-32">
                                <h5 class="center u-fw-bold u-pb-36">Paket Gold</h5>
                                <p class="center">Couple Story</p>
                                <p class="center">Peta dan Tombol Lokasi Acara</p>
                                <p class="center">Detail Acara</p>
                                <p class="center">Gallery Foto Unlimited</p>
                                <p class="center">RSVP</p>
                                <p class="center">Tema Website Bebas Request</p>
                                <h6 class="center u-fw-bold u-pt-36 ">Harga Hubungi Kami</h6>
                                <div class="center u-mt-36">
                                    <a id="download-button" class="btn" href="https://api.whatsapp.com/send?phone=087887081010&text=Halo%20Admin%20Saya%20Mau%20Tanya%20Undangan%20Digital">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



ListingProduct.propTypes = {

};


export default ListingProduct;