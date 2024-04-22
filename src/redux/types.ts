import { ReactNode } from "react";

export interface RegisterParamsApi {
  name: string;
  email: string;
  password: string;
  close: () => void;
}
export interface LoginParamsApi {
  email: string;
  password: string;
}

export interface UserData {
  name: string | null;
  email: string | null;
}

export interface CardListProps{
  authUser: () => void;
   psychologists: Teacher;
}
export interface Review {
  photo: string | undefined;
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Teacher {
  id?: string | any;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  avatar_url: string;
  conditions: string[];
  experience: string;
  favorite: boolean;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export interface InitialState {
  items: Teacher[];
  isLoading: boolean;
  error: string | null;
};
export interface BookTrialProps {
  name?: string;
  surname?: string;
  avatarUrl?: string;
  id?: string;
  close: () => void;
  psychologist: Teacher;
}

export interface AddFavoritesProps {
  userId: string | string[];
  psychologist: Teacher;
}

export interface deleteFavoriteProps {
  userId: string | string[];
  psychologistId: string;
}
export interface AuthProviderProps {
  close: () => void;
}

export interface NavigationProps {
  onClickLogin: () => void;
  onClickRegister: () => void;
  authUser: any;
}
export interface LayoutProps {
  authUser: any | undefined | null;
}

export interface ModalProps {
  children: ReactNode;
  toggleModal: () => void;
}

export interface AuthNavInProps {
  onClickLogin: () => void;
  onClickRegister: () => void;
}