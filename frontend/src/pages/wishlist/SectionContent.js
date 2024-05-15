import React from "react";
const SectionContent=()=>(
    <section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
		<h4 class="list-group-item ">Danh sách yêu thích</h4>
		<a class="list-group-item" href="Profile"> Xem hồ sơ </a>

			<a class="list-group-item" href="Address"> Địa chỉ của tôi </a>
			<a class="list-group-item" href="Order"> Đơn hàng của tôi </a>
			<a class="list-group-item" href="Seller"> Cửa hàng của tôi </a>
			<a class="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main class="col-md-9">

		<article class="card">
			<div class="card-body">

		<div class="row">
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/1.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Great product name goes here</a>
							<p class="price mb-2">$80</p>
							<a href="#" class="btn btn-secondary btn-sm"> Add to cart </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  

				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/2.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Men's Jackeet for Winter </a>
							<p class="price mb-2">$1280</p>
							<a href="#" class="btn btn-secondary btn-sm"> Add to cart </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>

				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Another book of item goes here </a>
							<p class="price mb-2">$280</p>
							<a href="#" class="btn btn-secondary btn-sm"> Add to cart </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>
			</div> 
			</div>
		</article>


	</main>
</div>

</div> 
</section>
)
export default SectionContent