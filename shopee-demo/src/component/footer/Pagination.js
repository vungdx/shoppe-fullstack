import React from 'react';


function Pagination(props) {
    return (
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
    );
}

export default Pagination;