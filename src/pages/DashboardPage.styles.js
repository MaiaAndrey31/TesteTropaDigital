import styled from 'styled-components';


// Layout Components

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F9FAFB;
  position: relative;
  color: #1F2937;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '280px' : '0')};
  transition: margin-left 0.3s ease;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  
  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  
  h3 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
  }
  
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CardContent = styled.div`
  width: 100%;
`;

// Recent Orders Components

















// Top Products Components











export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 50;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #6B7280;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: #F3F4F6;
    }
  }
  
  div {
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin: 0;
    }
    
    p {
      font-size: 0.875rem;
      color: #6B7280;
      margin: 0.25rem 0 0;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
    
    div {
      h1 {
        font-size: 1.25rem;
      }
      
      p {
        font-size: 0.8125rem;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #F3F4F6;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 280px;
  transition: all 0.2s ease;
  
  &:focus-within {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    background: #FFFFFF;
  }
  
  @media (max-width: 1024px) {
    width: 200px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
  
  input {
    background: transparent;
    border: none;
    outline: none;
    margin-left: 0.75rem;
    width: 100%;
    color: #111827;
    font-size: 0.9375rem;
    font-weight: 400;
    
    &::placeholder {
      color: #9CA3AF;
      font-weight: 400;
    }
  }
`;

export const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6B7280;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #F3F4F6;
    color: #4B5563;
  }
  
  span {
    position: absolute;
    top: -2px;
    right: -2px;
    background: #EF4444;
    color: #FFFFFF;
    font-size: 0.6875rem;
    font-weight: 600;
    width: 18px;
    height: 18px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FFFFFF;
  }
`;

export const UserDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  border-radius: 9999px;
  background: #F3F4F6;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #E5E7EB;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    span {
      font-size: 0.875rem;
      font-weight: 500;
      color: #111827;
      line-height: 1.25rem;
    }
    
    svg {
      color: #6B7280;
      transition: transform 0.2s ease;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.25rem;
    
    div {
      display: none;
    }
  }
`;

export const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4F46E5;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.875rem;
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
  background: #1E293B;
  color: #E2E8F0;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 1024px) {
    transform: translateX(0);
    box-shadow: none;
  }
  
  @media (max-width: 1023px) {
    position: fixed;
    z-index: 50;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
  
  h2 {
    color: #FFFFFF;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
  
  button {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.375rem;
    color: #94A3B8;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #E2E8F0;
    }
  }
`;

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 0.75rem 0.75rem 1.5rem;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.gray[100]};
  
  button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    color: #CBD5E1;
    font-size: 0.9375rem;
    font-weight: 500;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #1F2937;
    }
    
    &.active {
      background: #E5E7EB;
      color: #1F2937;
      font-weight: 500;
      
      svg {
        color: #3B82F6;
      }
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.75rem;
      color: #6B7280;
    }
  }
`;

export const SidebarFooter = styled.footer`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.upgrade {
      background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
      color: #FFFFFF;
      
      &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    }
    
    &.logout {
      background: rgba(255, 255, 255, 0.05);
      color: #EF4444;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
    }
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
  gap: 0.25rem;
  color: #4F46E5;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #4338CA;
    text-decoration: underline;
  }
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #F3F4F6;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ProductRank = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4B5563;
  font-size: 0.875rem;
`;

export const ProductDetails = styled.div`
  h4 {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
  }
  
  span {
    font-size: 0.8125rem;
    color: #6B7280;
    margin-top: 0.125rem;
    display: block;
  }
`;

export const ProductGrowth = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ $positive }) => ($positive ? '#10B981' : '#EF4444')};
  
  svg {
    margin-right: 0.25rem;
  }
`;



export const RecentOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #F3F4F6;
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

export const OrderDate = styled.span`
  font-size: 0.8125rem;
  color: #6B7280;
  margin-top: 0.125rem;
  display: block;
`;

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OrderAmount = styled.strong`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: transparent;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #F3F4F6;
    color: #111827;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

        `;
      default:
        return '';
    }
  }}
`;

export const OrderActions = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
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
