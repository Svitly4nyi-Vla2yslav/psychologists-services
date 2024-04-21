import React, { useState } from 'react';
import {
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
  TeacherPhoto,
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
import { BookTrialModal } from '../BookModel/BookModel';
import { Teacher } from '../../redux/types';
import { AppDispatch } from '../../redux/store';

export const Card: React.FC<{ psychologist: Teacher; authUser: any }> = ({
  psychologist,
  authUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedTeacherId, setExpandedTeacherId] = useState<string | null>(
    null
  );
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleBookTrialClick = (psychologist: Teacher) => {
    setSelectedTeacher(psychologist);
    toggleModal();
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleReadMoreClick = (psychologistId: string) => {
    setExpandedTeacherId(prevId => (prevId === psychologistId ? null : psychologistId));
  };

  const getButtonText = (psychologistId: string) =>
    expandedTeacherId === psychologistId ? 'Hide more' : 'Read More';

  const isFavorite =
    favorites &&
    favorites.some(
      favorTeacher => favorTeacher && favorTeacher.id === psychologist.id
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
        <TeacherPhoto
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
              <ItemText>Experience: {psychologist.experience} </ItemText>
              {/* <LangBlock>
                {psychologist.languages ? (
                  psychologist.languages.map((language, index, array) => (
                    <React.Fragment key={language}>
                      <li>{language}</li>
                      {index < array.length - 1 && <span>, &nbsp;</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <li>No languages available</li>
                )}
              </LangBlock> */}
            </Block>
          </ItemInfo>
          <ItemInfo>
            <ItemText>Lesson info:</ItemText> {psychologist.lesson_info}
          </ItemInfo>
          <ItemInfo>
            <ItemText>Conditions:</ItemText> {psychologist.conditions}
          </ItemInfo>
        </ListInfo>
        {expandedTeacherId === psychologist.id && (
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
                        <p>{review.reviewer_name}</p>
                        <RatingBlock>
                          <Star />
                          <p> {review.reviewer_rating} ⭐</p>
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
            <li>No levels</li>
          )}
        </LevelList>
        {expandedTeacherId === psychologist.id && (
          <BookBtn type="button" onClick={() => handleBookTrialClick(psychologist)}>
            Book trial lesson
          </BookBtn>
        )}
      </InfoContainer>
      {isOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal psychologist={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};
