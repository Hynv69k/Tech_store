import React, { useEffect, useState, Component } from "react";
import { GET_ALL } from "../api/apiService";
import us from "../assets/images/icons/flags/US.png";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
  }, []);
  return (
    <div>
      <header className="section-header section-header-gray btn-d">
        <section className="header-main border-bottom">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <a href="/" className="brand-wrap">
                  <img
                    src={require("../assets/images/logo.png")}
                    alt=""
                    style={{
                      width: "90%",
                      marginRight: "300",
                    }}
                  />
                </a>
              </div>
              <div className="col-xl-5 col-lg-7 col-md-6">
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <select
                      className="custom-select border-right"
                      name="category_name"
                    >
                      <option value="">Tất cả</option>
                      <option value="codex">Đặc biệt</option>
                      <option value="comments">Tốt nhất</option>
                      <option value="content">Mới nhất</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm đi bạn ei!"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-gray" type="submit">
                        <i className="fa fa-search"></i> Tìm luôn
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <a href="Profile" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user"></i>
                        <span className="notify">3</span>
                      </div>
                      <small className="text"> Hồ sơ </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="Profile" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots"></i>
                        <span className="notify">1</span>
                      </div>
                      <small className="text"> Tin nhắn </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="Order  " className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store"></i>
                      </div>
                      <small className="text"> Đặt hàng </small>
                    </a>
                  </div>
                  <div className="widget-header">
                    <a href="Cart" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                      <small className="text"> Giỏ hàng </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <nav className="navbar navbar-main-secondary navbar-expand pl-0">
        <ul className="navbar-nav flex-wrap">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Trang chủ
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Danh sách sản phẩm
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.length > 0 &&
                categories.map((row) => (
                  <a
                    class="dropdown-item"
                    href={`/ListingGrid?categoryId=${row.id}`}
                  >
                    {row.name}
                  </a>
                ))}
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/ListingGrid">
                Tất cả sản phẩm
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Điện tử
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Khuyến mãi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Đồng giá 100K
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
