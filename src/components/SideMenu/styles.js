import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.gray[100]};

  img {
    width: 60%;
    margin: 30px 0;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 10px;
  text-decoration: none;
  background-color: ${(props) =>
    props.$isActive ? theme.colors.primary[500] : "transparent"};

  &:hover {
    background-color: ${theme.colors.primary[600]};
    color: ${theme.colors.gray[100]};
  }

  span {
    color: ${(props) =>
      props.$isActive ? theme.colors.gray[100] : theme.colors.gray[500]};
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    &:hover {
      color: ${theme.colors.gray[100]};
    }
  }
  img {
    width: 24px;
    height: 24px;
    margin: 10px 15px;
    fill: ${(props) =>
      props.$isActive ? theme.colors.gray[100] : theme.colors.gray[500]};

    &:hover {
      fill: ${theme.colors.gray[100]};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  span {
    color: ${theme.colors.gray[500]};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  .user {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 20px 15px;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4f46e5;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.875rem;
`;
