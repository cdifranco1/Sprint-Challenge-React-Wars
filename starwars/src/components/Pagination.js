import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const CustomPagination = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous onClick={props.onClick} value="previous"/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next onClick={props.onClick} value="next"/>
      </PaginationItem>
    </Pagination>
  );
}

export default CustomPagination;