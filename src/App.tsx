import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { lazy, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import { PrivateRoute } from './components/Navigation/PrivateRoute';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Psychologists = lazy(() => import('./pages/Psychologists/Psychologists'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

export const App: React.FC = () => {
  const [authUser, setAuthUset] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUset(user);
      } else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout authUser={authUser} />}>
        <Route index element={<Home />} />
        <Route path="psychologists" element={<Psychologists authUser={authUser} />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute authUser={authUser}>
              <FavoritesPage authUser={authUser} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
