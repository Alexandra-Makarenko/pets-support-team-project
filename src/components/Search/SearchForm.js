import { useRef } from 'react';

import {
  SearchInput,
  Form,
  SearchLogo,
  CloseLineLogo,
} from './SearchForm.styled';

export const SearchForm = ({ searchValue, setSearchValue, mbtn }) => {
  const inputRef = useRef();

  const handleSearchChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  console.log(searchValue);

  return (
    <Form mbtn={mbtn}>
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
        name="search"
        placeholder="Search"
        onChange={handleSearchChange}
        ref={inputRef}
      />
    </Form>
  );
};
