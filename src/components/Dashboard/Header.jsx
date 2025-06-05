import React, { useState } from 'react';
import { Search, Menu, X, Bell } from 'lucide-react';
import Avatar from '../UI/Avatar';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.background.white};
  padding: 1rem 2rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 900;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.light};
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
  position: relative;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSize.sm};
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
    }
  }
  
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border-radius: 9999px;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.light};
  }
`;

const Header = ({ onMenuToggle, isSidebarOpen }) => {
  const [notifications] = useState(3); // Example notification count
  
  return (
    <HeaderContainer>
      <MobileMenuButton onClick={onMenuToggle}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </MobileMenuButton>
      
      <SearchBar>
        <Search size={18} />
        <input type="text" placeholder="Pesquisar..." />
      </SearchBar>
      
      <HeaderActions>
        <IconButton aria-label="Notificações">
          <Bell size={20} />
          {notifications > 0 && (
            <NotificationBadge>
              {notifications > 9 ? '9+' : notifications}
            </NotificationBadge>
          )}
        </IconButton>
        
        <UserProfile>
          <Avatar 
            name="Admin User"
            role="Administrador"
            size="sm"
          />
        </UserProfile>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
