
import React from "react";
const Content=()=>(
    <section class="section-content padding-y">
	<div class="card mx-auto" style={{margintop:40,maxWidth:520}} >
      <article class="card-body">
		<header class="mb-4"><h4 class="card-title">Đăng kí</h4></header>
		<form>
				<div class="form-row">
					<div class="col form-group">
						<label>Họ</label>
					  	<input type="text" class="form-control" placeholder=""/>
					</div> 
					<div class="col form-group">
						<label>tên</label>
					  	<input type="text" class="form-control" placeholder=""/>
					</div> 
				</div> 
				<div class="form-group">
					<label>Email</label>
					<input type="email" class="form-control" placeholder=""/>
					<small class="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ thông tin bạn với bên thứ 3.</small>
				</div> 
				<div class="form-group">
					<label class="custom-control custom-radio custom-control-inline">
					  <input class="custom-control-input" checked="" type="radio" name="gender" value="option1"/>
					  <span class="custom-control-label"> Nam</span>
					</label>
					<label class="custom-control custom-radio custom-control-inline">
					  <input class="custom-control-input" type="radio" name="gender" value="option2"/>
					  <span class="custom-control-label"> Nữ </span>
					</label>
				</div> 
				<div class="form-row">
					<div class="form-group col-md-6">
					<label>Nước</label>
					  <select id="inputState" class="form-control">
					    <option> Việt Nam</option>
					      <option>Uzbekistan</option>
					      <option>Russia</option>
					      <option >United States</option>
					      <option>India</option>
					      <option>Afganistan</option>
					  </select>
					</div> 
					<div class="form-group col-md-6">
					  <label>Thành phố</label>
					  <select id="inputState" class="form-control">
					    <option>Thành phố</option>
					      <option>Thủ đô Hà Nội</option>
					      <option>Thành phố Đà Nẵng</option>
					      <option >Thành phố Hải Phòng</option>
					      <option>Thành phố Hồ Chí Minh</option>
					      <option>Thành phố Qui Nhơn</option>
					  </select>
					</div> 
				</div> 
				<div class="form-row">
					<div class="form-group col-md-12">
						<label>Nhập địa chỉ chi tiết</label>
					    <input class="form-control" type="password"/>
					</div>
					</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label>Nhập mật khẩu</label>
					    <input class="form-control" type="password"/>
					</div>
					<div class="form-group col-md-6">
						<label>Nhập lại mật khẩu</label>
					    <input class="form-control" type="password"/>
					</div> 
				</div>
			    <div class="form-group">
			        <button type="submit" class="btn btn-dark btn-block"> Register  </button>
			    </div>      
			    <div class="form-group"> 
		            <label class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked=""/> <div class="custom-control-label"> Tôi đồng ý với các <a href="#">điều khoản và điều kiện</a>  </div> </label>
		        </div>           
			</form>
		</article>
    </div>
    <p class="text-center mt-4">Đã có tài khoản? <a href="Login">Đăng nhập</a></p>
    <br></br>
</section>
)
export default Content