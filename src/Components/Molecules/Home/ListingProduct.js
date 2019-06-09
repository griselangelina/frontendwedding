import React, { Component } from 'react';
import Title from '../../Atom/Title';
class ListingProduct extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div class="">
                 <div class="container">
                <div class="section">
                    <Title>
                        <h2>PILIH TEMPLATE</h2>
                        <span>Pilih Desain Template Sesuai yang Anda Inginkan</span>
                    </Title>
                    <div class="row">
                        <div class="col s12 m4 u-margin-top center">
                            <a class="#">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                            </a>
                            <p>Free template</p>
                            <div class="center u-mt-36">
                                 <a id="download-button" class="btn" href="/create">Preview</a>

                            </div>
                        </div>
                        <div class="col s12 m4 u-margin-top center">
                            <a class="#">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                            </a>
                            <p>Custom template 1</p>
                            <div class="center u-mt-36">
                                 <a id="download-button" class="btn" href="/create">Preview</a>

                            </div>
                        </div>
                        <div class="col s12 m4 u-margin-top center">
                            <a hrf="#">
                                <img src="https://media-api.xogrp.com/images/28d62a38-3e7d-41e8-b389-6d9d34b82190~rs_483.h" style={{width:`100%`}} />
                            </a>
                            <p>Custom template 2</p>
                            <div class="center u-mt-36">
                                 <a id="download-button" class="btn" href="/create">Preview</a>

                            </div>
                        </div>
                    </div>

                </div>


                </div>

                <div class="section bg-grad-180">
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
                        <a id="download-button" class="btn" href="/create">Create Here</a>

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
                        <a id="download-button" class="btn" href="/create">Create Here</a>

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