import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Sidebar,
  MainContent,
  Header,
  HeaderRight,
  UserAvatar,
  
  SidebarHeader,
  SidebarNav,
  SidebarFooter,
  SearchBar,
  NotificationButton,
  UserDropdown,
 
} from "./DashboardPage.styles";
import {
  Bell,
  Search,
  Home,
  Users,
  ShoppingCart,
  DollarSign,
  BarChart,
  PieChart,
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

 
  const menuItems = [
    { id: "dashboard", icon: <Home size={20} />, label: "Dashboard" },
    { id: "users", icon: <Users size={20} />, label: "Usuários" },
    { id: "products", icon: <ShoppingCart size={20} />, label: "Produtos" },
    { id: "sales", icon: <DollarSign size={20} />, label: "Vendas" },
    { id: "reports", icon: <BarChart size={20} />, label: "Relatórios" },
    { id: "categories", icon: <PieChart size={20} />, label: "Categorias" },
    { id: "payments", icon: <CreditCard size={20} />, label: "Pagamentos" },
    { id: "settings", icon: <Settings size={20} />, label: "Configurações" },
  ];

  

 

 
  return (
    <Layout>
      <Sidebar >
        <SidebarHeader>
          <h2>Dashboard</h2>
          
        </SidebarHeader>

        <SidebarNav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={activeMenu === item.id ? "active" : ""}
              onClick={() => setActiveMenu(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </SidebarNav>

        <SidebarFooter>
        <UserAvatar>AD</UserAvatar>
              <div>
                <span>Admin User</span>
                <ChevronDown size={16} />
              </div>
          
          <button className="logout" onClick={handleLogout}>
            <LogOut size={16} />
            <span>Sair</span>
          </button>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        <Header>
          
          <HeaderRight>
            <SearchBar>
              <Search size={18} />
              <input type="text" placeholder="Pesquisar..." />
            </SearchBar>

            <NotificationButton>
              <Bell size={20} />
              <span>3</span>
            </NotificationButton>

            <UserDropdown
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              
            </UserDropdown>
          </HeaderRight>
        </Header>

        

        
      </MainContent>
    </Layout>
  );
};

export default DashboardPage;
