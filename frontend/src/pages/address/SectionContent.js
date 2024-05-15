import React from "react";
const SectionContent=()=>(
    <section class="section-content padding-y">
	<div class="container">
	
	<div class="row">
		<aside class="col-md-3">
			<nav class="list-group">
				<h4 class="list-group-item" >Địa chỉ của tôi</h4>
				<a class="list-group-item active" href="Profile"> Xem hồ sơ</a>
				<a class="list-group-item" href="Order"> Đơn hàng của tôi  </a>
				<a class="list-group-item" href="Wishlists"> Danh sách yêu thích </a>
				<a class="list-group-item" href="Seller"> Cửa hàng của tôi </a>
				<a class="list-group-item" href="page-index-1.html"> Đăng xuất </a>
			</nav>
		</aside> 
		<main class="col-md-9">

		<a href="#" class="btn btn-light mb-3"> <i class="fa fa-plus"></i> Thêm địa chỉ mới </a>

        <div class="row">
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Q9,TP.Hồ Chí Minh</h6>
                    <p>22<br/> Đường 147, Phước Long B</p>
                    <a href="#" class="btn btn-light disabled"> <i class="fa fa-check"></i> Mặc định</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div> 
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Hoài Nhơn, Bình Định</h6>
                    <p>Hoài Hảo<br/>Hoài Nhơn, Bình Định</p>
                    <a href="#" class="btn btn-light">Chọn làm mặc định</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div> 
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Q9,TP.Hồ Chí Minh</h6>
                    <p>103 <br/>Phước Long B  </p>
                    <a href="#" class="btn btn-light">Chọn làm mặc định</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div> 
        </div> 
	</main> 
</div>

</div> 
</section>
)
export default SectionContent