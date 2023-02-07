import { useSelector, useDispatch } from "react-redux";
import { categoryFilters } from "redux/constants";
import { getCategoryFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";
import { NavSection, Link, Container} from "./NoticesCategoriesNav.styled";

export const NoticesCategoriesNav = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getCategoryFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <NavSection>
      <Container>
      <Link
        to="sell"
        selected={filter === categoryFilters.sell}
        onClick={() => handleFilterChange(categoryFilters.sell)}
      >
        sell
      </Link>
      <Link
        to="lost-found"
        selected={filter === categoryFilters.lostFound}
        onClick={() => handleFilterChange(categoryFilters.lostFound)}
      >
        lost/found
      </Link>
      <Link
        to="in-good-hands"
        selected={filter === categoryFilters.inGoodHands}
        onClick={() => handleFilterChange(categoryFilters.inGoodHands)}
      >
        in good hands
      </Link>
      </Container>
    </NavSection>
  );
};