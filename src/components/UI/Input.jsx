import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem ${({ $hasIcon }) => ($hasIcon ? '2.5rem' : '1rem')};
  border: 1px solid ${({ theme, $error }) => 
    $error ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.base};
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.background.white};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.7;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.light};
    cursor: not-allowed;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
  pointer-events: none;
`;

export const InputError = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;

export const Input = ({
  label,
  icon: Icon,
  error,
  className,
  ...props
}) => {
  return (
    <InputWrapper className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <div style={{ position: 'relative' }}>
        {Icon && (
          <InputIcon>
            <Icon size={20} />
          </InputIcon>
        )}
        <StyledInput
          $hasIcon={!!Icon}
          $error={!!error}
          {...props}
        />
      </div>
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export default Input;
