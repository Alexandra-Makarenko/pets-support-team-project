import { ReactComponent as Favorite } from './removeFavoriteIcon.svg';
import { Button } from './RemoveFavoriteIconBtn.styled';

export const RemoveFavoriteIconBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <span>
        <Favorite />
      </span>
    </Button>
  );
};
