import React from "react";
const SectionContent = () => (
  <section class="section-content padding-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <nav class="list-group">
            <h4 class="list-group-item ">Cửa hàng của tôi</h4>
            <a class="list-group-item" href="Profile">
              {" "}
              Xem hồ sơ{" "}
            </a>

            <a class="list-group-item" href="Address">
              {" "}
              Địa chỉ của tôi{" "}
            </a>
            <a class="list-group-item" href="Wishlists">
              Danh sách yêu thích{" "}
            </a>
            <a class="list-group-item" href="Order">
              {" "}
              Đơn hàng của tôi
            </a>
            <a class="list-group-item" href="page-index-1.html">
              {" "}
              Log out{" "}
            </a>
          </nav>
        </aside>
        <main class="col-md-9">
          <article class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <figure class="card card-product-grid">
                    <div class="img-wrap">
                      <img src={require("../../assets/images/items/1.jpg")} />
                    </div>
                    <figcaption class="info-wrap">
                      <a href="#" class="title mb-2">
                        Predator Helios 16
                      </a>
                      <div class="price-wrap mb-3">
                        <span class="price">$32.00-$40.00</span>
                        <small class="text-muted">/per item</small>
                      </div>
                      <a href="#" class="btn btn-outline-primary">
                        {" "}
                        <i class="fa fa-pen"></i> Edit{" "}
                      </a>
                      <a href="#" class="btn btn-primary">
                        {" "}
                        <i class="fa fa-eye"></i> View{" "}
                      </a>

                      <hr />
                      <a href="#" class="btn btn-success btn-block">
                        {" "}
                        Promote{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-4">
                  <figure class="card card-product-grid">
                    <div class="img-wrap">
                      <img src={require("../../assets/images/items/2.jpg")} />
                    </div>
                    <figcaption class="info-wrap">
                      <a href="#" class="title mb-2">
                        Dell Vostro 11
                      </a>
                      <div class="price-wrap mb-3">
                        <span class="price">$41.00-$50.00</span>
                        <small class="text-muted">/per item</small>
                      </div>
                      <a href="#" class="btn btn-outline-primary">
                        {" "}
                        <i class="fa fa-pen"></i> Edit{" "}
                      </a>
                      <a href="#" class="btn btn-primary">
                        {" "}
                        <i class="fa fa-eye"></i> View{" "}
                      </a>

                      <hr />
                      <a href="#" class="btn btn-success btn-block">
                        {" "}
                        Promote{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-4">
                  <figure class="card card-product-grid">
                    <div class="img-wrap">
                      <img src={require("../../assets/images/items/1.jpg")} />
                    </div>
                    <figcaption class="info-wrap">
                      <a href="#" class="title mb-2"></a>
                      <div class="price-wrap mb-3">
                        <span class="price">$32.00-$40.00</span>
                        <small class="text-muted">/per item</small>
                      </div>
                      <a href="#" class="btn btn-outline-primary">
                        {" "}
                        <i class="fa fa-pen"></i> Edit{" "}
                      </a>
                      <a href="#" class="btn btn-primary">
                        {" "}
                        <i class="fa fa-eye"></i> View{" "}
                      </a>

                      <hr />
                      <a href="#" class="btn btn-success btn-block">
                        {" "}
                        Promote{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-4">
                  <figure class="card card-product-grid">
                    <div class="img-wrap">
                      <img src={require("../../assets/images/items/4.jpg")} />
                    </div>
                    <figcaption class="info-wrap">
                      <a href="#" class="title mb-2">
                        Nitro 6 AN515
                      </a>
                      <div class="price-wrap mb-3">
                        <span class="price">$32.00-$40.00</span>
                        <small class="text-muted">/per item</small>
                      </div>
                      <a href="#" class="btn btn-outline-primary">
                        {" "}
                        <i class="fa fa-pen"></i> Edit{" "}
                      </a>
                      <a href="#" class="btn btn-primary">
                        {" "}
                        <i class="fa fa-eye"></i> View{" "}
                      </a>

                      <hr />
                      <a href="#" class="btn btn-success btn-block">
                        {" "}
                        Promote{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>

                <div class="col-md-4">
                  <figure class="card card-product-grid">
                    <div class="img-wrap">
                      <img src={require("../../assets/images/items/5.jpg")} />
                    </div>
                    <figcaption class="info-wrap">
                      <a href="#" class="title mb-2">
                        Acer Aspire 7A715
                      </a>
                      <div class="price-wrap mb-3">
                        <span class="price">$32.00-$40.00</span>
                        <small class="text-muted">/per item</small>
                      </div>
                      <a href="#" class="btn btn-outline-primary">
                        {" "}
                        <i class="fa fa-pen"></i> Edit{" "}
                      </a>
                      <a href="#" class="btn btn-primary">
                        {" "}
                        <i class="fa fa-eye"></i> View{" "}
                      </a>

                      <hr />
                      <a href="#" class="btn btn-success btn-block">
                        {" "}
                        Promote{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </section>
);
export default SectionContent;
