import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous onClick={props.onClick} value={props.value.previous}/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next onClick={props.onClick} value={props.value.next}/>
      </PaginationItem>
    </Pagination>
  );
}

export default Example;