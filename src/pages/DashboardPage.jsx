import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layout, 
  Sidebar, 
  MainContent, 
  Header, 
  HeaderLeft, 
  HeaderRight, 
  UserInfo,
  UserName,
  UserRole,
  UserAvatar,
  NotificationBadge,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  StatChange,
  SectionTitle,
  ChartContainer,
  ChartHeader,
  ChartActions,
  ChartContent,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  ViewAllLink
} from './DashboardPage.styles';
import { 
  Bell, 
  Search, 
  ChevronDown, 
  Menu, 
  X,
  Users,
  ShoppingCart,
  DollarSign,
  BarChart2,
  LineChart,
  PieChart,
  Calendar,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Download,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Filter,
  ChevronLeft,
  ChevronsRight,
  User,
  Check,
  Clock,
  AlertCircle,
  XCircle,
  ArrowRight,
  Home,
  CreditCard,
  Package,
  Tag,
  MessageSquare,
  Mail,
  HelpCircle,
  Sun,
  Moon
} from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };

  return (
    <Layout>
      <Sidebar $isOpen={sidebarOpen}>
        <div className="sidebar-header">
          <h2>Tropa Digital</h2>
          <button 
            className="sidebar-toggle" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Recolher menu' : 'Expandir menu'}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="#">
                <BarChart2 size={20} />
                {sidebarOpen && 'Dashboard'}
              </a>
            </li>
            <li>
              <a href="#">
                <Users size={20} />
                {sidebarOpen && 'Usuários'}
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCart size={20} />
                {sidebarOpen && 'Vendas'}
              </a>
            </li>
            <li>
              <a href="#">
                <DollarSign size={20} />
                {sidebarOpen && 'Financeiro'}
              </a>
            </li>
            <li>
              <a href="#">
                <Calendar size={20} />
                {sidebarOpen && 'Agenda'}
              </a>
            </li>
            <li>
              <a href="#">
                <FileText size={20} />
                {sidebarOpen && 'Relatórios'}
              </a>
            </li>
            <li>
              <a href="#">
                <Settings size={20} />
                {sidebarOpen && 'Configurações'}
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && 'Sair'}
          </button>
        </div>
      </Sidebar>
      
      <MainContent>
        <Header>
          <HeaderLeft>
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menu"
            >
              <Menu size={24} />
            </button>
            <div>
              <PageTitle>Dashboard</PageTitle>
              <PageSubtitle>Bem-vindo de volta, João</PageSubtitle>
            </div>
          </HeaderLeft>
          
          <HeaderRight>
            <div className="search-bar">
              <Search size={18} />
              <input type="text" placeholder="Pesquisar..." />
            </div>
            
            <button className="notification-btn">
              <Bell size={20} />
              <NotificationBadge>3</NotificationBadge>
            </button>
            
            <UserInfo>
              <div>
                <UserName>João Silva</UserName>
                <UserRole>Administrador</UserRole>
              </div>
              <UserAvatar>
                <span>JS</span>
              </UserAvatar>
              <ChevronDown size={16} />
            </UserInfo>
          </HeaderRight>
        </Header>
        
        <div className="content">
          <StatsGrid>
            <StatCard>
              <StatIcon $color="#4CAF50">
                <DollarSign size={20} />
              </StatIcon>
              <div>
                <StatValue>R$ 12.450,00</StatValue>
                <StatLabel>Faturamento Total</StatLabel>
                <StatChange $isPositive={true}>
                  +12% <span>vs mês passado</span>
                </StatChange>
              </div>
            </StatCard>
            
            <StatCard>
              <StatIcon $color="#2196F3">
                <ShoppingCart size={20} />
              </StatIcon>
              <div>
                <StatValue>245</StatValue>
                <StatLabel>Novos Pedidos</StatLabel>
                <StatChange $isPositive={true}>
                  +8% <span>vs mês passado</span>
                </StatChange>
              </div>
            </StatCard>
            
            <StatCard>
              <StatIcon $color="#FF9800">
                <Users size={20} />
              </StatIcon>
              <div>
                <StatValue>1,245</StatValue>
                <StatLabel>Novos Clientes</StatLabel>
                <StatChange $isPositive={true}>
                  +24% <span>vs mês passado</span>
                </StatChange>
              </div>
            </StatCard>
            
            <StatCard>
              <StatIcon $color="#F44336">
                <BarChart2 size={20} />
              </StatIcon>
              <div>
                <StatValue>R$ 8.450,00</StatValue>
                <StatLabel>Lucro Líquido</StatLabel>
                <StatChange $isPositive={false}>
                  -2% <span>vs mês passado</span>
                </StatChange>
              </div>
            </StatCard>
          </StatsGrid>
          
          <ChartContainer>
            <ChartHeader>
              <SectionTitle>Visão Geral</SectionTitle>
              <ChartActions>
                <select defaultValue="this_month">
                  <option value="this_week">Esta Semana</option>
                  <option value="this_month">Este Mês</option>
                  <option value="this_year">Este Ano</option>
                </select>
              </ChartActions>
            </ChartHeader>
            <ChartContent>
              {/* Chart will be rendered here */}
              <div className="chart-placeholder">
                <BarChart2 size={48} />
                <p>Gráfico de desempenho</p>
              </div>
            </ChartContent>
          </ChartContainer>
          
          <ChartContainer>
            <ChartHeader>
              <SectionTitle>Últimos Pedidos</SectionTitle>
              <ViewAllLink href="#">Ver Tudo <ChevronRight size={16} /></ViewAllLink>
            </ChartHeader>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderCell>Nº Pedido</TableHeaderCell>
                    <TableHeaderCell>Cliente</TableHeaderCell>
                    <TableHeaderCell>Data</TableHeaderCell>
                    <TableHeaderCell>Valor</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </TableRow>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <TableRow key={item}>
                      <TableCell>#00{item}</TableCell>
                      <TableCell>Cliente {item}</TableCell>
                      <TableCell>01/06/2023</TableCell>
                      <TableCell>R$ {item},00</TableCell>
                      <TableCell>
                        <span className="status-badge completed">Concluído</span>
                      </TableCell>
                      <TableCell>
                        <button className="action-btn">
                          <span>Ver detalhes</span>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </ChartContainer>
        </div>
      </MainContent>
      
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </Layout>
  );
};

export default DashboardPage;
