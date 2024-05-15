import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/apiService";
const Content = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const numItems = 8;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;
  let categoryId = queryParams.get("categoryId");
  const handlePageChange = (page) => {
    // Navigate to a new URL with the updated page parameter
    navigate(`/Grid?page=${page}&categoryId=${categoryId}`);
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <Link
            className="page-link"
            to={`?page=${i}&categoryId=${categoryId}`}
            onClick={(event) => handlePageChange(i, event)}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };
  useEffect(() => {
    if (categoryId === "null") {
      categoryId = null;
    }
    GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
      (response) => {
        setProducts(response.data);
        const contentRangeHeader = response.headers["content-range"];
        const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
        const calculatedTotalPages = Math.ceil(totalItems / numItems);
        setTotalPages(calculatedTotalPages);
      }
    );
    if (categoryId !== null) {
      GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
    } else {
      setCategories({ name: "Tất cả sản phẩm" });
    }
  }, [categoryId, currentPage]);
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2"> Bạn đang ở đây: </div>
              <nav className="col-md-8">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a>{categories.name}</a>
                  </li>
                </ol>
              </nav>
              {/*<!-- col.// -->*/}
            </div>
            {/*<!-- row.// -->*/}
            <hr />
            <div class="row">
              <div class="col-md-2">Filter by</div>
              <div class="col-md-10">
                <ul class="list-inline">
                  <li class="list-inline-item mr-3 dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      {" "}
                      Supplier type{" "}
                    </a>
                    <div class="dropdown-menu p-3" style={{ width: "400px" }}>
                      <label class="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          class="form-check-input"
                        />{" "}
                        Good supplier
                      </label>
                      <label class="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          class="form-check-input"
                        />{" "}
                        Best supplier
                      </label>
                      <label class="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          class="form-check-input"
                        />{" "}
                        New supplier
                      </label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-3 dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      {" "}
                      Country{" "}
                    </a>
                    <div class="dropdown-menu p-3">
                      <label class="form-check">
                        {" "}
                        <input
                          type="checkbox"
                          class="form-check-input"
                        /> China{" "}
                      </label>
                      <label class="form-check">
                        {" "}
                        <input
                          type="checkbox"
                          class="form-check-input"
                        /> Japan{" "}
                      </label>
                      <label class="form-check">
                        {" "}
                        <input type="checkbox" class="form-check-input" />{" "}
                        Uzbekistan{" "}
                      </label>
                      <label class="form-check">
                        {" "}
                        <input type="checkbox" class="form-check-input" />{" "}
                        Russia{" "}
                      </label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-3 dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Feature
                    </a>
                    <div class="dropdown-menu">
                      <a href="" class="dropdown-item">
                        Anti backterial
                      </a>
                      <a href="" class="dropdown-item">
                        With buttons
                      </a>
                      <a href="" class="dropdown-item">
                        Extra safety
                      </a>
                    </div>
                  </li>
                  <li class="list-inline-item mr-3">
                    <a href="#">Color</a>
                  </li>
                  <li class="list-inline-item mr-3">
                    <a href="#">Size</a>
                  </li>
                  <li class="list-inline-item mr-3">
                    <div class="form-inline">
                      <label class="mr-2">Price</label>
                      <input
                        class="form-control form-control-sm"
                        placeholder="Min"
                        type="number"
                      />
                      <span class="px-2"> - </span>
                      <input
                        class="form-control form-control-sm"
                        placeholder="Max"
                        type="number"
                      />
                      <button type="submit" class="btn btn-sm btn-light ml-2">
                        Ok
                      </button>
                    </div>
                  </li>
                  <li class="list-inline-item mr-3">
                    <label class="custom-control mt-1 custom-checkbox">
                      <input type="checkbox" class="custom-control-input" />
                      <div class="custom-control-label">Ready to ship</div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header className="mb-3">
          <div className="form-inline">
            <strong className="mr-md-auto">Kết quả tiềm kiếm: </strong>
            <select className="mr-2 form-control">
              <option>Sản phẩm mới nhất</option>
              <option>Đang thịnh hành</option>
              <option>Phổ biến nhất</option>
              <option>Rẻ nhất</option>
            </select>
            <div className="btn-group">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="http://localhost:3000/Grid"
                className="btn btn-light active"
                data-toggle="tooltip"
                title="Chế độ danh sách"
              >
                <i className="fa fa-bars"></i>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="page-listing-large.html"
                className="btn btn-light"
                data-toggle="tooltip"
                title="Chế độ lưới"
              >
                <i className="fa fa-th"></i>
              </a>
            </div>
          </div>
        </header>
        {/*<!-- Tiêu đề phía trên -->*/}
        <div className="row">
          {products.length > 0 &&
            products.map((row) => (
              <div className="col-md-3">
                <figure className="card card-product-grid">
                  <div className="img-wrap">
                  
                    <img
                      src={require(`../../assets/images/items/${row.thumbnail}`)}
                    ></img>
                      <span className="badge badge-danger"> MỚI </span>
                  </div>
                  {/*<!-- img-wrap.// -->*/}
                  <figcaption className="info-wrap">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="title mb-2">
                      {row.title}
                    </a>
                    <div className="price-wrap">
                      <span className="price">${row.price}</span>
                      <small className="text-muted">/mỗi sản phẩm</small>
                    </div>
                    {/*<!-- price-wrap.// -->*/}
                    <p className="mb-2"></p>
                    <p className="text-muted "></p>
                    <hr />
                    <p className="mb-3">
                      <span className="tag">
                        <i className="fa fa-check"></i> Đã xác minh
                      </span>
                      <span className="tag"> 2 Năm </span>
                      <span className="tag"> 23 đánh giá </span>
                      <span className="tag"> Nhật Bản </span>
                    </p>
                    <label className="custom-control mb-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        Thêm vào so sánh
                      </div>
                    </label>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="btn btn-outline-primary">
                      <i className="fa fa-envelope"></i> Liên hệ nhà cung cấp
                    </a>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
        {/*<!-- Hết dòng -->*/}
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Trang trước
              </button>
            </li>
            {renderPageNumbers()}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Trang sau
              </button>
            </li>
          </ul>
        </nav>
        <div className="box text-center">
          <p>Bạn đã tìm thấy điều bạn đang tìm kiếm chứ?</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="" className="btn btn-light">
            Có
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="" className="btn btn-light" style={{ marginLeft: "10px" }}>
            Không
          </a>
        </div>
      </div>
      {/*<!-- container .// -->*/}
    </section>
  );
};
export default Content;
