import styled from 'styled-components';

const StatCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.white};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const StatValue = styled.h3`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.5rem;
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'error':
        return theme.colors.error;
      case 'primary':
      default:
        return theme.colors.primary;
    }
  }};
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;

const StatCard = ({ value, label, variant = 'primary', icon: Icon, ...props }) => {
  return (
    <StatCardContainer {...props}>
      {Icon && <Icon size={24} style={{ marginBottom: '1rem' }} />}
      <StatValue variant={variant}>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatCardContainer>
  );
};

export default StatCard;
