import { Field } from "formik";
import styled from "styled-components";

export const BookTrailContainer = styled.div`
`;

export const BookTrialTitle = styled.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`;

export const BookTrialText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 20px;
`;

export const PsychologistBlock = styled.div`
  display: flex;
  gap: 14px;
 align-items: center;
`;

export const SomeText = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #8a8a89;
`;

export const PsychologistNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PsychologistName = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`;

export const FormTitle = styled.h3`
font-weight: 500;
font-size: 24px;
line-height: 1.33;
margin-top: 40px;
`;

export const RadioBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
`;

export const RadioBtnField = styled(Field)`
  position: relative;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #8a8a89;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
      border-color: ${({ theme }) => theme.primaryYellow};
    &::before {
      background-color: ${({ theme }) => theme.primaryYellow};
    }
  }
  @keyframes borderChange {
    from {
        border: 2px solid #8a8a89;;
    }
    to {
        border-color: ${({ theme }) => theme.primaryYellow};
    }
  }
`;

export const TelTimeContainer = styled.div`
display: flex;
  gap: 8px;
`;