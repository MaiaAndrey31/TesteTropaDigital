import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[10]}`};
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[6]}`};
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  text-align: center;
  
  img {
    height: 40px;
  }
`;

export const Logo = styled.img`
  height: ${({ theme }) => theme.spacing[10]};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  line-height: ${({ theme }) => theme.lineHeight.tight};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
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
  transition: ${({ theme }) => `color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  
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
  transition: ${({ theme }) => `color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
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
  flex: 1;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.primary[400]} 100%)`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[8]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  & > img {
    max-width: 100%;
    height: auto;
    max-height: 24rem;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
