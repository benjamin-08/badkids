import style from "./Users.module.css";
import React from "react";

function Paginator({ totalAmount, itemsOnPage, onPageClick, currentPage }) {
    let pageCount = Math.ceil(totalAmount / itemsOnPage);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(
            <span
                onClick={() => {
                    onPageClick(i);
                }}
                className={
                    currentPage === i ? style.pageActive : style.pageNumber
                }
            >
                {i}
            </span>
        );
    }

    if (pageCount < 6) {
        return <div className={style.paginator}>{pages}</div>;
    } else if (currentPage < 4) {
        return (
            <div className={style.paginator}>
                {pages.slice(0, 4)} ... {pages[pageCount - 1]}
            </div>
        );
    } else if (currentPage > pageCount - 3) {
        return (
            <div className={style.paginator}>
                {pages[0]} ... {pages.slice(-4)}
            </div>
        );
    } else {
        return (
            <div className={style.paginator}>
                {pages[0]} ... {pages[currentPage - 2]}{pages[currentPage - 1]}
                {pages[currentPage]} ... {pages[pageCount - 1]}
            </div>
        );
    }
}

export default Paginator;
