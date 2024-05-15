import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
                <footer class=" section-footer bg-secondary" style={{backgroundImage:'../assets/images/logo.png'}}>
                    <div class="container-fluid col-10 container">
                        <section class="container-fluid col-10 footer-top padding-y-lg text-white">
                            <div class="row">
                                <aside class="col-md col-6">
                                    <h6 class="title">Về Tec-H-GEAR</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Giới thiệu</a></li>
                                        <li> <a href="#">Tuyển dụng</a></li>
                                        <li> <a href="#">Hợp tác</a></li>
                                      
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Chính sách</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Bảo hành</a></li>
                                        <li> <a href="#">Thanh toán</a></li>
                                        <li> <a href="#">Giao hàng</a></li>
                                        <li> <a href="#">Bảo mật</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Thông tin</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Hệ thống cửa hàng</a></li>
                                        <li> <a href="#">Trung tâm bảo hành</a></li>
                                        
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Tổng đài hỗ trợ miễn phí</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#"> Gọi mua: 1900.1508 </a></li>
                                        <li> <a href="#"> CSKH: 1900.8508</a></li>
                                        <li> <a href="#">Email:tuphuongbatbai@gmail.com </a></li>

                                    </ul>
                                </aside>
                                <aside class="col-md">
                                    <h6 class="title">Đơn vị vận chuyển</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#"><img src={require('../assets/images/items/ship_1.jpg')}/></a></li>
                                        <li><a href="#"><img src={require('../assets/images/items/ship_2.jpg')}/> </a></li>
                                        <li><a href="#"> <img src={require('../assets/images/items/ship_3.jpg')}/></a></li>
                                    </ul>
                                </aside>
                            </div> 
                        </section>	

                        <section class="footer-bottom text-center">

                            <p class="text-white">Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
                            <p class="text-muted"> copy 2019 Company name, All rights reserved </p>
                        
                        </section>
                    </div>
                </footer>

        );
    }
}
export default Footer