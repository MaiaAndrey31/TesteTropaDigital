import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 240px) 1fr;
  min-height: 100vh;
  background-color: ${theme.colors.gray[100]};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.gray[50]};
    transition: all 0.3s ease;
    margin-left: ${({ $isMenuOpen }) => ($isMenuOpen ? '240px' : '0')};
    width: ${({ $isMenuOpen }) => ($isMenuOpen ? 'calc(100% - 240px)' : '100%')};

    @media (max-width: 1024px) {
      margin-left: 0;
      width: 100%;
      padding-top: 60px;
    }
  }

  section {
    margin: 0 auto;
    padding: 24px 16px;
    max-width: 1400px;
    width: 100%;
    flex: 1;

    @media (min-width: 768px) {
      padding: 32px 24px;
    }

    @media (min-width: 1200px) {
      padding: 40px 32px;
    }
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.gray[600]};
    margin: 0 0 8px 0;
    padding: 0 16px;

    @media (min-width: 768px) {
      font-size: 15px;
      padding: 0 24px;
    }

    span {
      font-weight: 600;
      color: ${theme.colors.gray[800]};
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.primary[600]};
    margin: 0 0 24px 0;
    padding: 0 16px;

    @media (min-width: 768px) {
      font-size: 24px;
      padding: 0 24px;
      margin-bottom: 32px;
    }
  }
`