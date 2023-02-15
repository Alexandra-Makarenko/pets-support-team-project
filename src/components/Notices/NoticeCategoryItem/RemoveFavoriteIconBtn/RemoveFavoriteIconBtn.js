import { ReactComponent as Favorite } from './removeFavoriteIcon.svg';
import { Button } from './RemoveFavoriteIconBtn.styled';

export const RemoveFavoriteIconBtn = ({ removeFromFavorite }) => {
  return (
    <Button type="button" onClick={removeFromFavorite}>
      <span>
        <Favorite />
      </span>
    </Button>
  );
};
