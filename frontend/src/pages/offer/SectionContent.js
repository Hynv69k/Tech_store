import backgroundImageUrl from '../../assets/images/banners/banner1.jpg'
import React from 'react';
const Offer = ()=>(
  <section className="section-content bg-white padding-y"style={{backgroundImage: `url(${backgroundImageUrl})`}}>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card-banner overlay-gradient" style={{minHeight: 320, backgroundImage: `url(${require('../../assets/images/banners/banner1.jpg')})`}}>
            <div className="card-img-overlay white">
              <h3 className="card-title">Great Bundle only for 99$ <br /> It is hassle free </h3>
              <p className="card-text" style={{maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod
                tempor incididunt.</p>
              <a href className="btn btn-dark">Learn more</a>
            </div>
          </div> 
        </div> 
        <div className="col-md-4">
          <div className="card-banner" style={{height: 320, backgroundImage: `url(${require('../../assets/images/banners/banner2.jpg')})`}}>
            <article className="caption bottom">
              <h5 className="card-title">Watches</h5>
              <p>No matter how far along you are in your sophistication as an amateur.</p>
            </article>
          </div>
        </div> 
      </div> 
      <br />
      <div className="row">
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/1.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Great Smartwatch</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> {/* price-wrap.// */}
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %20</b>
              <img src={require("../../assets/images/items/2.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Cheap and Best demo cloth</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
<div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/3.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Great book name</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div>
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/4.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Great book name</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/5.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Great book name</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/6.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Great product name</a>
              <div className="price-wrap my-2">
                <span className="price">$65</span>
                <del className="price-old">$190</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/7.jpg" )}/>
            </div>
<div className="info-wrap">
              <a href="#" className="title">Great Headset stereo music</a>
              <div className="price-wrap my-2">
                <span className="price">$245</span>
                <del className="price-old">$390</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
        <div className="col-md-3">
          <article className="card card-product-grid">
            <div className="img-wrap">
              <b className="badge badge-danger mr-1">SAVE %10</b>
              <img src={require("../../assets/images/items/8.jpg" )}/>
            </div>
            <div className="info-wrap">
              <a href="#" className="title">Amazing Speaker</a>
              <div className="price-wrap my-2">
                <span className="price">$45</span>
                <del className="price-old">$90</del>
              </div> 
              <a href="#" className="btn btn-block btn-primary">Order now</a>
            </div>
          </article>
        </div> 
      </div> 
    </div> 
  </section>

);
export default Offer