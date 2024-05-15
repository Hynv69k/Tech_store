import React from "react";
const Region =()=>(
<section class=" padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Các thương hiệu nổi tiếng</h4>

</header>

<div className="section-content">
	<div className="brand-list row">
		<div className="brand-name"><a href="https://www.acer.com/vn-vi"><img src={require("../../assets/images/icons/acer.jpg")} alt=""/></a></div>
		<div className="brand-name"><a href="https://amdvietnam.vn/"><img src={require("../../assets/images/icons/amd.jpg")} alt=""/></a></div>

		<div className="brand-name"><a href="https://www.asus.com/vn/"><img src={require("../../assets/images/icons/asus.jpg")}/></a></div>

		<div className="brand-name"><a href="https://www.corsair.com/us/en"><img src={require("../../assets/images/icons/corsair.jpg")} alt=""/></a></div>

		<div className="brand-name"><a href="https://www.gigabyte.com/vn"><img src={require("../../assets/images/icons/gigabyte.jpg")} alt=""/></a></div>

		<div className="brand-name"><a href="https://hyperx.com/"><img src={require("../../assets/images/icons/hyperx.jpg")} alt=""/></a></div>
		<div className="brand-name"><a href="https://www.intel.vn/content/www/vn/vi/homepage.html"><img src={require("../../assets/images/icons/intel.jpg")} alt=""/></a></div>
		<div className="brand-name"><a href="https://www.kingston.com/vn"><img src={require("../../assets/images/icons/kingston.jpg")} alt=""/></a></div>


	</div>
</div>
</section>
);
export default Region