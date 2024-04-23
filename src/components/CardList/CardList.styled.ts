import styled from "styled-components";

export const ListWrapper = styled.ul`
 display: flex;
 mask-type: 28px;
 flex-direction: column;
 justify-content: center;
 align-items: center;
//   min-width: 320px;
//  max-width: 1184px; 
 gap: 48px;
 
 @media screen and (min-width: 768px) {
   margin-top: 53px;

 }
`;

export const CardItem = styled.li`
   width: 95%; 
//  width: 280px;
  padding: 15px;
  display: flex;
flex-wrap: wrap;
border-radius: 24px;
background: #fff;


@media screen and (min-width: 768px) {
  gap: 48px;
width: 95%;
}


@media screen and (min-width: 1400px) {
  align-items: flex-start;
  margin-bottom: 53px;
  flex-wrap: nowrap;
  width: 1184px;
  padding: 24px;
}
`;