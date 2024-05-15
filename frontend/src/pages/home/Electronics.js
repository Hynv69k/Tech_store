import React from "react";
const Electronics = () => (
  <section class=" padding-bottom">
    <header class="section-heading heading-line">
      <h4 class="title-section text-uppercase">Collection</h4>
    </header>

    <div class=" card card-home-category">
      <div class="row no-gutters">
        <div class="col-md-3">
          <div class="home-category-banner bg-light-orange">
            <h5 class="title">By Gamer For Gamer!</h5>
            <p>Bộ sưu tập dành cho các gamer chính hiệu! </p>
            <a
              href="#"
              class="btn btn-outline-dark rounded-pill"
              style={{ marginLeft: "10px" }}
            >
              Source now
            </a>
            <img
              src={require("../../assets/images/items/13.jpg")}
              class="img-bg"
            />
          </div>
        </div>
        <div class="col-md-9">
          <ul class="row no-gutters bordered-cols">
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">
                    Bo mạch chủ ASUS ROG MAXIMUS Z790 EXTREME DDR5
                  </h6>
                  <img
                    src={require("../../assets/images/items/20.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i> 28.990.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">Intel Core i9 10940X /19.25MB/ 4.6GHz </h6>
                  <img
                    src={require("../../assets/images/items/21.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i> 23.900.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">AKKO 5108S Naraka Blade Point </h6>
                  <img
                    src={require("../../assets/images/items/9.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i>2.290.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">
                    RAM Kingston Fury Beast RGB 64GB (2x32GB){" "}
                  </h6>
                  <img
                    src={require("../../assets/images/items/22.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted txt-outline-dark">
                    <i class="fa fa-map-marker-alt"></i>11.990.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">SSD SamSung 980 PRO 2TB M.2 Heatsink </h6>
                  <img
                    src={require("../../assets/images/items/23.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i> 9.990.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">
                    Vỏ máy tính Corsair Obsidian 1000D kính cường lực
                  </h6>
                  <img
                    src={require("../../assets/images/items/24.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i> 12.990.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">
                    Tản nhiệt Cooler Master MASTERAIR MA612 STEALTH ARGB{" "}
                  </h6>
                  <img
                    src={require("../../assets/images/items/25.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i>2.090.000₫
                  </p>
                </div>
              </a>
            </li>
            <li class="col-6 col-lg-3 col-md-4">
              <a href="#" class="item">
                <div class="card-body">
                  <h6 class="title">
                    Màn hình cong GIGABYTE G32QC A 32" VA 2K 165Hz{" "}
                  </h6>
                  <img
                    src={require("../../assets/images/items/26.jpg")}
                    class="img-sm float-right"
                  />
                  <p class="text-muted">
                    <i class="fa fa-map-marker-alt"></i> 9.250.000₫
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Electronics;
