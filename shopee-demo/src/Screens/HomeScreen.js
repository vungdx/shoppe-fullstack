import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
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
    loading ? <div>Loading...</div>
      : error ? <div>{error}</div>
        :
        <div className="grid__row padding-top">
          <div className="grid__column-2">
            <nav className="category">
              <h3 className="category__heading">
                <i className="category__heading-icon fas fa-list" />
              Danh mục
          </h3>
              <ul className="category-list">
                <li className="category-item active">
                  <a className="category-item__link">Điện thoại</a>
                </li>
                <li className="category-item">
                  <a className="category-item__link">Trang điểm mũi</a>
                </li>
                <li className="category-item">
                  <a className="category-item__link">Trang điểm miệng</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid__column-10">
            <div className="home-filter">
              <span className="home-filter__label">Sắp xếp theo</span>
              <button className="home-filter-btn btn">Phổ biến</button>
              <button className="home-filter-btn btn btn--primary">Mới nhất</button>
              <button className="home-filter-btn btn">Bán chạy</button>
              <div className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input-icon fas fa-angle-down" />
              </div>
              <div className="home-filter__page">
                <span className="home-filter__page-num">
                  <span className="home-filter__page-num-current">1</span>/14
                </span>
                <div className="home-filter__page-control">
                  <a className="home-filter__page-btn disabled">
                    <i className="home-filter__page-icon fas fa-angle-left" />
                  </a>
                  <a className="home-filter__page-btn">
                    <i className="home-filter__page-icon fas fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="home-product">
              <div className="grid__row">
                {
                  products.map(product =>
                    <div key={product.id} className="grid__column-2-4">
                      <Link to={"/products/" + product.id} className="home-product-item">
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
              <ul className="pagination margin-pagination">
                <li className="pagination-item">
                  <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left" />
                  </a>
                </li>
                <li className="pagination-item actived-page">
                  <a className="pagination-item__link">1</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">2</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">3</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">4</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link cursor_default">...</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">14</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  );
}

export default HomeScreen;
