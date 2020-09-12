import React from 'react';


function Category(props) {
    return (
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
                    <a className="category-item__link">Máy tính</a>
                </li>
                <li className="category-item">
                    <a className="category-item__link">Thiết bị gia dụng</a>
                </li>
            </ul>
        </nav>
    );
}

export default Category;