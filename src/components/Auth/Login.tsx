import { Formik } from 'formik';
import {
  BtnSubmit,
  ErrMsg,
  FieldStyle,
  FormStyle,
  Text,
  Title,
} from '../Modal/Modal.styled';
import { useState } from 'react';
import * as Yup from 'yup';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth} from '../../firebase';
import toast from 'react-hot-toast';
import { AuthProvider } from './AuthProvider';
import { AuthProviderProps } from '../../redux/types';

export const Login: React.FC<AuthProviderProps> = ({close}) => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = values => {
    const { email, password } = values;
  
    signInWithEmailAndPassword(auth, email, password)
      .then(_userCredential => {
        close();
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          toast.error("User not found. Please check your email or sign up.");
        } else if (errorCode === 'auth/wrong-password') {
          toast.error("Invalid password. Please try again.");
        } else {
          toast.error("Sorry, couldn't log in. Please try again later.");
        }
      });
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });

  return (
    <div>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an psychologist.
      </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({  }) => (
          <FormStyle>
            <FieldStyle
              type="email"
              name="email"
              placeholder={emailEntered ? '' : 'Email'}
              onFocus={() => setEmailEntered(true)}
            />
            <ErrMsg name="email" component="div" />
            <FieldStyle
              type="password"
              name="password"
              placeholder={passwordEntered ? '' : 'Password'}
              onFocus={() => setPasswordEntered(true)}
            />
            <ErrMsg name="password" component="div" />
            <BtnSubmit type="submit">Log in</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
      <AuthProvider close={close}/>
    </div>
  );
};