import React from "react";
const Service =()=>(
<section class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Các phương thức thanh toán</h4>
</header>

<div class="row">
	<div class="col-md-4 col-sm-6">
		<article class="card card-post">
		  <img src={require("../../assets/images/posts/1.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Giao dịch trực tiếp</h6>
		    <p class="small text-uppercase text-muted">Bảo mật đơn hàng</p>
		  </div>
		</article> 
	</div> 
	<div class="col-md-4 col-sm-6">
		<article class="card card-post">
		  <img src={require("../../assets/images/posts/2.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Thanh toán online</h6>
		    <p class="small text-uppercase text-muted">Giải pháp tiện ích</p>
		  </div>
		</article> 
	</div>
	<div class="col-md-4 col-sm-6">
		<article class="card card-post">
		 <img src={require("../../assets/images/posts/4.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Ship trong và ngoài nước</h6>
		    <p class="small text-uppercase text-muted">Thuận tiện cho khách hàng</p>
		  </div>
		</article>
	</div> 
</div> 

</section>
);
export default Service