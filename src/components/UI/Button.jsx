import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${({ theme }) => theme.colors.gradient};
          color: white;
          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({ theme }) => theme.shadows.lg};
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          border: 1px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primary};
          &:hover {
            background: rgba(59, 130, 246, 0.1);
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.colors.text.primary};
          &:hover {
            background: ${({ theme }) => theme.colors.background.light};
          }
        `;
      default:
        return css`
          background: ${({ theme }) => theme.colors.primary};
          color: white;
        `;
    }
  }}

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 1rem;
          font-size: ${({ theme }) => theme.fontSize.sm};
        `;
      case 'lg':
        return css`
          padding: 1rem 2rem;
          font-size: ${({ theme }) => theme.fontSize.lg};
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;
