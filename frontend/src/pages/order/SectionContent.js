import React from "react";
const SectionContent=()=>(
    <section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
		<h4 class="list-group-item ">Đơn hàng của tôi</h4>
		<a class="list-group-item" href="Profile"> Xem hồ sơ </a>

			<a class="list-group-item" href="Address"> Địa chỉ của tôi </a>
			<a class="list-group-item" href="Wishlists"> Danh sách yêu thích </a>
			<a class="list-group-item" href="Seller"> Cửa hàng của tôi </a>
			<a class="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main class="col-md-9">

		<article class="card mb-4">
		<header class="card-header">
			<a href="#" class="float-right"> <i class="fa fa-print"></i> Print</a>
			<strong class="d-inline-block mr-3">Order ID: 6123456789</strong>
			<span>Order Date: 16 December 2018</span>
		</header>
		<div class="card-body">
			<div class="row"> 
				<div class="col-md-8">
					<h6 class="text-muted">Delivery to</h6>
					<p>Michael Jackson <br/>  
					Phone +1234567890 Email: myname@gmail.com <br/>
			    	Location: Home number, Building name, Street 123, <br/> 
			    	P.O. Box: 100123
			 		</p>
				</div>
				<div class="col-md-4">
					<h6 class="text-muted">Payment</h6>
					<span class="text-success">
						<i class="fab fa-lg fa-cc-visa"></i>
					    Visa  **** 4216  
					</span>
					<p>Subtotal: $356 <br/>
					 Shipping fee:  $56 <br/> 
					 <span class="b">Total:  $456 </span>
					</p>
				</div>
			</div> 
		</div> 
		<div class="table-responsive">
		<table class="table table-hover">
			<tbody><tr>
				<td width="65">
					<img src={require("../../assets/images/items/1.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">Product name goes here </p>
					<var class="price text-muted">USD 145</var>
				</td>
				<td> Seller <br/> Nike clothing </td>
				<td width="250"> <a href="#" class="btn btn-outline-primary">Track order</a> 
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">More</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Return</a>
						 	<a href="#"  class="dropdown-item">Cancel order</a>
						 </div>
					</div> 
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/2.jpg")}class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">Another name goes here </p>
					<var class="price text-muted">USD 15</var>
				</td>
				<td> Seller <br/> ABC shop </td>
				<td> 
					<a href="#" class="btn btn-outline-primary">Track order</a>
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">More</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Return</a>
						 	<a href="#"  class="dropdown-item">Cancel order</a>
						 </div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/3.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">The name of the product  goes here </p>
					<var class="price text-muted">USD 145</var>
				</td>
				<td> Seller <br/> Wallmart </td>
				<td> <a href="#" class="btn btn-outline-primary">Track order</a> 
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">More</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Return</a>
						 	<a href="#"  class="dropdown-item">Cancel order</a>
						 </div>
					</div>  
				</td>
			</tr>
		</tbody></table>
		</div> 
		</article> 


		<article class="card order-item mb-4">
		<header class="card-header">
			<a href="#" class="float-right"> <i class="fa fa-print"></i> Print</a>
			<strong class="d-inline-block mr-3">Order ID: 6123456789</strong>
			<span>Order Date: 16 December 2018</span>
		</header>
		<div class="card-body">
			<div class="row"> 
				<div class="col-md-8">
					<h6 class="text-muted">Delivery to</h6>
					<p>Michael Jackson <br/>  
					Phone +1234567890 Email: myname@pixsellz.com <br/>
			    	Location: Home number, Building name, Street 123,  Tashkent, UZB <br/> 
			    	P.O. Box: 100123
			 		</p>
				</div>
				<div class="col-md-4">
					<h6 class="text-muted">Payment</h6>
					<span class="text-success">
						<i class="fab fa-lg fa-cc-visa"></i>
					    Visa  **** 4216  
					</span>
					<p>Subtotal: $356 <br/>
					 Shipping fee:  $56 <br/> 
					 <span class="b">Total:  $456 </span>
					</p>
				</div>
			</div>
		</div> 
		<div class="table-responsive">
		<table class="table table-hover">
			<tbody><tr>
				<td width="65">
					<img src={require("../../assets/images/items/1.jpg")}class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">Product name goes here </p>
					<var class="price text-muted">USD 145</var>
				</td>
				<td> Seller <br/> Nike clothing </td>
				<td width="250"> <a href="#" class="btn btn-outline-primary">Track order</a>  
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">More</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Return</a>
						 	<a href="#"  class="dropdown-item">Cancel order</a>
						 </div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/2.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">Another name goes here </p>
					<var class="price text-muted">USD 15</var>
				</td>
				<td> Seller <br/> ABC shop </td>
				<td> <a href="#" class="btn btn-outline-primary">Track order</a>  
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">More</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Return</a>
						 	<a href="#"  class="dropdown-item">Cancel order</a>
						 </div>
					</div>
				</td>
			</tr>
		</tbody></table>
		</div>
		</article>


	</main> 
</div>
</div>

</section>
)
export default SectionContent