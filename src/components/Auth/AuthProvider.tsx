import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import toast from 'react-hot-toast';
import { BtnSubmitGoogle, BtnGoogleSvg } from '../Modal/Modal.styled';
import { AuthProviderProps } from '../../redux/types';
import GoogleSvg from '../../assets/icons/google.svg';

export const AuthProvider: React.FC<AuthProviderProps> = ({ close }) => {
  function handleSubmitwithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then(_userCredential => {
        close();
      })
      .catch(error => {
        const errorCode = error.code;

        if (errorCode === 'auth/popup-closed-by-user') {
          toast.error('Popup window was closed by the user');
        } else {
          toast.error(
            "Sorry, couldn't sign in with Google. Please try again later."
          );
        }
      });
  }

  return (
    <BtnSubmitGoogle onClick={handleSubmitwithGoogle}>
      <BtnGoogleSvg src={GoogleSvg} alt="Google" />
      Continue with Google
    </BtnSubmitGoogle>
  );
};
