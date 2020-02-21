import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup className="mb-4 w-50">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search:</InputGroupText>
        </InputGroupAddon>
        <Input onChange={props.onChange} value={props.value} placeholder="Luke Skywalker" />
      </InputGroup>
    </div>
  )
}

export default SearchBar;
