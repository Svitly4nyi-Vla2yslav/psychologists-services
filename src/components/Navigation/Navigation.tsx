import { NavigationProps } from '../../redux/types';
import { AuthNavIn } from './AuthNavIn';
import { AuthNavOut } from './AuthNavOut';

export const Navigation: React.FC<NavigationProps> = ({
  onClickLogin,
  onClickRegister,
  authUser,
}) => {
  return authUser ? (
    <AuthNavOut />
  ) : (
    <AuthNavIn onClickLogin={onClickLogin} onClickRegister={onClickRegister} />
  );
};
