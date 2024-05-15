import React from "react";
const Log = () => (
  <section class="section-conten padding-y" style={{ minHeight: "84vh" }}>
    <div class="card mx-auto" style={{ maxWidth: "380px" }}>
      <div class="card-body">
        <h4 class="card-title mb-4">Đăng nhập</h4>
        <form>
          <a
            href="#"
            class="btn btn-facebook btn-block mb-2"
            style={{ color: "white", backgroundColor: "#405D9D" }}
          >
            {" "}
            <i class="fab fa-facebook-f"></i> Đăng nhập bằng Facebook
          </a>
          <a
            href="#"
            class="btn btn-google btn-block mb-4"
            style={{ color: "white", backgroundColor: "#AF0000" }}
          >
            {" "}
            <i class="fab fa-google"></i> Đăng nhập bằng Google
          </a>
          <div class="form-group">
            <input
              name=""
              class="form-control"
              placeholder="Username"
              type="text"
            />
          </div>
          <div class="form-group">
            <input
              name=""
              class="form-control"
              placeholder="Password"
              type="password"
            />
          </div>

          <div class="form-group">
            <a href="#" class="float-right">
              Forgot password?
            </a>
            <label class="float-left custom-control custom-checkbox">
              {" "}
              <input
                type="checkbox"
                class="custom-control-input"
                checked=""
              />{" "}
              <div class="custom-control-label"> Nhớ mật khẩu </div>{" "}
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-dark btn-block">
              <a href="/">Đăng nhập </a>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center mt-4">
      Chưa có tài khoản? <a href="Register">Đăng kí </a>
    </p>
    <br></br>
  </section>
);
export default Log;
