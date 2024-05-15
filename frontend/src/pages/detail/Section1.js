import React, { useEffect, useState } from "react";
import { GET_ID } from "../../api/apiService";
import { useLocation, Link } from "react-router-dom";
const cardTextStyle = {
  maxWidth: "80%",
};
const Section1 = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  useEffect(() => {
    GET_ID(`products`, productId).then((item) => setProduct(item.data));
  }, [productId]);
  return (
    <section>
      <section className="py-3 bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a>{product.category && product.category.name}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </div>
      </section>
      <section class="section-content bg-white padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-6">
              <div class="card">
                <article class="gallery-wrap">
                  <div class="img-big-wrap">
                    <div>
                      <a href="#">
                        <img src={require("../../assets/images/items/1.jpg")} />
                      </a>
                    </div>
                  </div>
                  
                </article>
              </div>
            </aside>
            <main class="col-md-6">
              <article class="product-info-aside">
                <h2 class="title mt-3">{product.title} </h2>
                <div class="rating-wrap my-3">
                  <ul class="rating-stars">
                    <li jstyle={cardTextStyle} class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <small class="label-rating text-muted">132 reviews</small>
                  <small class="label-rating text-success">
                    <i class="fa fa-clipboard-check"></i> 154 orders{" "}
                  </small>
                </div>
                <div class="mb-3">
                  <var class="price h4">{product.price}</var>
                  <span class="text-muted">Đã bao gồm thuế VAT</span>
                </div>
                <p>{product.description}</p>
                <dl class="row">
                  <dt class="col-sm-3">Nhập khẩu: </dt>
                  <dd class="col-sm-9">
                    <a href="#">Tec-H-Gear Ltd.</a>
                  </dd>
                  <dt class="col-sm-3">Số lô:</dt>
                  <dd class="col-sm-9">596 065</dd>
                  <dt class="col-sm-3">Bảo hành</dt>
                  <dd class="col-sm-9">2 năm</dd>
                  <dt class="col-sm-3">Thời gian giao hàng</dt>
                  <dd class="col-sm-9">3-4 ngày</dd>
                  <dt class="col-sm-3">Tình trạng</dt>
                  <dd class="col-sm-9">Còn hàng</dd>
                </dl>
                <div class="form-row mt-4">
                  <div class="form-group col-md flex-grow-0">
                    <div class="input-group mb-3 input-spinner">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-light"
                          type="button"
                          id="button-plus"
                        >
                          +{" "}
                        </button>
                      </div>
                      <input type="text" class="form-control" value="1" />
                      <div class="input-group-append">
                        <button
                          class="btn btn-light"
                          type="button"
                          id="button-minus"
                        >
                          &minus;{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md">
                    <a href="#" class="btn btn-primary">
                      <i class="fas fa-shopping-cart"></i>{" "}
                      <span class="text">Thêm vào giỏ hàng</span>
                    </a>
                    <a href="#" class="btn btn-light">
                      <i class="fas fa-envelope"></i>{" "}
                      <span class="text">Liên hệ hỗ trợ</span>
                    </a>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
      <section class="section-name padding-y bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h5 class="title-description">Bên lề:</h5>
          <p>Từ trong Tec-H-Gear</p>
          <p>
            Cảm ơn Quý Khách Hàng đã lựa chọn Tec-H-Gear Mong rằng quý khách
            luôn mạnh khoẻ mà giàu có để thử hết tất cả sản phẩm của chúng tôi!
          </p>

          <h5 class="title-description">Vì một cộng đồng vững mạnh</h5>
          <table class="table table-bordered">
            <img src={require("../../assets/images/banners/banner1.jpg")} />
          </table>
        </div>

        <aside class="col-md-4">
          <div class="box">
            <h5 class="title-description">Tin tức</h5>

            <h5 class="title-description">Mới!</h5>

            <article class="media mb-3">
              <a href="#">
                <img
                  class="img-sm mr-3"
                  src={require("../../assets/images/items/9.jpg")}
                />
              </a>
              <div class="media-body">
                <h6 class="mt-0">
                  <a href="#">
                    AKKO lại cho ra mắt phiên bản bàn phím cực đẹp cho gamer?
                  </a>
                </h6>
                <p class="mb-2">
                  {" "}
                  Với sự bùng nổ của tựa game NARAKA Blade Point AKKO đã trình
                  làng chiếc bàn phím cực đẹp mắt mang phong cách cực kì
                  NARAKA...{" "}
                </p>
              </div>
            </article>

            <article class="media mb-3">
              <a href="#">
                <img
                  class="img-sm mr-3"
                  src={require("../../assets/images/posts/2.jpg")}
                />
              </a>
              <div class="media-body">
                <h6 class="mt-0">
                  <a href="#">
                    Mẹo bảo mật cực hay dành cho các tín đồ android
                  </a>
                </h6>
                <p class="mb-2">
                  {" "}
                  Chắc hẳn việc lấy cắp dữ liệu khá là đau đầu với các người
                  dùng android....{" "}
                </p>
              </div>
            </article>

            <article class="media mb-3">
              <a href="#">
                <img
                  class="img-sm mr-3"
                  src={require("../../assets/images/banners/banner1.jpg")}
                />
              </a>
              <div class="media-body">
                <h6 class="mt-0">
                  <a href="#">
                    Online shopping, Ngày tàn lụi của các shop bán hàng truyền
                    thống?
                  </a>
                </h6>
                <p class="mb-2">
                  {" "}
                  Với sự phát triển ồ ạt của thương mại điện tử, việc online
                  shopping dường như đã là thói quen của người tiêu dùng...
                </p>
              </div>
            </article>
          </div>
        </aside>
      </div>
    </div>
  </section>
    </section>
  );
};
export default Section1;
