import { VideoCameraBack, WidthFull } from "@mui/icons-material";
import React from "react";
const Section2 = () => (
  <section class="section-name padding-y bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h5 class="title-description">Bên lề:</h5>
          <p>Từ trong Tec-H-Gear</p>
          <p>
            Cảm ơn Quý Khách Hàng đã lựa chọn Tec-H-Gear Mong rằng quý khách
            luôn mạng khoẻ mà giàu có để thử hết tất cả sản phẩm của chúng tôi!
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
);
export default Section2;
