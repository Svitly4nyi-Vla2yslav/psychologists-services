import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/psychologists/operations';
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from '../../redux/selectors';
import { LoadMoreBtn, TeachersContainer } from './Psychologists.styled';
import { fetchFavorites } from '../../redux/favorites/operations';
import { CardList } from '../../components/CardList/CardList';
import { MyLoader } from '../../components/Loader/Loader';
import { AppDispatch } from '../../redux/store';

interface TeachersProps{
  authUser: any;
}

const Teacher: React.FC<TeachersProps> = ({ authUser}) => {
  const dispatch = useDispatch<AppDispatch>();
  const psychologists = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachers());
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <TeachersContainer>
      {isLoading && !error && <MyLoader/>}
      <CardList authUser={authUser} psychologists={psychologists.slice(0, visibleTeachers)} />
      {psychologists.length > visibleTeachers && (
        <LoadMoreBtn onClick={loadMoreTeachers}>Load More</LoadMoreBtn>
      )}
    </TeachersContainer>
  );
};

export default Teacher;