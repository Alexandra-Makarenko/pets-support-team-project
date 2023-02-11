import { useSelector, useDispatch } from 'react-redux';
import { getNotices, getCategoryFilter } from 'redux/notices/selectors';
import { PetsListSection, PetsList } from './NoticesCategoryList.styled';
import { useEffect } from 'react';
import { fetchNotices } from 'redux/notices/operations';
import { useLocation } from 'react-router-dom';
import { setStatusFilter } from 'redux/notices/filtersSlice';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { useState } from 'react';
import { MainModal } from 'components/MainModal/MainModal';
import { ModalNotice } from 'components/Modals/ModalNotice/ModalNotice';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(getNotices);
  const categoryFilter = useSelector(getCategoryFilter);
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(location.pathname);

  dispatch(setStatusFilter(location.pathname));

  let category = 'sell';

  if (categoryFilter === '/notices/lost-found') {
    category = 'lost-found';
  } else if (categoryFilter === '/notices/sell') {
    category = 'sell';
  } else if (categoryFilter === '/notices/in-good-hands') {
    category = 'in-good-hands';
  } else {
    console.log('no category');
  }

  useEffect(() => {
    dispatch(fetchNotices(category));
  }, [dispatch, category]);

  return (
    <>
      <PetsListSection>
        <PetsList>
          {pets.map((pet, idx) => (
            <NoticeCategoryItem key={idx} pet={pet} openModal={toggleModal} />
          ))}
        </PetsList>
      </PetsListSection>
      {showModal && (
        <MainModal onClose={toggleModal}>
          <ModalNotice />
        </MainModal>
      )}
    </>
  );
};

export default NoticesCategoryList;
