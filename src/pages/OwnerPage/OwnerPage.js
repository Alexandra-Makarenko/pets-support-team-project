import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { OwnerInfo } from 'components/Owner/OwnerInfo/OwnerInfo';
import { OwnerNoticeList } from 'components/Owner/OwnerNoticeInfo/OwnerNoticeList';
import OwnerNoticeSection from 'components/Owner/OwnerNoticeSection/OwnerNoticeSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOwnerData } from 'redux/owner/ownerInfoOperations';
import { getOwnerLoading } from 'redux/owner/selectors';

const OwnerPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchOwnerData(id));
  }, [dispatch, id]);
  const isInfoLoading = useSelector(getOwnerLoading);
  return (
    <Container>
      {isInfoLoading ? <Loader /> : <OwnerInfo id={id} />}
      {isInfoLoading ? null : <OwnerNoticeSection />}
      {isInfoLoading ? <Loader /> : <OwnerNoticeList id={id} />}
    </Container>
  );
};
export default OwnerPage;
