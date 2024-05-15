import React from "react";
const SectionContent = () => (
  <section class="section-content padding-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <nav class="list-group">
            <h4 class="list-group-item ">Xem Hồ sơ</h4>
            <a class="list-group-item" href="Address">
              {" "}
              Địa chỉ của tôi{" "}
            </a>
            <a class="list-group-item" href="Order">
              {" "}
              Đơn hàng của tôi{" "}
            </a>
            <a class="list-group-item" href="Wishlists">
              {" "}
              Danh sách yêu thích{" "}
            </a>
            <a class="list-group-item" href="Seller">
              {" "}
              Cửa hàng của tôi{" "}
            </a>
            <a class="list-group-item" href="Login">
              {" "}
              Đăng nhập tài khoản khác{" "}
            </a>
          </nav>
        </aside>
        <main class="col-md-9">
          <article class="card mb-3">
            <div class="card-body">
              <figure class="icontext">
                <div class="icon">
                  <img
                    class="rounded-circle img-sm border"
                    src={require("../../assets/images/avatars/avatar2.jpg")}
                  />
                </div>
                <div class="text">
                  <strong>Nguyễn Văn Huy </strong> <br />
                  <p class="mb-2"> ngvanhuy2003@gmail.com </p>
                  <a href="#" class="btn btn-light btn-sm">
                    Sửa
                  </a>
                </div>
              </figure>
              <hr />
              <p>
                <i class="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ của
                tôi:
                <br />
                22 đường 147, Phước Long B, Quận 9,TP.HCM
                <a href="#" class="btn-link">
                  {" "}
                  sửa
                </a>
              </p>

              <article class="card-group card-stat">
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">38</h4>
                    <span>Đơn đặt hàng</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">5</h4>
                    <span>Yêu thích</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">1</h4>
                    <span>Đang chờ giao hàng</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">50</h4>
                    <span>Đã giao</span>
                  </div>
                </figure>
              </article>
            </div>
          </article>

          <article class="card  mb-3">
            <div class="card-body">
              <h5 class="card-title mb-4">Đơn hàng hiện tại </h5>

              <div class="row">
                <div class="col-md-6">
                  <figure class="itemside  mb-3">
                    <div class="aside">
                      <img
                        src={require("../../assets/images/items/1.jpg")}
                        class="border img-sm"
                      />
                    </div>
                    <figcaption class="info">
                      <time class="text-muted">
                        <i class="fa fa-calendar-alt"></i> 12.09.2019
                      </time>
                      <p>Predator Helios 16PH16 71 B4N1 </p>
                      <span class="text-success">Đã xác nhận đơn hàng</span>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-6">
                  <figure class="itemside  mb-3">
                    <div class="aside">
                      <img
                        src={require("../../assets/images/items/2.jpg")}
                        class="border img-sm"
                      />
                    </div>
                    <figcaption class="info">
                      <time class="text-muted">
                        <i class="fa fa-calendar-alt"></i> 12.09.2019
                      </time>
                      <p>Lenovo Ideapad Gaming 3 15IAH7</p>
                      <span class="text-success">Đang vận chuyển</span>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-6">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img
                        src={require("../../assets/images/items/3.jpg")}
                        class="border img-sm"
                      />
                    </div>
                    <figcaption class="info">
                      <time class="text-muted">
                        <i class="fa fa-calendar-alt"></i> 12.09.2019
                      </time>
                      <p> Acer Nitro 17 Phoenix AN17 51 </p>
                      <span class="text-success">Đã giao </span>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <a href="#" class="btn btn-outline-dark btn-block">
                {" "}
                Xem tất cả đơn đặt hàng<i class="fa fa-chevron-down"></i>{" "}
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  </section>
);
export default SectionContent;
