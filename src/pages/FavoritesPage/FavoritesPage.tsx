import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { FavoritesContainer, Text } from './FavoritesPage.styled';
import { CardList } from '../../components/CardList/CardList';
import { MyLoader } from '../../components/Loader/Loader';
import { fetchFavorites } from '../../redux/favorites/operations';
import { selectFavorites, selectIsLoadingFav, selectErrorFav } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';
import { ImageContainer } from '../HomePage/HomePage.styled';
// import GirlSvg from '../../assets/girl.svg';
// import MacYellSvg from '../../assets/iMac-yellow.svg';

interface FavoriteProps{
  authUser: any;
}

const FavoritesPage: React.FC <FavoriteProps>= ({authUser}) => {

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);
const isLoadingFav = useSelector(selectIsLoadingFav);
const errorFav = useSelector(selectErrorFav);

  useEffect(() => {
    if (authUser && authUser.uid) {
    dispatch(fetchFavorites(authUser.uid));
  }
}, [dispatch, authUser]);

  return (
    <FavoritesContainer>
          {isLoadingFav && !errorFav && <MyLoader/>}
    {favorites.length > 0 ? (
        <CardList psychologists={favorites} authUser={authUser} />
      ) : (
        <><ImageContainer>
            {/* <ImgGirlSvg src={GirlSvg} alt="Girl" />
            <ImgMacYellSvg src={MacYellSvg} alt="LapTop" /> */}
          </ImageContainer><Text>Favorite psychologists haven't been selected yet 😒</Text></>
      )}
    </FavoritesContainer>
  );
};

export default FavoritesPage;
