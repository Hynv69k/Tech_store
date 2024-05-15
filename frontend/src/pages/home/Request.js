import React from "react";
const Request = ()=>(
<section class="padding-bottom">

<header class=" section-heading heading-line">
	<h4 class="title-section text-uppercase">Yêu cầu build máy</h4>
</header>

<div class="row">
	<div class="col-md-7" style={{marginLeft:117}}>
<div class="card-banner banner-quote overlay-gradient" style={{backgroundImage: `url(${require('../../assets/images/banners/banner9.jpg')})`}}> 
  <div class=" card-img-overlay white">
    <h3 class="card-title">Cách dễ dàng để chúng tôi có thể  build cho bạn một cấu hình phù hợp với yêu cầu</h3>
    <p class="card-text" >"Với sự chuyên nghiệp chúng tôi có thể giúp bạn hài lòng với chiếc laptop hoặc bộ PC mà bạn yêu cầu! Stay believe "
<br/> Tec-H-Gear</p>
    <a href="" class="btn btn-dark rounded-pill">Nhấp để xem thêm</a>
  </div>
</div>
	</div> 
	<div class=" col-md-3"  >
	<div class=" card card-body" style={{marginRight:30}}>
	<h4 class="title py-3">1 yêu cầu,nhiều lựa chọn! Lựa đi chờ chi!</h4>
	<form>
		<div class="form-group">
			<input class="form-control" name="" placeholder="Nhập họ tên của bạn!" type="text"/>
		</div>
			<div class="form-group">
			<input class="form-control" name="" placeholder="Nhập email của bạn!" type="text"/>
		</div>
		<div>
				<select class="custom-select form-control">
					<option>15-20 triệu</option>
					<option>20-30 triệu</option>
					<option>30-50 triệu</option>
					<option>50 triệu trở lên</option>
				</select>
			</div>
		<div class="form-group">
		
			<div class="input-group">	
				<select class="custom-select form-control">
					<option>Văn phòng</option>
					<option>Gaming</option>
					<option>Thiết kế đồ hoạ</option>
					<option>Học tập</option>
				</select>
			</div>
		</div>
	
		<div class="form-group">
			<button class="btn btn-dark">Tới luôn!</button>
		</div>
	</form>
</div>

	</div> 
</div> 
</section>
);
export default Request