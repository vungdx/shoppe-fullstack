import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../actions/productActions';
import Navbar from '../component/header/Navbar';
import Search from '../component/header/Search';
import Footer from '../component/footer/Footer';

function ProductDetailScreen(props) {

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
    }, [])

    // Show rating star
    const showRatingStar = (rating) => {
        let result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="rating-star-icon fas fa-star"></i>)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={i + j} className="rating-star-icon far fa-star"></i>)
        }
        return result;
    }
    // Quantity num
    const [qty, setQty] = useState(1);
    const handleIncQty = () => {
        if (qty >= product.countInStock) {
            return;
        }
        else {
            setQty(qty + 1);
        }
    }
    const handleDecQty = () => {
        if (qty <= 1) {
            return;
        } else {
            setQty(qty - 1);
        }
    }

    // ADD to cart
    const handleAddToCart = () => {
        if (userInfo === null) {
            props.history.push("/login");
        }
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    return (
        <div className="ProductScreen">
            <header className="header">
                <div className="grid">
                    <Navbar />
                    <Search />
                </div >
            </header>
            <div className="content">
                <div className="grid">
                    {loading ? <div>...Loading</div>
                        : error ? <div>{error}</div>
                            :
                            <div className="grid__row padding-top ">
                                <div className="product-detail-image">
                                    <img src={product.image} alt="image" />
                                </div>
                                <div className="product-detail-info">
                                    <span className="name">
                                        {product.name}
                                    </span>
                                    <div className="review-sold">
                                        <div className="rating-star">
                                            {showRatingStar(product.rating)}
                                        </div>
                                        <div className="num-review">{product.numReviews} đánh giá</div>
                                        <div className="num-sold">
                                            <span className="num">{product.numProductSold}</span>
                                            <span>sản phẩm Đã bán</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <div className="price-old">{product.oldPrice} $</div>
                                        <div className="price-new">{product.newPrice} $</div>
                                    </div>
                                    <div className="shipping">
                                        <span className="shipping-label">Vận chuyển</span>
                                        <div className="shipping-option">
                                            <div className="shipping-free">
                                                <span className="shipping-free-label">Miễn phí vận chuyển</span>
                                                <label className="shipping-free-condition" htmlFor="">Miễn phí vận chuyển khi đơn hàng đạt giá
                                                trị tối thiểu</label>
                                            </div>
                                            <div className="shipping-to-wrapper">
                                                <div className="shipping-to">
                                                    <span className="shipping-to-label"><i className="shipping-icon fas fa-truck"></i> Vận chuyển tới </span>
                                                    <select className="shipping-to-address">
                                                        <option value="">Huyện Ba Vì, Hà Nội</option>
                                                        <option value="">TX.Sơn Tây, Hà Nội</option>
                                                    </select>
                                                </div>
                                                <div className="shipping-fee">
                                                    <span className="shipping-fee-label"><i className="shipping-icon fas fa-dollar-sign"></i>Phí vận chuyển</span>
                                                    <select className="shipping-fee-price">
                                                        <option value="">15.000đ</option>
                                                        <option value="">12.000đ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <span className="quantity-label">Số lượng</span>
                                        <div className="quantity-buy">
                                            <button onClick={handleDecQty} className="quantity-num-dec">-</button>
                                            <span className="quantity-num">{qty}</span>
                                            <button onClick={handleIncQty} className="quantity-num-inc">+</button>
                                        </div>
                                        <span className="quantity-in-stock">{product.countInStock} Sản phẩm có sẵn</span>
                                    </div>
                                    {
                                        product.countInStock > 0 ? <button onClick={handleAddToCart} className="btn btn--primary add-to-cart"> <i className="fas fa-shopping-cart"></i>&nbsp; Thêm vào giỏ hàng</button>
                                            : <button disabled className="btn btn--primary add-to-cart out-of-stock "> <i className="fas fa-shopping-cart"></i>&nbsp; Hết hàng</button>
                                    }
                                    {
                                        product.countInStock > 0 ? <button className="btn btn--primary">Mua ngay</button>
                                            : ""
                                    }
                                </div>
                            </div >
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailScreen;