import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPsychologists } from '../../redux/psychologists/operations';
import {
  selectError,
  selectIsLoading,
  selectPsychologists,
} from '../../redux/selectors';
import { LoadMoreBtn, PsychologistsContainer } from './Psychologists.styled';
import { fetchFavorites } from '../../redux/favorites/operations';
import { CardList } from '../../components/CardList/CardList';
import { MyLoader } from '../../components/Loader/Loader';
import { AppDispatch } from '../../redux/store';

interface PsychologistsProps{
  authUser: any;
}

const Psychologist: React.FC<PsychologistsProps> = ({ authUser}) => {
  const dispatch = useDispatch<AppDispatch>();
  const psychologists = useSelector(selectPsychologists);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visiblePsychologists, setVisiblePsychologists] = useState(3);

  const loadMorePsychologists = () => {
    setVisiblePsychologists((prevVisiblePsychologists) => prevVisiblePsychologists + 3);
  };

  useEffect(() => {
    dispatch(fetchPsychologists());
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <PsychologistsContainer>
      {isLoading && !error && <MyLoader/>}
      {/* <Filter/> */}
      <CardList authUser={authUser} psychologists={psychologists.slice(0, visiblePsychologists)} />
      {psychologists.length > visiblePsychologists && (
        <LoadMoreBtn onClick={loadMorePsychologists}>Load More</LoadMoreBtn>
      )}
    </PsychologistsContainer>
  );
};

export default Psychologist;