import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: ${({ theme }) => theme.colors?.background?.light || '#F9FAFB'};
    color: ${({ theme }) => theme.colors?.text?.primary || '#111827'};
    line-height: 1.6;    
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors?.text?.heading || '#111827'};
  }

  p {
    margin: 0 0 1rem 0;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    outline: none;
  }

  input, textarea, select {
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    width: 100%;
    transition: all 0.2s;
    
    &:focus {
      outline: none;
      border-color: #4F46E5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
    
    &::placeholder {
      color: #9CA3AF;
    }
  }


  a {
    color: ${({ theme }) => theme.colors?.primary?.main || '#4F46E5'};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: ${({ theme }) => theme.colors?.primary?.dark || '#4338CA'};
      text-decoration: underline;
    }
  }


  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
