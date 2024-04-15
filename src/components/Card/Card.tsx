import React, { useState } from 'react';
import {
  Block,
  Book,
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
  LangBlock,
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
import BookSvg from '../../assets/book-open.svg?url';
import StarSvg from '../../assets/star.svg?url';
import face from "../../../public/face.png"
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favorites/operations';
import toast from 'react-hot-toast';
import { Modal } from '../Modal/Modal';
import { BookTrialModal } from '../BookModel/BookModel';
import { Teacher } from '../../redux/types';
import { AppDispatch } from '../../redux/store';

export const Card: React.FC<{ teacher: Teacher; authUser: any }> = ({
  teacher,
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

  const handleBookTrialClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    toggleModal();
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleReadMoreClick = (teacherId: string) => {
    setExpandedTeacherId(prevId => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = (teacherId: string) =>
    expandedTeacherId === teacherId ? 'Hide more' : 'Read More';

  const isFavorite =
    favorites &&
    favorites.some(
      favorTeacher => favorTeacher && favorTeacher.id === teacher.id
    );

  const onSwitchFavorite = () => {
    if (authUser) {
      if (!isFavorite) {
        dispatch(addFavorite({ userId: authUser.uid, teacher }));
      } else {
        dispatch(
          deleteFavorite({ userId: authUser.uid, teacherId: teacher.id })
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
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="96"
          height="96"
        />
      </ImgContainer>
      <InfoContainer>
        <InfoHeader>
          <Text>Languages</Text>
          <DataList>
            <DataItem>
              <ElementsContainer>
                {' '}
                <Book src={BookSvg} alt="📖" /> Lessons online
              </ElementsContainer>
            </DataItem>
            <DataItem>Lessons done: {teacher.lessons_done}</DataItem>
            <DataItem>
              <ElementsContainer>
                {' '}
                <Star src={StarSvg} alt="⭐" /> Rating: {teacher.rating}
              </ElementsContainer>
            </DataItem>
            <DataItem>
              Price / 1 hour: <Price>{teacher.price_per_hour}$</Price>
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
          {teacher.name} {teacher.surname}{' '}
        </NameTitle>
        <ListInfo>
          <ItemInfo>
            <Block>
              <ItemText>Speaks: &nbsp;</ItemText>
              <LangBlock>
                {teacher.languages ? (
                  teacher.languages.map((language, index, array) => (
                    <React.Fragment key={language}>
                      <li>{language}</li>
                      {index < array.length - 1 && <span>, &nbsp;</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <li>No languages available</li>
                )}
              </LangBlock>
            </Block>
          </ItemInfo>
          <ItemInfo>
            <ItemText>Lesson info:</ItemText> {teacher.lesson_info}
          </ItemInfo>
          <ItemInfo>
            <ItemText>Conditions:</ItemText> {teacher.conditions}
          </ItemInfo>
        </ListInfo>
        {expandedTeacherId === teacher.id && (
          <div>
            <ExpText>{teacher.experience}</ExpText>
            <ReviewList>
              {teacher.reviews ? (
                teacher.reviews.map((review, index) => (
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
        <BtnMore onClick={() => handleReadMoreClick(teacher.id)}>
          {' '}
          {getButtonText(teacher.id)}
        </BtnMore>
        <LevelList>
          {teacher.levels ? (
            teacher.levels.map((level, index) => (
              <LevelItem key={index}>
                <p>{level}</p>
              </LevelItem>
            ))
          ) : (
            <li>No levels</li>
          )}
        </LevelList>
        {expandedTeacherId === teacher.id && (
          <BookBtn type="button" onClick={() => handleBookTrialClick(teacher)}>
            Book trial lesson
          </BookBtn>
        )}
      </InfoContainer>
      {isOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};
