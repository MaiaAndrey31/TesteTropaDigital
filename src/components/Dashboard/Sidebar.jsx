import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, BarChart3, Users, FileText, Calendar, Settings, LogOut 
} from 'lucide-react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 280px;
  background: ${({ theme }) => theme.colors.background.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  
  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
  }
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  h2 {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 1rem 0;
`;

const NavItem = styled.li`
  margin: 0.25rem 0;
`;

const NavLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${({ $active, theme: { colors } }) => 
    $active ? `${colors.primary}1a` : 'transparent'};
  border: none;
  border-right: 3px solid ${({ $active, theme: { colors } }) => 
    $active ? colors.primary : 'transparent'};
  color: ${({ $active, theme: { colors } }) => 
    $active ? colors.primary : colors.text.primary};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  
  &:hover {
    background: ${({ theme: { colors } }) => `${colors.primary}0d`};
    color: ${({ theme: { colors } }) => colors.primary};
  }
  
  svg {
    flex-shrink: 0;
  }
`;

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'users', label: 'Usuários', icon: Users },
  { id: 'reports', label: 'Relatórios', icon: FileText },
  { id: 'calendar', label: 'Calendário', icon: Calendar },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(`/${path}`);
    onClose();
  };

  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        <SidebarHeader>
          <h2>Tropa Digital</h2>
        </SidebarHeader>
        
        <nav>
          <NavList>
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === `/${item.id}`;
              
              return (
                <NavItem key={item.id}>
                  <NavLink 
                    $active={isActive}
                    onClick={() => handleNavigation(item.id)}
                  >
                    <Icon size={18} />
                    {item.label}
                  </NavLink>
                </NavItem>
              );
            })}
            
            <NavItem>
              <NavLink onClick={() => handleNavigation('logout')}>
                <LogOut size={18} />
                Sair
              </NavLink>
            </NavItem>
          </NavList>
        </nav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
