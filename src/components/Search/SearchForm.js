import { useRef } from 'react';

import {
  SearchInput,
  Form,
  SearchLogo,
  CloseLineLogo,
} from './SearchForm.styled';

export const SearchForm = ({ searchValue, setSearchValue }) => {


  const inputRef = useRef();

  const handleSearchChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  console.log(searchValue);

  return (
    <Form>
      {searchValue ? (
        <CloseLineLogo
          onClick={e => {
            inputRef.current.value = '';
            setSearchValue('');
          }}
        />
      ) : (
        <SearchLogo />
      )}

      <SearchInput
        type="text"
        name="searchNews"
        placeholder="Search"
        onChange={handleSearchChange}
        ref={inputRef}
      />
    </Form>
  );
};
