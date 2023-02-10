import { NavSection, Link, Container } from "./NoticesCategoriesNav.styled";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";




export const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <NavSection>
      <Container>
        <li>
        <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        {!isLoggedIn && <li>
          <Link to="favorite-ads">favorite ads</Link>
        </li>
        }
        {!isLoggedIn && <li>
          <Link to="my-ads">my ads</Link>
        </li>
        }
      </Container>
    </NavSection>
  );
};