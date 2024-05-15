import React from "react";
const Deal = () => (
  <section class="padding-bottom">
    <div class="  card card-deal">
      <div class="  heading content-body">
        <header class="section-heading">
          <h3 class="section-title">FLASH SALE</h3>
          <p>Còn lại</p>
        </header>
        <div class="timer">
          <div>
            {" "}
            <span class="num">04</span> <small>Days</small>
          </div>
          <div>
            {" "}
            <span class="num">12</span> <small>Hours</small>
          </div>
          <div>
            {" "}
            <span class="num">58</span> <small>Min</small>
          </div>
          <div>
            {" "}
            <span class="num">02</span> <small>Sec</small>
          </div>
        </div>

        <div class="row no-gutters items-wrap">
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src={require("../../assets/images/items/10.jpg")} />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">
                  RAM - Kingston Fury Beast RGB 16GB
                </a>
                <span class="badge badge-danger"> -20%</span>
                <span>
                  <br />
                  <s> 5.290.000</s>
                  <br />
                </span>
                <span> 3.190.000 </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src={require("../../assets/images/items/11.jpg")} />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">
                  RAM - G.Skill Trident Z5 RGB 32GB
                </a>
                <span class="badge badge-danger"> -20% </span>
                <span>
                  <br />
                  <s>6.990.000</s>
                  <br />
                </span>
                <span> 5.590.000 </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src={require("../../assets/images/items/12.jpg")} />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">
                  RAM - Corsair Vengeance DDR5 32GB
                </a>
                <span class="badge badge-danger"> -55% </span>
                <span>
                  <br />
                  <s>8.990.000</s>
                  <br />
                </span>
                <span> 3.990.000 </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src={require("../../assets/images/items/13.jpg")} />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">
                  VGA - Asus ROG Strix GeForce RTX 4060
                </a>
                <span class="badge badge-danger"> -15% </span>
                <span>
                  <br />
                  <s>10.990.000</s>
                  <br />
                </span>
                <span> 9.340.000 </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src={require("../../assets/images/items/14.jpg")} />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">
                  VGA - GIGABYTE GeForce RTX 3050
                </a>
                <span class="badge badge-danger"> -15% </span>
                <span>
                  <br />
                  <s>6.090.000</s>
                  <br />
                </span>
                <span> 5.180.000 </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Deal;
