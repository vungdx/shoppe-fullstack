import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from '../footer/Pagination';
import { listProducts } from '../../actions/productActions';

import * as ReactBootstrap from "react-bootstrap";

function HomeProducts(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [])

    const showRatingStar = (rating) => {
        let result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fas fa-star gold-star" />)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(< i key={i + j} className="fas fa-star" />)
        }
        return result;
    }
    return (
        loading ? <ReactBootstrap.Spinner animation="border" />
            : error ? <div>{error}</div>
                :
                <div className="home-product">
                    <div className="grid__row">
                        {
                            products.map((product, index) =>
                                <div key={index} className="grid__column-2-4">
                                    <Link to={"/products/" + product._id} className="home-product-item">
                                        <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }}>
                                        </div>
                                        <h4 className="home-product-item__name">{product.name}</h4>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old">${product.oldPrice}</span>
                                            <span className="home-product-item__price-current">${product.newPrice}</span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <span className="home-product-item__like ">
                                                <i className="like-icon-initial far fa-heart" />
                                                <i className="like-icon-filled fas fa-heart" />
                                            </span>
                                            <div className="home-product-item__rating">
                                                {showRatingStar(product.rating)}
                                            </div>
                                            <div className="home-product-item__sold">{product.numProductSold} đã bán</div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            <span className="home-product-item__brand">{product.brand}</span>
                                            <span className="home-product-item__origin-nation">{product.originNation}</span>
                                        </div>
                                        <div className="home-product-item__favourite">
                                            <i className="thei fas fa-check" />
                                            <span>Yêu thích</span>
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-percent">{100 - Math.ceil(product.newPrice / product.oldPrice * 100)}%</div>
                                            <div className="home-product-item__sale-off-label">GIẢM</div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    {/* Pagination */}
                    <Pagination />
                </div>
    );
}

export default HomeProducts;