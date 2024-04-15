import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps{
    children: ReactNode;
     authUser: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, authUser }) => {
    return authUser ? children : <Navigate to="/"></Navigate>;
  };