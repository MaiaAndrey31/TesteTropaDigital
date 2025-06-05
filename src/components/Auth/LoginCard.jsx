import styled from 'styled-components';

const LoginCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.white};
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  max-width: 400px;
  position: relative;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 16px 16px 0 0;
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const LoginCard = ({ children, title = 'Tropa Digital', subtitle = 'Faça login para continuar' }) => {
  return (
    <LoginCardContainer>
      <Logo>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Logo>
      {children}
    </LoginCardContainer>
  );
};

export default LoginCard;
