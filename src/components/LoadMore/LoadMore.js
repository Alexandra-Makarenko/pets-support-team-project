import { LoadMoreButton } from './LoadMore.styled';

export function LoadMore({ onLoadMore, ButtonText }) {
  return (
    <LoadMoreButton type="button" onClick={onLoadMore}>
      {ButtonText}
    </LoadMoreButton>
  );
}
