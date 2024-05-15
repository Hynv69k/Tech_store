import React from "react";
const SectionSubcribe=()=>(
    <section class="padding-y-lg bg-light border-top">
<div class="container">

<p class="pb-2 text-center">Thắc mắc hãy gửi cho chúng tôi!</p>

<div class="row justify-content-md-center">
  <div class="col-lg-4 col-sm-6">
<form class="form-row">
    <div class="col-8">
    <input class="form-control" placeholder="Email của bạn" type="email"/>
    </div> 
    <div class="col-4">
    <button type="submit" class="btn btn-block btn-warning"> <i class="fa fa-envelope"></i> Gửi luôn! </button>
    </div> 
</form>
<small class="form-text">Chúng tôi không bao giờ chia sẻ thông tin khách hàng cho bên thứ ba. </small>
  </div> 
</div>
  

</div>
</section>
)
export default SectionSubcribe