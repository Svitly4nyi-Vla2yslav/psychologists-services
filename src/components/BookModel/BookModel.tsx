import React, { useState } from 'react';
import {
  BookTrailContainer,
  BookTrialText,
  BookTrialTitle,
  FormTitle,
  RadioBlock,
  RadioBtnField,
  RadioBtnLabel,
  SomeText,
  TeacherBlock,
  TeacherName,
  TeacherNameBlock,
} from './BookModel.styled';

import * as Yup from 'yup';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { TeacherPhoto } from '../Card/Card.styled';
import {
  FormStyle,
  ErrMsg,
  FieldStyle,
  BtnSubmit,
} from '../Modal/Modal.styled';

import { BookTrialProps } from '../../redux/types';

export const BookTrialModal: React.FC<BookTrialProps> = ({
  teacher,
  close,
}) => {
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [phoneEntered, setPhoneEntered] = useState(false);
  const BookLessonSchema = Yup.object().shape({
    picked: Yup.string().required(
      'Please select a reason for learning English'
    ),
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNuber: Yup.number().min(8, 'Too Short!').required('Required'),
  });

  const handleSubmit = () => {
    toast.success('Сompleted successfully!');
    close();
  };

  return (
    <BookTrailContainer>
      <BookTrialTitle>Book trial lesson</BookTrialTitle>
      <BookTrialText>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </BookTrialText>
      <TeacherBlock>
        <TeacherPhoto
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="44"
          height="44"
        />
        <TeacherNameBlock>
          <SomeText>Your teacher</SomeText>
          <TeacherName>
            {teacher.name} {teacher.surname}
          </TeacherName>
        </TeacherNameBlock>
      </TeacherBlock>
      <FormTitle>What is your main reason for learning English?</FormTitle>
      <Formik
        initialValues={{
          picked: '',
          fullname: '',
          email: '',
          phoneNuber: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={BookLessonSchema}
      >
        {({}) => (
          <FormStyle>
            <RadioBlock role="group" aria-labelledby="my-radio-group">
              <RadioBtnLabel>
                <RadioBtnField
                  type="radio"
                  name="picked"
                  value="Career and business"
                />
                Career and business
              </RadioBtnLabel>
              <RadioBtnLabel>
                <RadioBtnField
                  type="radio"
                  name="picked"
                  value="Lesson for kids"
                />
                Lesson for kids
              </RadioBtnLabel>
              <RadioBtnLabel>
                <RadioBtnField
                  type="radio"
                  name="picked"
                  value="Living abroadwo"
                />
                Living abroad
              </RadioBtnLabel>
              <RadioBtnLabel>
                <RadioBtnField
                  type="radio"
                  name="picked"
                  value="Exams and coursework"
                />
                Exams and coursework
              </RadioBtnLabel>
              <RadioBtnLabel>
                <RadioBtnField
                  type="radio"
                  name="picked"
                  value="Culture, travel or hobby"
                />
                Culture, travel or hobby
              </RadioBtnLabel>
              <ErrMsg name="picked" component="div" />
            </RadioBlock>
            <FieldStyle
              name="fullname"
              placeholder={nameEntered ? '' : 'Full Name'}
              onFocus={() => setNameEntered(true)}
            />
            <ErrMsg name="fullname" component="div" />
            <FieldStyle
              type="email"
              name="email"
              placeholder={emailEntered ? '' : 'Email'}
              onFocus={() => setEmailEntered(true)}
            />
            <ErrMsg name="email" component="div" />
            <FieldStyle
              type="tel"
              name="phoneNuber"
              placeholder={phoneEntered ? '' : 'Phone number'}
              onFocus={() => setPhoneEntered(true)}
            />
            <ErrMsg name="phoneNuber" component="div" />
            <BtnSubmit type="submit">Book</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
    </BookTrailContainer>
  );
};
