import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

export const ImgContainer = styled.div`
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.orange};
  position: relative;
  border-radius: 20%;
  padding: 10px;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    background: #38cd3e;
    right: 13px;
    top: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    padding: 0;
  }
`;

export const PsychologistPhoto = styled.img`
  border-radius: 20%;
`;

export const ActiveDot = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;

// ----------------INFO--------------------------------------

export const InfoContainer = styled.div`
  width: 100%;

`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
margin-top: 20px;

  
@media screen and (min-width: 768px) {
  flex-direction: row;
}

  @media screen and (min-width: 1140px) {
  margin-top: 0;


}
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`;

export const DataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media screen and (min-width: 1140px) {
    gap: 16px;
  
}
`;

export const ElementsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DataItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  padding-right: 4px;
 
  
  @media screen and (min-width: 768px) {

    padding-right: 16px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  
  &:nth-child(4) {
    border-right: none;
    padding-right: 0;
  }
  
}
`;

export const Price = styled.span`
  color: #38cd3e;
`;

export const HeartBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  
  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  
}
`;

export const Heart = styled(FiHeart)`
  fill: none;
  width: 26px;
  height: 26px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
  &:focus {
    fill: #3470ff;
    color: #3470ff;
  }
`;

export const HeartDel = styled(FiHeart)`
  fill: ${({ theme }) => theme.primaryYellow};
  color: ${({ theme }) => theme.primaryYellow};
  width: 26px;
  height: 26px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
  &:focus {
    color: white;
    fill: none;
  }
`;

export const NameTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`;

export const ListInfo = styled.ul`
  margin-top: 32px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
`;

export const ItemInfo = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  border-radius: 24px;
padding: 8px 16px;
background: #f3f3f3;
// width: 100%;
height: 100%;
`;

export const ItemText = styled.span`
  color: #8a8a89;
`;

export const LangBlock = styled.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Block = styled.div`
  // display: flex;
`;

export const About = styled.p`
font-weight: 400;
font-size: 16px;

// line-height: 20px; 
line-height: 1.25;
color: rgba(25, 26, 21, 0.5);
`

export const BtnMore = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  background: transparent;
  margin-top: 16px;

  &:hover {
    scale: 1.1;
   color:  ${({ theme }) => theme.primaryYellow}
  }
`;

export const ExpText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

export const ReviewerImg = styled.img`
  border-radius: 50%;
`;

export const Reviewblock = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ReviewRating = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LevelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LevelItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;
  height: 100%;
   &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }
`;

export const RatingBlock = styled.div`
  display: flex;
  margin-top: 2px;
  gap: 8px;
`;

export const ReviewText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const BookBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  // line-height: 156%;
  border-radius: 30px;
 padding: 14px 32px;
  width: 227px;
height: 48px;
  color: ${({ theme }) => theme.orange};
  background: ${({ theme }) => theme.primaryYellow};
  margin-top: 32px;

   &:hover {
    color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.lightYellow};
  }
`;

export const Star = styled.img`
`;
export const Book = styled.img`
`;