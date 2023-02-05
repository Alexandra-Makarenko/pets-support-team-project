import { getTrendingFilms } from "api";
import { useState, useEffect,useCallback  } from 'react';
import { useLocation} from "react-router-dom";


const NoticesCategoryList = () => {

    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [film, setFilm] = useState([]);
    
 
    const categoryFilter = useLocation().pathname;
   
  
  const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const film = await getTrendingFilms();
    setFilm(film);
  } catch {
    setError('Failed to load film :(');
  } finally {
    setIsLoading(false);   
  }
}, []);
  
  useEffect(() => {
      console.log(categoryFilter);
      setFilter(categoryFilter);
      console.log('state', filter);
       fetchFilms();
    }, [categoryFilter, filter,fetchFilms]);

  return (
    <div>
      {!isLoading ?  (!error ?  <div>
      {film.map((film) => (
            <div key={film.id}
        > <li>{film.name}</li></div>         
                ))}
    </div>:<div>{error}</div>) :<div>Is loading</div>}
      </div>
    );
};

export default NoticesCategoryList;
