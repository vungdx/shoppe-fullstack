import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { withCookies } from 'react-cookie';

function Navbar(props) {

    const userSignin = useSelector(state => state.userSignin);
    const userRegister = useSelector(state => state.userRegister);
    const userInfo = userSignin.userInfo ? userSignin.userInfo : userRegister.userInfo;

    const handleLogout = () => {
        props.cookies.remove('userInfo');
        if (!props.cookies.userInfo) {
            const { location } = props;
            window.location.href = "/";
            // console.log({ props });
            // return <Redirect to={
            //     {
            //         pathname: `${location}`,
            //         state: { from: location }
            //     }
            // } />
        }
    }

    return (
        <nav className="header__navbar">
            <ul className="header__navbar-list">
                <li className="header__navbar-item separate">Vào cửa hàng trên ứng dụng F8-Shop
                    <div className="header__qr-code">
                        <img src="./images/QRcode.png" alt="QR-code" className="qr-code__image" />
                        <div className="qr-code__apps">
                            <a href="true" className="header-qr-link">
                                <img src="./images/gg-play.png" alt="Google Play" />
                            </a>
                            <a href="true" className="header-qr-link">
                                <img src="./images/app-store.png" alt="App Store" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <span className="title">Kết nối</span>
                    <a href="true" className="header__navbar-item-link"><i className="icon fab fa-facebook" /></a>
                    <a href="true" className="header__navbar-item-link"><i className="icon fab fa-instagram" /></a>
                </li>
            </ul>
            <ul className="header__navbar-list">
                <li className="header__navbar-item">
                    <a href="true" className="header__navbar-item-link">
                        <i className="icon far fa-bell" />
                        Thông báo
                    </a>
                    <div className="notify">
                        <header className="notify-title">
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul className="notify-list">
                            <li className="notify-item">
                                <a href="true" className="notify-link view">
                                    <img src="./images/image001-1-1024x1024-1024x635.jpg" alt="" className="notify-link-img" />
                                    <div className="notify-link-info">
                                        <span className="notify-info-name">Mỹ phẩm Ohui chính hãng</span>
                                        <span className="notify-info-desc">Được chiết xuất 100% nước hoa đến từ  </span>
                                    </div>
                                </a>
                            </li>
                            <li className="notify-item">
                                <a href="true" className="notify-link view">
                                    <img src="./images/image001-1-1024x1024-1024x635.jpg" alt="" className="notify-link-img" />
                                    <div className="notify-link-info">
                                        <span className="notify-info-name">Đầm maxi [RẺ NHẤT SHOPPE] cánh tiên voan
                                            đi tiệc sang trọng freesize trẻ trung năng động</span>
                                        <span className="notify-info-desc">Được chiết xuất 100% nước hoa đến từ  </span>
                                    </div>
                                </a>
                            </li>
                            <li className="notify-item">
                                <a href="true" className="notify-link">
                                    <img src="./images/image001-1-1024x1024-1024x635.jpg" alt="" className="notify-link-img" />
                                    <div className="notify-link-info">
                                        <span className="notify-info-name">[ RẺ NHẤT Shoppe ] Áo gió 2 lớp chống
                                            nước, chống nắng, hàng VNXK -Hàng nhập khẩu </span>
                                        <span className="notify-info-desc">Được chiết xuất 100% nước hoa đến từ </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer className="view-all">
                            <a className="view-all-btn">Xem tất cả</a>
                        </footer>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <a href="true" className="header__navbar-item-link">
                        <i className="icon fas fa-question-circle" />
                            Trợ giúp
                    </a>
                </li>

                {
                    userInfo ?
                        <div className="header__navbar-item header__navbar-user">
                            <img src="https://getdrawings.com/free-icon/username-icon-73.png" alt="" className="header__navbar-user-img" />
                            <span className="header__navbar-user-name">{userInfo.name}</span>
                            <ul className="header__navbar-user-menu">
                                <div className="header__navbar-user-item">
                                    <a href="true">Tài khoản của tôi</a>
                                </div>
                                <div className="header__navbar-user-item">
                                    <a href="true">Đơn mua</a>
                                </div>
                                <div className="header__navbar-user-item">
                                    <Link to="/" type="button" onClick={handleLogout} >Đăng xuất</Link>
                                </div>
                            </ul>
                        </div>
                        :
                        <Fragment>
                            <Link to="/register" className="header__navbar-item bold separate">Đăng ký</Link>
                            <Link to="/signin" className="header__navbar-item bold">Đăng nhập</Link>
                        </Fragment>
                }
            </ul>
        </nav >
    );
}

export default withCookies(Navbar);