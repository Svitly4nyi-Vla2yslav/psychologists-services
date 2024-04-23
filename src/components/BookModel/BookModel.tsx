import React, { useState } from 'react';
import {
  BookTrailContainer,
  BookTrialText,
  BookTrialTitle,
  FormTitle,
  SomeText,
  PsychologistBlock,
  PsychologistName,
  PsychologistNameBlock,
  TelTimeContainer,
} from './BookModel.styled';

import * as Yup from 'yup';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { PsychologistPhoto } from '../Card/Card.styled';
import {
  FormStyle,
  ErrMsg,
  FieldStyle,
  BtnSubmit,
} from '../Modal/Modal.styled';

import { BookTrialProps } from '../../redux/types';



export const BookTrialModal: React.FC<BookTrialProps> = ({
  psychologist,
  close,
}) => {
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [phoneEntered, setPhoneEntered] = useState(false);
  const BookLessonSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    time: Yup.string().required(),
    phoneNuber: Yup.number().min(8, 'Too Short!').required('Required'),
    comment: Yup.string(),
  });

  const handleSubmit = () => {
    toast.success('Сompleted successfully!');
    close();
  };

  return (
    <BookTrailContainer>
      <BookTrialTitle>Make an appointment with a psychologists</BookTrialTitle>
      <BookTrialText>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </BookTrialText>
      <PsychologistBlock>
        <PsychologistPhoto
          src={psychologist.avatar_url}
          loading="lazy"
          alt="avatar"
          width="44"
          height="44"
        />
        <PsychologistNameBlock>
          <SomeText>Your psychologists</SomeText>
          <PsychologistName>
            {psychologist.name} {psychologist.surname}
          </PsychologistName>
        </PsychologistNameBlock>
      </PsychologistBlock>
      <FormTitle></FormTitle>
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          phoneNuber: '',
          time: '00:00',
          comment: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={BookLessonSchema}
      >
        {({}) => (
          <FormStyle>
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
            <TelTimeContainer>
              <FieldStyle
                type="tel"
                name="phoneNuber"
                placeholder={phoneEntered ? '' : 'Phone number'}
                onFocus={() => setPhoneEntered(true)}
              />
              <ErrMsg name="phoneNuber" component="div" />
              <FieldStyle name="time" type="time" />
            </TelTimeContainer>
            <FieldStyle
              as="textarea"
              id="comment"
              type="textarea"
              name="comment"
              placeholder="Comment"
              style={{ height: '116px' }}
            />
            <ErrMsg name="comment" component="div" />
            <BtnSubmit type="submit">Send</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
    </BookTrailContainer>
  );
};
