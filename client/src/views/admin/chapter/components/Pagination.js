import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

const Pagination = ({ onPageChange, pageCount }) => {
    return (
        <ReactPaginate
            className="root"
            pageRangeDisplayed={1}
            nextLabel=">"
            onPageChange={(event) => onPageChange(event.selected + 1)}
            pageCount={pageCount}
            previousLabel="<"
        />
    );
};

export default Pagination;
