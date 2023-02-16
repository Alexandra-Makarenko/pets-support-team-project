import { LoadMoreButton } from './LoadMore.styled';

export function LoadMore({ onLoadMore, ButtonText }) {
  return (
    <LoadMoreButton className="Button" type="button" onClick={onLoadMore}>
      {ButtonText}
    </LoadMoreButton>
  );
}
