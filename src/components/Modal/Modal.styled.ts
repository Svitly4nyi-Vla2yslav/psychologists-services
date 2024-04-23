import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);

`;

export const CloseBtnSvg = styled.img`

`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 290px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #ffffff;
  border-radius: 30px;
  max-height: 100vh;
  padding: 32px;
  
  @media screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;

   }

`;

export const BtnClose = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// ---------------CONTENT STYLE--------------------------------

export const Title = styled.h2`
font-weight: 500;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
font-size: 30px;

@media screen and (min-width: 768px) {
  font-size: 40px;

}
`

export const Text = styled.p`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 40px;
`

export const FormStyle = styled(Form)`
display: flex;
flex-direction: column;
gap: 18px;
`

export const FieldStyle = styled(Field)`
border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 12px;
padding: 16px 18px;
height: 54px;
width: 100%;

&::placeholder {
  color: ${({ theme }) => theme.primaryBlack};
}

&:hover{
  outline: none;
  border-color: ${({ theme }) => theme.primaryYellow};
}

&:focus {
  outline: none;
  border-color: ${({ theme }) => theme.primaryYellow};
}


@media screen and (min-width: 768px) {
  width: 438px;

}
`

export const ErrMsg = styled(ErrorMessage)`
font-size: 14px;
color: red;
margin-top: -10px;
`

export const BtnSubmit = styled.button`
margin-top: 22px;
border-radius: 30px;
padding: 16px;
width: 100%;
height: 60px;

font-weight: 700;
font-size: 18px;
line-height: 1.56;
color: ${({ theme }) => theme.orange};
background: ${({ theme }) => theme.primaryYellow};
&:hover {
  color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.lightYellow};
}

@media screen and (min-width: 768px) {
  width: 438px;

}
`

export const BtnSubmitGoogle = styled.button`
margin-top: 18px;
border-radius: 12px;
padding: 16px;
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background: transparent;
border: 1px solid rgba(18, 20, 23, 0.1);

font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);

&:hover {
  border-color: ${({ theme }) => theme.primaryYellow};
}
@media screen and (min-width: 768px) {
  width: 438px;
  
}

`
export const BtnGoogleSvg = styled.img`
width: 20px;
height: 20px;
`;