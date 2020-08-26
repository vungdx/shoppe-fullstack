import React from 'react';

function HomeFilter(props) {
    return (
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
    );
}

export default HomeFilter;