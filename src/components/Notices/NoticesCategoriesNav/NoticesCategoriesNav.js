import { Link } from "react-router-dom";

export const NoticesCategoriesNav = () => {
  return (
    <section>
       <ul>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost/found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        <li>
          <Link to="favorite-ads">favorite ads</Link>
        </li>
        <li>
          <Link to="my-ads">my ads</Link>
        </li>
      </ul>
      
    </section>
  );
};