import { React, useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from "react-router-dom";
const cardTextStyle = {
  maxWidth: "80%",
};
const Item = (category) => {
  const { categoryId, categoryName } = category;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) =>
      setProducts(item.data)
    );
  }, [categoryId]);
  return (
    <section class="padding-bottom">
      <header class="section-heading mb-4">
        <h3 class="title-section">{categoryName}</h3>
      </header>
      <div class="row">
        {products.length > 0 &&
          products.map((row) => (
            <div class="col-xl-3 col-lg-3 col-md-4 col-6" key={row.id}>
              <div class="card card-product-grid">
                <Link to={`/Detail?productId=${row.id}`} class="img-wrap">
                  <img
                    src={require(`../../assets/images/items/${row.thumbnail}`)}
                    alt={row.title}
                  />{" "}
                </Link>
                <figcaption class="info-wrap">
                  <ul class="rating-stars mb-1">
                    <li style={{ cardTextStyle }} class="stars-active">
                      <img src={startsActive} alt="" />
                    </li>
                    <li>
                      <img src={startsDisable} alt="" />
                    </li>
                  </ul>
                  <div>
                    <Link to={`/Detail?productId=${row.id}`} class="title">
                      {row.title}
                    </Link>
                  </div>
                  <div class="price h5 mt-2">${row.price}</div>
                </figcaption>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default Item;
