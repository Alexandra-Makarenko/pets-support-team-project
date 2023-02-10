
import { useSelector,useDispatch } from "react-redux";
import { getPets,getCategoryFilter } from "redux/selectors";
import { PetsListSection,PetsList } from "./NoticesCategoryList.styled";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations"
import { useLocation } from "react-router-dom";
import { setStatusFilter } from "redux/filtersSlice";
import { NoticeCategoryItem } from "../NoticeCategoryItem/NoticeCategoryItem";


const NoticesCategoryList = () => {
  
  const dispatch = useDispatch();
  const pets = useSelector(getPets);
  const categoryFilter = useSelector(getCategoryFilter);
  const location = useLocation();  
  
  console.log(location.pathname);

  dispatch(setStatusFilter(location.pathname))

  let category = 'sell';

  if (categoryFilter === '/notices/lost-found') {
    category = 'lost-found'
  } else if (categoryFilter === '/notices/sell') {
    category = 'sell'
  } else if (categoryFilter === '/notices/in-good-hands') {
    category = 'in-good-hands'
  } else {
    console.log('no category')
  }
  

  useEffect(() => {
    dispatch(fetchTasks(category));
  }, [dispatch,category])

  
  return (
    <PetsListSection>
    <PetsList>
      {pets.map((pet,idx) => (
        <NoticeCategoryItem key={idx}  pet={pet}/>

      ))}
      </PetsList>
    </PetsListSection>
    );
};



export default NoticesCategoryList;