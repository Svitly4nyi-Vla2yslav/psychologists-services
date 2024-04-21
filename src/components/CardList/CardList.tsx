import React from 'react';
import { ListWrapper, CardItem } from './CardList.styled';
import { CardListProps } from '../../redux/types';
import { Card } from '../Card/Card';

export const CardList: React.FC<CardListProps> = ({ authUser, psychologists }) => {
  return (
    <ListWrapper>
      {psychologists &&
        Array.isArray(psychologists) &&
        psychologists.map(psychologist => (
          <CardItem key={psychologist?.id}>
            {psychologist && <Card authUser={authUser} psychologist={psychologist} />}
          </CardItem>
        ))}
    </ListWrapper>
  );
};
