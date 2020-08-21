import React from 'react';
import data from '../data';

function HomeScreen(props) {
    return (
        <div className="HomeScreen">
            <div className="grid__row">
              {
              data.products.map(product=>
                <div className="grid__column-2-4">
                    <a className="home-product-item" href=".">
                    <div className="home-product-item__img" style={{backgroundImage: `url(${product.image})`}}>
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
                        {product.rating}
                        <i className="fas fa-star gold-star" />
                        <i className="fas fa-star gold-star" />
                        <i className="fas fa-star gold-star" />
                        <i className="fas fa-star gold-star" />
                        <i className="fas fa-star" />
                    </div>
                    <div className="home-product-item__sold">88 đã bán</div>
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
                    <div className="home-product-item__sale-off-percent">43%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                    </div>
                    </a>
                </div>
              )
            }
              </div>
            </div>
    );
}

export default HomeScreen;