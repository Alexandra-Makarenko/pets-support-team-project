
import { useSelector } from "react-redux";
import { selectVisiblePets } from "redux/selectors";
import { PetsListSection } from "./NoticesCategoryList.styled";

const NoticesCategoryList = () => {

    // const [filter, setFilter] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [pets, setPets] = useState([]);
    
  const pets = useSelector(selectVisiblePets);

  console.log(pets);
  return (
    <PetsListSection>
    <ul>
      {pets.map(pet => (
        <li key={pet.name}>
          {pet.name}
        </li>
      ))}
      </ul>
    </PetsListSection>
    );
};



export default NoticesCategoryList;