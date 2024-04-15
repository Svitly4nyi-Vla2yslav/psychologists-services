import React from 'react';
import { ListWrapper, CardItem } from './CardList.styled';
import { CardListProps } from '../../redux/types';
import { Card } from '../Card/Card';

export const CardList: React.FC<CardListProps> = ({ authUser, teachers }) => {
  return (
    <ListWrapper>
      {teachers &&
        Array.isArray(teachers) &&
        teachers.map(teacher => (
          <CardItem key={teacher?.id}>
            {teacher && <Card authUser={authUser} teacher={teacher} />}
          </CardItem>
        ))}
    </ListWrapper>
  );
};
