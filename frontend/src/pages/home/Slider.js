import React from "react";
import "../../assets/js/bootstrap.bundle.min";
const Slider = () => (
  <section class="section-main padding-y">
    <main class="card">
      <div class="card-body">
        <div class="row">
          <aside class="col-lg col-md-3 flex-lg-grow-0">
            <nav class="nav-home-aside">
              <h6 class="title-category">
                <i class="d-md-none icon fa fa-chevron-down"></i>
              </h6>
              <ul class="menu-category">
                <li>
                  <a href="#">Laptop</a>
                  <ul class="submenu">
                    <li>
                      <a href="Offer">HP</a>
                    </li>
                    <li>
                      <a href="#">MACBOOK</a>
                    </li>
                    <li>
                      <a href="#">DELL</a>
                    </li>
                    <li>
                      <a href="#">ASUS</a>
                    </li>
                    <li>
                      <a href="#">LENOVO</a>
                    </li>
                    <li>
                      <a href="#">ACER</a>
                    </li>
                    <li>
                      <a href="#">MSI</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Laptop gaming</a>
                  <ul class="submenu">
                    <li>
                      <a href="#">ACER/PREDATOR</a>
                    </li>
                    <li>
                      <a href="#">ASUS/ROG</a>
                    </li>
                    <li>
                      <a href="#">MSI</a>
                    </li>
                    <li>
                      <a href="#">LENOVO</a>
                    </li>
                    <li>
                      <a href="#">GIGABYTE/AORUS</a>
                    </li>
                    <li>
                      <a href="#">HP</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Linh kiện PC</a>
                  <ul class="submenu">
                    <li>
                      <a href="#">VGA - Card màn hình</a>
                    </li>
                    <li>
                      <a href="#">CPU - Vi xử lý</a>
                    </li>
                    <li>
                      <a href="#">Lưu trữ SSD-HDD</a>
                    </li>
                    <li>
                      <a href="#">CASE - Vỏ máy tính</a>
                    </li>
                    <li>
                      <a href="#">RAM - Bộ nhớ trong</a>
                    </li>
                    <li>
                      <a href="#">PSU - Nguồn máy tính</a>
                    </li>
                    <li>
                      <a href="#">FAN - Tản nhiệt </a>
                    </li>
                    <li>
                      <a href="#">MOTHERBOARD - Bo Mạch chủ </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Màn hình</a>{" "}
                  <ul class="submenu">
                    <li>
                      <a href="#">LG</a>
                    </li>
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Asus</a>
                    </li>
                    <li>
                      <a href="#">Dell</a>
                    </li>
                    <li>
                      <a href="#">ViewSonic</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Bàn phím</a>{" "}
                  <ul class="submenu">
                    <li>
                      <a href="#">Akko</a>
                    </li>
                    <li>
                      <a href="#">Logitech</a>
                    </li>
                    <li>
                      <a href="#">Corsair</a>
                    </li>
                    <li>
                      <a href="#">Razer</a>
                    </li>
                    <li>
                      <a href="#">Dareu</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Chuột & Lót chuột</a>{" "}
                  <ul class="submenu">
                    <li>
                      <a href="#">HyperX</a>
                    </li>
                    <li>
                      <a href="#">Logitech</a>
                    </li>
                    <li>
                      <a href="#">Corsair</a>
                    </li>
                    <li>
                      <a href="#">Razer</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Tai nghe & Loa</a>{" "}
                  <ul class="submenu">
                    <li>
                      <a href="#">Logitech</a>
                    </li>
                    <li>
                      <a href="#">HyperX</a>
                    </li>
                    <li>
                      <a href="#">Corsair</a>
                    </li>
                    <li>
                      <a href="#">Soundpeats</a>
                    </li>
                    <li>
                      <a href="#">Stellseries</a>
                    </li>
                    <li>
                      <a href="#">Razer</a>
                    </li>
                    <li>
                      <a href="#">Apple</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">Giải đáp & thủ thuật</a>
                  <ul class="submenu">
                    <li>
                      <a href="#">TOP Màn hình máy tính 2023</a>
                    </li>
                    <li>
                      <a href="#">TOP Bàn phím máy tính 2023</a>
                    </li>
                    <li>
                      <a href="#">TOP Chuột gaming 2023</a>
                    </li>
                    <li>
                      <a href="#">TOP Tai nghe gaming 2023</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          <div class="col-md-9 col-xl-7 col-lg-7">
            <div
              id="carousel1_indicator"
              class="slider-home-banner carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carousel1_indicator"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                <li data-target="#carousel1_indicator" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={require("../../assets/images/banners/slider3.jpg")}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slider2.jpg")}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slider1.jpg")}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carousel1_indicator"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel1_indicator"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-md d-none d-lg-block flex-grow-1">
            <aside class="special-home-right">
              <h6 class="bg-blue text-center text-white mb-0 p-2">
                Popular category
              </h6>

              <div class="card-banner border-bottom">
                <div class="py-3" className="width:80%">
                  <h6 class="card-title">laptop Gaming 2023</h6>
                  <a href="#" class="btn btn-secondary btn-sm">
                    {" "}
                    Tới ngay{" "}
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/7.jpg")}
                  height="80"
                  class="img-bg"
                />
              </div>

              <div class="card-banner border-bottom">
                <div class="py-3" className="width:80%">
                  <h6 class="card-title">Bàn phím 2023</h6>
                  <a href="#" class="btn btn-secondary btn-sm">
                    {" "}
                    Tới ngay{" "}
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/17.jpg")}
                  height="80"
                  class="img-bg"
                />
              </div>

              <div class="card-banner border-bottom">
                <div class="py-3" className="width:80%">
                  <h6 class="card-title">Chuột gaming 2023</h6>
                  <a href="#" class="btn btn-secondary btn-sm">
                    {" "}
                    Tới ngay{" "}
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/19.jpg")}
                  height="80"
                  class="img-bg"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  </section>
);
export default Slider;
