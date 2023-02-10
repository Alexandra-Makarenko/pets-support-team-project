import { useState } from 'react';
import { useRef } from 'react';

import {
  SearchInput,
  Form,
  SearchLogo,
  CloseLineLogo,
} from './SearchForm.styled';

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();

  const handleSearchChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

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
