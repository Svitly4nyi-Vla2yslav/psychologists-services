import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
display: flex;
    align-items: center;

`;

export const NavList = styled.ul`
   display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1140px) {
  gap: 16px;
}
`;

export const RegBtn = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: ${({ theme }) => theme.primaryBlack};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;

  &:hover {
    background: #8a8a89;
  }
`;

export const LogBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background: none;
  min-width: 73px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    scale: 1.1;
   color:  ${({ theme }) => theme.primaryYellow}
  }
`;

export const LogInSvg = styled.img`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.primaryYellow};
`;

export const LogOutSvg = styled.img`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.primaryYellow};
`;

export const TextItem = styled.li`
  border-radius: 12px;
  padding: 14px 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primaryYellow};
`;

export const NavListMenu = styled.ul`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const NavLinkMenu = styled(NavLink)`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryBlack};
  align-items: center;
  &.active {
    color: ${({ theme }) => theme.primaryYellow};
  }
  &:hover {
    color: ${({ theme }) => theme.primaryYellow};
  }
`;