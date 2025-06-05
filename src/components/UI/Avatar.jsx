import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

export const AvatarImage = styled.div`
  width: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return '2rem';
      case 'lg':
        return '3rem';
      case 'xl':
        return '4rem';
      case 'md':
      default:
        return '2.5rem';
    }
  }};
  height: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return '2rem';
      case 'lg':
        return '3rem';
      case 'xl':
        return '4rem';
      case 'md':
      default:
        return '2.5rem';
    }
  }};
  border-radius: 50%;
  background: ${({ src, theme }) => 
    src ? `url(${src}) center/cover` : theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return '0.75rem';
      case 'lg':
        return '1.25rem';
      case 'xl':
        return '1.5rem';
      case 'md':
      default:
        return '1rem';
    }
  }};
  user-select: none;
  flex-shrink: 0;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AvatarRole = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Avatar = ({
  src,
  name = '',
  role,
  size = 'md',
  onClick,
  className,
}) => {
  const getInitials = (fullName) => {
    if (!fullName) return '';
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <AvatarContainer 
      className={className}
      $clickable={!!onClick}
      onClick={onClick}
    >
      <AvatarImage size={size} src={src}>
        {!src && getInitials(name)}
      </AvatarImage>
      {(name || role) && (
        <AvatarInfo>
          {name && <AvatarName>{name}</AvatarName>}
          {role && <AvatarRole>{role}</AvatarRole>}
        </AvatarInfo>
      )}
    </AvatarContainer>
  );
};

export default Avatar;
