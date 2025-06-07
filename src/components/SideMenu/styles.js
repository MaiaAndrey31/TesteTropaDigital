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
    margin: 40px 0;
}

`

export const NavLinkContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const NavLink = styled(Link)`
display: flex;
align-items: center;
gap: 12px;
padding: 20px 28px;
text-decoration: none;
background-color: ${(props) => props.$isActive ? theme.colors.primary[500] : 'transparent'};

&:hover {
    background-color: ${theme.colors.primary[600]};
}

span{ 
    color: ${(props) => props.$isActive ? theme.colors.gray[100] : theme.colors.gray[500]};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}
`

export const Footer = styled.footer`
width: 100%;
margin-top: auto;
span{ 
    color: ${theme.colors.gray[500]};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}
.user{
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
}
`

export const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4F46E5;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.875rem;
  flex-shrink: 0;
`;