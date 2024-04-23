import styled from 'styled-components';

export const PsychologistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f878;
`;

export const LoadMoreBtn = styled.button`
  font-weight: 500;
font-size: 16px;
line-height: 156%;
border-radius: 30px;
padding: 14px 48px;
width: 176px;
height: 48px;
 color: ${({ theme }) => theme.orange};
  background: ${({ theme }) => theme.primaryYellow};
margin-bottom: 32px;
margin-top: 32px;

&:hover {
 color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.lightYellow};
}
`;