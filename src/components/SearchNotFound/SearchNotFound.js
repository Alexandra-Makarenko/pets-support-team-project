import { Wrapper, Title, SearchIcon, Text } from './SearchNotFound.styled';
export const SearchNotFound = ({ searchValue }) => {
  return (
    <Wrapper>
      <Title>{`No results found for: "${searchValue}"`}</Title>
      <Text>Please try again</Text>
      <SearchIcon />
    </Wrapper>
  );
};
