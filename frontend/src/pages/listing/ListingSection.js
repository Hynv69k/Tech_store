import React from "react";
const ListingSection=()=>(


<div class="row">
<aside class="col-md-2">

<article class="filter-group">
    <h6 class="title">
        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Product type </a>
    </h6>
    <div class="filter-content collapse show" id="collapse_1">
        <div class="inner">
            <ul class="list-menu">
                <li><a href="#">Shorts  </a></li>
                <li><a href="#">Trousers </a></li>
                <li><a href="#">Sweaters  </a></li>
                <li><a href="#">Clothes  </a></li>
                <li><a href="#">Home items </a></li>
                <li><a href="#">Jackats</a></li>
                <li><a href="#">Somethings </a></li>
            </ul>
        </div> 
    </div>
</article> 
<article class="filter-group">
    <h6 class="title">
        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Brands </a>
    </h6>
    <div class="filter-content collapse show" id="collapse_2">
        <div class="inner">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" checked="" class="custom-control-input"/>
              <div class="custom-control-label">Adidas  
                  <b class="badge badge-pill badge-light float-right">120</b>  </div>
            </label>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" checked="" class="custom-control-input"/>
              <div class="custom-control-label">Nike 
                  <b class="badge badge-pill badge-light float-right">15</b>  </div>
            </label>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" checked="" class="custom-control-input"/>
              <div class="custom-control-label">The Noth Face 
                  <b class="badge badge-pill badge-light float-right">35</b> </div>
            </label>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" checked="" class="custom-control-input"/>
              <div class="custom-control-label">The cat 
                  <b class="badge badge-pill badge-light float-right">89</b> </div>
            </label>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input"/>
              <div class="custom-control-label">Honda 
                  <b class="badge badge-pill badge-light float-right">30</b>  </div>
            </label>
        </div> 
    </div>
</article> 
<article class="filter-group">
    <h6 class="title">
        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Price range </a>
    </h6>
    <div class="filter-content collapse show" id="collapse_3">
        <div class="inner">
            <input type="range" class="custom-range" min="0" max="100" name=""/>
            <div class="form-row">
            <div class="form-group col-md-6">
              <label>Min</label>
              <input class="form-control" placeholder="$0" type="number"/>
            </div>
            <div class="form-group text-right col-md-6">
              <label>Max</label>
              <input class="form-control" placeholder="$1,0000" type="number"/>
            </div>
            </div> 
            <button class="btn btn-block btn-primary">Apply</button>
        </div> 
    </div>
</article>
<article class="filter-group">
    <h6 class="title">
        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Sizes </a>
    </h6>
    <div class="filter-content collapse show" id="collapse_4">
          <div class="inner">
              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light"> XS </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light"> SM </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light"> LG </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light"> XXL </span>
              </label>
          </div> 
    </div>
</article> 
<article class="filter-group">
    <h6 class="title">
        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Condition </a>
    </h6>
    <div class="filter-content collapse show" id="collapse_5">
        <div class="inner">
            <label class="custom-control custom-radio">
              <input type="radio" name="myfilter_radio" checked="" class="custom-control-input"/>
              <div class="custom-control-label">Any condition</div>
            </label>

            <label class="custom-control custom-radio">
              <input type="radio" name="myfilter_radio" class="custom-control-input"/>
              <div class="custom-control-label">Brand new </div>
            </label>

            <label class="custom-control custom-radio">
              <input type="radio" name="myfilter_radio" class="custom-control-input"/>
              <div class="custom-control-label">Used items</div>
            </label>

            <label class="custom-control custom-radio">
              <input type="radio" name="myfilter_radio" class="custom-control-input"/>
              <div class="custom-control-label">Very old</div>
            </label>
        </div> 
    </div>
</article> 

</aside>
<main class="col-md-10">


<header class="mb-3">
    <div class="form-inline">
        <strong class="mr-md-auto">32 Items found </strong>
        <select class="mr-2 form-control">
            <option>Latest items</option>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Cheapest</option>
        </select>
        <div class="btn-group">
            <a href="page-listing-grid.html" class="btn btn-light" data-toggle="tooltip" title="List view"> 
                <i class="fa fa-bars"></i></a>
            <a href="page-listing-large.html" class="btn btn-light active" data-toggle="tooltip" title="Grid view"> 
                <i class="fa fa-th"></i></a>
        </div>
    </div>
</header>


<article class="card card-product-list">
<div class="row no-gutters">
    <aside class="col-md-3">
        <a href="#" class="img-wrap">
            <span class="badge badge-danger"> NEW </span>
            <img src={require("../../assets/images/items/1.jpg")}/>
        </a>
    </aside> 
    <div class="col-md-6">
        <div class="info-main">
            <a href="#" class="h5 title"> Hot sale unisex New Design Shirt</a>
            <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                    <li style={{width:"100%"}} class="stars-active"> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                    <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                </ul>
                <div class="label-rating">9/10</div>
            </div> 
        
            <p class="mb-3">
                <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                <span class="tag"> 5 Years </span> 
                <span class="tag"> 80 reviews </span>
                <span class="tag"> Russia </span>
            </p>

            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
            proident, sunt in culpa qui laborum.... </p>

        </div> 
    </div>
    <aside class="col-sm-3">
        <div class="info-aside">
            <div class="price-wrap">
                <span class="h5 price">$25.00-$40.00</span> 
                <small class="text-muted">/per item</small>
            </div>
            <small class="text-warning">Paid shipping</small>
            
            <p class="text-muted mt-3">Grand textile Co</p>
            <p class="mt-3">
                <a href="#" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>
                <a href="#" class="btn btn-light"><i class="fa fa-heart"></i> Save </a>
            </p>

            <label class="custom-control mt-3 custom-checkbox">
                    <div class="custom-control-label">Add to compare
              </div>
            </label>

        </div> 
    </aside> 
</div> 
</article> 



<article class="card card-product-list">
<div class="row no-gutters">
    <aside class="col-md-3">
        <a href="#" class="img-wrap">
            <img src={require("../../assets/images/items/2.jpg")}/>
        </a>
    </aside>
    <div class="col-md-6">
        <div class="info-main">
            <a href="#" class="h5 title"> High Quality Winter PU Rain Jacket  </a>
            <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                    <li style={{width:"80%"}} class="stars-active"> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                    <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                </ul>
                <div class="label-rating">7/10</div>
            </div> 
        
            <p class="mb-3">
                <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                <span class="tag"> 2 Years </span> 
                <span class="tag"> 30 reviews </span>
                <span class="tag"> Japan </span>
            </p>

            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
            proident, sunt in culpa qui laborum.... </p>

        </div> 
    </div> 
    <aside class="col-sm-3">
        <div class="info-aside">
            <div class="price-wrap">
                <span class="h5 price">$65.00-$70.00</span> 
                <small class="text-muted">/per item</small>
            </div> 
            <small class="text-success">Free shipping</small>
            
            <p class="text-muted mt-3">Guangzhou textile Ltd</p>
            <p class="mt-3">
                <a href="#" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>
                <a href="#" class="btn btn-light"><i class="fa fa-heart"></i> Save </a>
            </p>

            <label class="custom-control mt-3 custom-checkbox">
                  <input type="checkbox" class="custom-control-input"/>
                    <div class="custom-control-label">Add to compare
              </div>
            </label>

        </div> 
    </aside> 
</div> 
</article> 



<article class="card card-product-list">
<div class="row no-gutters">
    <aside class="col-md-3">
        <a href="#" class="img-wrap">
            <img src={require("../../assets/images/items/3.jpg")}/>
        </a>
    </aside> 
    <div class="col-md-6">
        <div class="info-main">
            <a href="#" class="h5 title"> Great product name goes here  </a>
            <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                    <li style={{width:"20%"}} class="stars-active"> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                    <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                </ul>
                <div class="label-rating">2/10</div>
            </div> 
        
            <p class="mb-3">
                <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                <span class="tag"> 4 Years </span> 
                <span class="tag"> 60 reviews </span>
                <span class="tag"> China </span>
            </p>

            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
            proident, sunt in culpa qui laborum.... </p>

        </div>
    </div> 
    <aside class="col-sm-3">
        <div class="info-aside">
            <div class="price-wrap">
                <span class="h5 price">$325.00-$390.00</span> 
                <small class="text-muted">/per bag</small>
            </div>
            <small class="text-success">Free shipping</small>
            
            <p class="text-muted mt-3">Guangzhou Electronic Co</p>
            <p class="mt-3">
                <a href="#" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>
                <a href="#" class="btn btn-light"><i class="fa fa-heart"></i> Save </a>
            </p>

            <label class="custom-control mt-3 custom-checkbox">
                  <input type="checkbox" class="custom-control-input"/>
                    <div class="custom-control-label">Add to compare
              </div>
            </label>

        </div> 

    </aside> 
    </div>
</article> 




<article class="card card-product-list">
<div class="row no-gutters">
    <aside class="col-md-3">
        <a href="#" class="img-wrap">
            <img src={require("../../assets/images/items/4.jpg")}/>
        </a>
    </aside>
    <div class="col-md-6">
        <div class="info-main">
            <a href="#" class="h5 title"> Best demo clothe with latest Fashion  </a>
            <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                    <li style={{width:"50%"}} class="stars-active"> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                    <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                </ul>
                <div class="label-rating">5/10</div>
            </div> 
        
            <p class="mb-3">
                <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                <span class="tag"> 4 Years </span> 
                <span class="tag"> 60 reviews </span>
                <span class="tag"> China </span>
            </p>

            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
            proident, sunt in culpa qui laborum.... </p>

        </div> 
    </div> 
    <aside class="col-sm-3">
        <div class="info-aside">
            <div class="price-wrap">
                <span class="h5 price">$325.00-$390.00</span> 
                <small class="text-muted">/per bag</small>
            </div> 
            <small class="text-success">Free shipping</small>
            
            <p class="text-muted mt-3">Guangzhou Electronic Co</p>
            <p class="mt-3">
                <a href="#" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>
                <a href="#" class="btn btn-light"><i class="fa fa-heart"></i> Save </a>
            </p>

            <label class="custom-control mt-3 custom-checkbox">
                  <input type="checkbox" class="custom-control-input"/>
                    <div class="custom-control-label">Add to compare
              </div>
            </label>

        </div> 
    </aside> 
</div> 
</article>



<article class="card card-product-list">
<div class="row no-gutters">
    <aside class="col-md-3">
        <a href="#" class="img-wrap">
            <img src={require("../../assets/images/items/3.jpg")}/>
        </a>
    </aside>
    <div class="col-md-6">
        <div class="info-main">
            <a href="#" class="h5 title"> Great product name goes here  </a>
            <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                    <li style={{width:"80%"}} class="stars-active"> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                    <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                        <i class="fa fa-star"></i> 
                    </li>
                </ul>
                <div class="label-rating">7/10</div>
            </div> 
        
            <p class="mb-3">
                <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                <span class="tag"> 4 Years </span> 
                <span class="tag"> 60 reviews </span>
                <span class="tag"> China </span>
            </p>

            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
            proident, sunt in culpa qui laborum.... </p>

        </div> 
    </div> 
    <aside class="col-sm-3">
        <div class="info-aside">
            <div class="price-wrap">
                <span class="h5 price">$325.00-$390.00</span> 
                <small class="text-muted">/per bag</small>
            </div> 
            <small class="text-success">Free shipping</small>
            
            <p class="text-muted mt-3">Guangzhou Electronic Co</p>
            <p class="mt-3">
                <a href="#" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>
                <a href="#" class="btn btn-light"><i class="fa fa-heart"></i> Save </a>
            </p>

            <label class="custom-control mt-3 custom-checkbox">
                  <input type="checkbox" class="custom-control-input"/>
                    <div class="custom-control-label">Add to compare
              </div>
            </label>

        </div> 
    </aside>
</div>
</article>


<nav class="mb-4" aria-label="Page navigation sample">
<ul class="pagination">
<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
<li class="page-item active"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item"><a class="page-link" href="#">4</a></li>
<li class="page-item"><a class="page-link" href="#">5</a></li>
<li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>


<div class="box text-center">
<p>Did you find what you were looking for？</p>
<a href="" class="btn btn-light">Yes</a>
<a href="" class="btn btn-light">No</a>
</div>


</main> 
</div>

)
export default ListingSection