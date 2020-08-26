import React from 'react';


function Footer(props) {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">TickID Mail</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link">Giới thiệu về TickID Việt Nam</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">Điều khoản TickID</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Danh mục</h3>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a className="footer-item__link">
                                    <i className="footer-item-icon fab fa-facebook" />
                  Facebook
                </a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">
                                    <i className="footer-item-icon fab fa-instagram" />
                  Instagram
                </a>
                            </li>
                            <li className="footer-item">
                                <a className="footer-item__link">
                                    <i className="footer-item-icon fab fa-linkedin" />
                  Linkedin
                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                    </div>
                </div>
            </div>
            <div className="footer__text">
                <div className="grid">
                    <h3 className="text">© 2020 - Bản quyền thuộc về Công ty TNHH Shopee</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;