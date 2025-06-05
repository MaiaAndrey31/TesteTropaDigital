import styled, { keyframes, css } from 'styled-components';

// Animations
const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

// Mixins
const cardStyles = css`
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

// Layout Components
export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.light};
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[8]};
  margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '280px' : '0')};
  transition: ${({ theme }) => `margin-left ${theme.transition.duration.normal} ${theme.transition.easing.default}`};
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0;
    padding-bottom: ${({ theme }) => theme.spacing[20]};
  }
  
  .content {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  height: 80px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[600]};
    padding: ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: ${({ theme }) => `background-color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  
  .search-bar {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray[100]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    width: 300px;
    transition: ${({ theme }) => `box-shadow ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
    
    &:focus-within {
      box-shadow: ${({ theme }) => theme.shadows.sm};
      background: ${({ theme }) => theme.colors.white};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
    
    input {
      background: transparent;
      border: none;
      outline: none;
      margin-left: ${({ theme }) => theme.spacing[2]};
      width: 100%;
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: ${({ theme }) => theme.fontSize.sm};
      
      &::placeholder {
        color: ${({ theme }) => theme.colors.text.muted};
      }
    }
  }
  
  .notification-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[600]};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: ${({ theme }) => `background-color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]} ${theme.spacing[1]} ${theme.spacing[1]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => `background-color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const UserName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`;

export const UserRole = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  flex-shrink: 0;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: ${({ theme }) => theme.colors.error[500]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

// Sidebar Components
export const Sidebar = styled.aside`
  width: 280px;
  background: ${({ theme }) => theme.colors.background.sidebar};
  color: ${({ theme }) => theme.colors.gray[200]};
  transition: ${({ theme }) => `all ${theme.transition.duration.normal} ${theme.transition.easing.default}`};
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[800]};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  
  .sidebar-header {
    padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[6]} ${theme.spacing[4]}`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
    height: 80px;
    
    h2 {
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.white};
      line-height: ${({ theme }) => theme.lineHeight.tight};
    }
    
    .sidebar-toggle {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      transition: ${({ theme }) => `all ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
      
      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  
  .sidebar-nav {
    flex: 1;
    overflow-y: auto;
    padding: ${({ theme }) => `${theme.spacing[4]} 0`};
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin: ${({ theme }) => `${theme.spacing[1]} 0`};
        
        a {
          display: flex;
          align-items: center;
          padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
          color: ${({ theme }) => theme.colors.gray[200]};
          text-decoration: none;
          transition: ${({ theme }) => `all ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
          border-left: 3px solid transparent;
          font-size: ${({ theme }) => theme.fontSize.sm};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
          
          &:hover {
            background: rgba(255, 255, 255, 0.05);
            color: ${({ theme }) => theme.colors.white};
          }
          
          &.active {
            background: rgba(79, 70, 229, 0.1);
            border-left-color: ${({ theme }) => theme.colors.primary[500]};
            color: ${({ theme }) => theme.colors.white};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
          }
          
          svg {
            margin-right: ${({ theme }) => theme.spacing[3]};
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }
        }
      }
    }
  }
  
  .sidebar-footer {
    padding: ${({ theme }) => theme.spacing[6]};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
    
    .logout-btn {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[3]};
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.gray[400]};
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      cursor: pointer;
      padding: ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      width: 100%;
      transition: ${({ theme }) => `all ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
      
      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: ${({ theme }) => theme.colors.white};
      }
      
      svg {
        flex-shrink: 0;
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    position: fixed;
    z-index: ${({ theme }) => theme.zIndex.modal};
    animation: ${({ $isOpen }) => ($isOpen ? slideIn : 'none')} ${({ theme }) => theme.transition.duration.normal} ${({ theme }) => theme.transition.easing.default};
  }
`;

// Stats Components
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  ${cardStyles}
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme, $color }) => $color ? `${$color}20` : theme.colors.primary[50]};
  color: ${({ theme, $color }) => $color || theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const StatChange = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme, $isPositive }) => ($isPositive ? theme.colors.success[500] : theme.colors.error[500])};
  
  svg {
    width: 14px;
    height: 14px;
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

// Chart Components
export const ChartContainer = styled.div`
  ${cardStyles}
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ChartActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  
  select {
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1px solid ${({ theme }) => theme.colors.border.light};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    outline: none;
    transition: ${({ theme }) => `
      border-color ${theme.transition.duration.fast} ${theme.transition.easing.default},
      box-shadow ${theme.transition.duration.fast} ${theme.transition.easing.default}
    `};
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary[500]};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[100]};
    }
    
    option {
      padding: ${({ theme }) => theme.spacing[2]};
    }
  }
`;

export const ChartContent = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  overflow: hidden;
  
  .chart-container {
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.spacing[4]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing[2]};
    }
  }
  
  .chart-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.text.muted};
    text-align: center;
    padding: ${({ theme }) => theme.spacing[8]};
    
    svg {
      opacity: 0.5;
      width: 48px;
      height: 48px;
    }
    
    p {
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize.sm};
      max-width: 300px;
      line-height: ${({ theme }) => theme.lineHeight.relaxed};
    }
  }
`;

// Table Components
export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background: ${({ theme }) => theme.colors.white};
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 0;
    width: 100%;
  }
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  
  th:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  th:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`;

export const TableRow = styled.tr`
  transition: ${({ theme }) => `background-color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
  
  &:last-child {
    td:first-child {
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.lg};
    }
    
    td:last-child {
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.lg};
    }
  }
`;

export const TableHeaderCell = styled.th`
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  
  &:first-child {
    padding-left: ${({ theme }) => theme.spacing[6]};
  }
  
  &:last-child {
    padding-right: ${({ theme }) => theme.spacing[6]};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  vertical-align: middle;
  white-space: nowrap;
  
  &:first-child {
    padding-left: ${({ theme }) => theme.spacing[6]};
  }
  
  &:last-child {
    padding-right: ${({ theme }) => theme.spacing[6]};
  }
  
  .status-badge {
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: ${({ theme }) => theme.lineHeight.tight};
    
    svg {
      margin-right: ${({ theme }) => theme.spacing[1]};
      width: 12px;
      height: 12px;
    }
    
    &.completed {
      background-color: ${({ theme }) => theme.colors.success[50]};
      color: ${({ theme }) => theme.colors.success[600]};
    }
    
    &.pending {
      background-color: ${({ theme }) => theme.colors.warning[50]};
      color: ${({ theme }) => theme.colors.warning[600]};
    }
    
    &.processing {
      background-color: ${({ theme }) => theme.colors.info[50]};
      color: ${({ theme }) => theme.colors.info[600]};
    }
  }
  
  .action-btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary[500]};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.sm};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: ${({ theme }) => `all ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary[50]};
      text-decoration: none;
    }
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

// Link Components
export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-decoration: none;
  transition: ${({ theme }) => `color ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
    text-decoration: underline;
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: ${({ theme }) => `transform ${theme.transition.duration.fast} ${theme.transition.easing.default}`};
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

// Utility Components
export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[1]} 0;
  line-height: ${({ theme }) => theme.lineHeight.tight};
  letter-spacing: -0.025em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;
