import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageContainer from "../../assets/monitoring 1.svg";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.spacing[10]};
`;

export const LoginContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 1000px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 48px;
  text-align: left;

  img {
    height: 40px;
  }
`;

export const Logo = styled.img`
  height: ${({ theme }) => theme.spacing[10]};
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary[600]};
  line-height: 1.2;
  text-align: left;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: rgba(42, 77, 142, 0.5);
  margin: 0 0 32px 0;
  line-height: 1.5;
  font-weight: 400;
  font-style: normal;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: ${({ theme }) => `
    border-color ${theme.transition.duration.fast} ${theme.transition.easing.default},
    box-shadow ${theme.transition.duration.fast} ${theme.transition.easing.default}
  `};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const InputIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[3.5]} 0`};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[900]};
  width: 100%;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const PasswordToggle = styled.button`
  background: none;
  border: none;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) =>
    `color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const ForgotPassword = styled(Link)`
  color: ${({ theme }) => theme.colors.primary[600]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: right;
  margin-top: -${({ theme }) => theme.spacing[2]};
  transition: ${({ theme }) =>
    `color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[700]};
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => `
    background-color ${theme.transition.duration.fast} ${theme.transition.easing.default},
    transform ${theme.transition.duration.fast} ${theme.transition.easing.default}
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error[600]};
  background-color: ${({ theme }) => theme.colors.error[50]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  border-left: 3px solid ${({ theme }) => theme.colors.error[500]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const IllustrationContainer = styled.div`
  width: 355px;
  height: 478px;
  border-radius: 20px;
  background-color: #cc6237;
  position: relative;
  overflow-x: visible;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  background-image: url("${ImageContainer}");
  position: absolute;
  width: 357px;
  height: 316px;
  bottom: 0;
  left: -42.26px;
  z-index: 1;
  
`;
