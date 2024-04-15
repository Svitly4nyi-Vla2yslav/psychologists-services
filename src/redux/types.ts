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
   teachers: Teacher;
}
export interface Review {
  photo: string | undefined;
  reviewer_name: string;
  reviewer_rating: number;
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
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
  favorite: boolean;
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
  teacher: Teacher;
}

export interface AddFavoritesProps {
  userId: string | string[];
  teacher: Teacher;
}

export interface deleteFavoriteProps {
  userId: string | string[];
  teacherId: string;
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