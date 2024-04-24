import styled from 'styled-components';
// import rectangleYellow3 from '../../assets/rectangle-yellow3.png';
// import rectangleYellow from '../../assets/rectangle-yellow.png';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
 

//  
//   width: 100%;
// }
`;

export const InfoContainer = styled.div`
  margin-top: 78px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 126px;
  justify-content: center;
  @media screen and (max-width: 867px) {
    padding-bottom: 80px;

  }
`;

// ----------------MAIN TEXT------------------
export const StartContainer = styled.div`
  // border-radius: 30px;
  // background: #f8f8f8;
  width: 100%;
  padding-left: 5px;
  max-width: 320px;
  padding-right: 5px;
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    /* width: 330px; */
  }

  @media screen and (min-width: 1400px) {
    min-width: 330px;
    max-width: 595px;
    height: 530px;
    display: block;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-size: 28px;
  margin-top: 50px;
  text-align: center;

  @media screen and (min-width: 1400px) {
    max-width: 548px;
    margin-top: 105px;
    font-size: 48px;
    text-align: start;
    font-weight: 600;
font-size: 75px;

// line-height: 82px; 
line-height: 1.025;
letter-spacing: -0.02em;
color: #191a15;
  }
`;
export const Lang = styled.span`
  font-style: italic;
  font-weight: 600;
  color: #fc832c;

  &:hover{
    color: ${({ theme }) => theme.primaryBlack};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    width: 471px;
    text-align: start;
  }
`;

export const LinkStart = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.56;
  border-radius: 25px;
  padding: 16px 48px;
  color: ${({ theme }) => theme.orange};
  background: ${({ theme }) => theme.primaryYellow};
  margin-bottom: 20px;

  &:hover {
    color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.lightYellow};
  }

  @media screen and (min-width: 1140px) {
    font-size: 18px;
    padding: 16px 88px;
    width: 267px;
    height: auto;
    text-align: center;
    margin-bottom: 0;
  }
`;

// -------------------IMAGE------------------------
export const ImageContainer = styled.div`
  position: relative;
  border-radius: 30px;
  // max-width: 464px;
  // height: 526px;

  @media screen and (min-width: 1140px) {
    // width: 568px;
    // height: 530px;
  }
`;

export const ImgGirlSvg = styled.img`
  // left: 25%;
  // width: 250px;

  // @media screen and (min-width: 1140px) {
 
  //   border-radius: 10px;
  //   width: 464px;
  //   height: 526px;
  // }
  width: 100%;
  object-fit: contain;
`;

export const ImgHomePage = styled.img`
  position: absolute;
  top: 71%;
  left: -6%;
  z-index: 1;
  width: 311px;
height: 118px;

  @media screen and (min-width: 1140px) {
    top: 337px;
    left: -100px;
    width: auto;
  }
`;

export const QuestionIcon = styled.img`
position: absolute;
top: 176px;
    left: -33px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const ContactIcon = styled.img`
position: absolute;
top: -121px;
left: 463px;
  z-index: 13;
  width: 48px;

  @media screen and (max-width: 768px) {
    display: none;
    
  }
  @media screen and (max-width: 1140px) {
  left: 950%;
  }
`;

export const ArrowIcon = styled.img`

`;

export const IconContainer = styled.div`
position: absolute;
top: 190px;
left: -15px;
  z-index: 1;
  color: #fbfbfb;
  width: 48px;

`;

// ------------BENEFITS--------------------------

export const BenefitsContainer = styled.div`
background-image: url();
  margin-top: 24px;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding-top: 30px;
  padding-bottom: 30px;
  
  @media screen and (min-width: 768px) {
    background-image: url();
    background-size: contain;
    height: 100%;
    padding: 25px;
    margin-left: 0px;
    
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 122px 40px 123px;
    /* width: 1312px; */
    width: 100%;
    margin-left: 30px;
  }
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
    
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Nubers = styled.p`
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.02em;
  font-size: 20px;

  @media screen and (min-width: 1140px) {
    font-size: 28px;
  }
`;
export const BenefitsText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  white-space: pre-line;
`;

export const NewLine = styled.span`
  display: block;
`;