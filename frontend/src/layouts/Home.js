import { React, useState, useEffect } from "react";
import Slider from "../pages/home/Slider";
import Deal from "../pages/home/Deal";
import Electronics from "../pages/home/Electronics";
import Request from "../pages/home/Request";
import Item from "../pages/home/Items";
import Service from "../pages/home/Services";
import Region from "../pages/home/Region";
import Subscribe from "../pages/home/Subscribe";
import { GET_ALL } from "../api/apiService";

function Home(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
  }, [categories]);
  const filteredCategories = categories.filter(
    (category) => category.isHome === 1
  );
  return (
    <div class="container">
      <Slider />
            <Deal />
      {filteredCategories.length > 0 &&
        filteredCategories.map((row) => (
          <Item categoryName={row.name} categoryId={row.id} />
        ))}
        

      <Electronics />
      <Request />
      <Service />
      <Region />
      <Subscribe />
    </div>
  );
}
export default Home;
