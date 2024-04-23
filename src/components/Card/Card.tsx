import React, { useState } from 'react';
import {
  About,
  Block,
  BookBtn,
  BtnMore,
  DataItem,
  DataList,
  ElementsContainer,
  ExpText,
  Heart,
  HeartBtn,
  HeartDel,
  ImgContainer,
  InfoContainer,
  InfoHeader,
  ItemInfo,
  ItemText,
  LevelItem,
  LevelList,
  ListInfo,
  NameTitle,
  Price,
  RatingBlock,
  ReviewList,
  ReviewRating,
  ReviewText,
  Reviewblock,
  ReviewerImg,
  Star,
  PsychologistPhoto,
  Text,
} from './Card.styled';
// import BookSvg from '../../assets/icons/book-open.svg?url';
import StarSvg from '../../assets/icons/star.svg?url';
import face from "../../../public/face.png"
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favorites/operations';
import toast from 'react-hot-toast';
import { Modal } from '../Modal/Modal';
// import { BookTrialModal } from '../BookModel/ModalForm';
import { Psychologist } from '../../redux/types';
import { AppDispatch } from '../../redux/store';
import { BookTrialModal } from '../BookModel/BookModel';

export const Card: React.FC<{ psychologist: Psychologist; authUser: any }> = ({
  psychologist,
  authUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedPsychologistId, setExpandedPsychologistId] = useState<string | null>(
    null
  );
  const [selectedPsychologist, setSelectedPsychologist] = useState<Psychologist | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleBookTrialClick = (psychologist: Psychologist) => {
    setSelectedPsychologist(psychologist);
    toggleModal();
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleReadMoreClick = (psychologistId: string) => {
    setExpandedPsychologistId(prevId => (prevId === psychologistId ? null : psychologistId));
  };

  const getButtonText = (psychologistId: string) =>
    expandedPsychologistId === psychologistId ? 'Hide more' : 'Read More';

  const isFavorite =
    favorites &&
    favorites.some(
      favorPsychologist => favorPsychologist && favorPsychologist.id === psychologist.id
    );

  const onSwitchFavorite = () => {
    if (authUser) {
      if (!isFavorite) {
        dispatch(addFavorite({ userId: authUser.uid, psychologist }));
      } else {
        dispatch(
          deleteFavorite({ userId: authUser.uid, psychologistId: psychologist.id })
        );
      }
    } else {
      toast('You need to log in at first!', {
        icon: '❗',
      });
    }
  };

  return (
    <>
      <ImgContainer>
        <PsychologistPhoto
          src={psychologist.avatar_url}
          loading="lazy"
          alt="avatar"
          width="96"
          height="96"
        />
      </ImgContainer>
      <InfoContainer>
        <InfoHeader>
          <Text>Psychologist</Text>
          <DataList>
            <DataItem>
              
            </DataItem>
            <DataItem>
              <ElementsContainer>
                {' '}
                <Star src={StarSvg} alt="⭐" /> Rating: {psychologist.rating}
              </ElementsContainer>
            </DataItem>
            <DataItem>
              Price / 1 hour: <Price>{psychologist.price_per_hour}$</Price>
            </DataItem>
            <li>
              {' '}
              <HeartBtn type="button" onClick={onSwitchFavorite}>
                {isFavorite && authUser ? <HeartDel /> : <Heart />}
              </HeartBtn>
            </li>
          </DataList>
        </InfoHeader>

        <NameTitle>
          {' '}
          {psychologist.name} {psychologist.surname}{' '}
        </NameTitle>
        <ListInfo>
          <ItemInfo>
            <Block>
              <ItemText>Experience:  </ItemText>{psychologist.experience}
             
            </Block>
          </ItemInfo>
          <ItemInfo>
            <ItemText>License:</ItemText> {psychologist.license}
          </ItemInfo>
          <ItemInfo>
            <ItemText>Specialisation:</ItemText> {psychologist.specialization}
          </ItemInfo>
          <ItemInfo>
            <ItemText>Initial_consultation:</ItemText> {psychologist.initial_consultation}
          </ItemInfo>
          <About>{psychologist.about} </About>
        </ListInfo>
        {expandedPsychologistId === psychologist.id && (
          <div>
            <ExpText>{psychologist.experience}</ExpText>
            <ReviewList>
              {psychologist.reviews ? (
                psychologist.reviews.map((review, index) => (
                  <li key={index}>
                    <Reviewblock>
                      <ReviewerImg
                        src={face}
                        alt="avatar"
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                      <ReviewRating>
                        <p>{review.reviewer}</p>
                        <RatingBlock>
                          <Star />
                          <p> {review.rating} ⭐</p>
                        </RatingBlock>
                      </ReviewRating>
                    </Reviewblock>
                    <ReviewText>{review.comment}</ReviewText>
                  </li>
                ))
              ) : (
                <li>There are no reviews yet</li>
              )}
            </ReviewList>
          </div>
        )}
        <BtnMore onClick={() => handleReadMoreClick(psychologist.id)}>
          {' '}
          {getButtonText(psychologist.id)}
        </BtnMore>
        <LevelList>
          {psychologist.levels ? (
            psychologist.levels.map((level, index) => (
              <LevelItem key={index}>
                <p>{level}</p>
              </LevelItem>
            ))
          ) : (
            <li></li>
          )}
        </LevelList>
        {expandedPsychologistId === psychologist.id && (
          <BookBtn type="button" onClick={() => handleBookTrialClick(psychologist)}>
            Make an appointment
          </BookBtn>
        )}
      </InfoContainer>
      {isOpen && selectedPsychologist && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal psychologist={selectedPsychologist} close={close} />
        </Modal>
      )}
    </>
  );
};
