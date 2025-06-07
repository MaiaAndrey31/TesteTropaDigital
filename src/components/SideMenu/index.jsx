import { navLinks } from "./NavLinks";
import Logo from "../../assets/logo.svg";
import {
  Container,
  Footer,
  NavLink,
  NavLinkContainer,
  UserAvatar,
} from "./styles";
import useAuth from "../../contexts/useAuth";
import { theme } from "../../styles/theme";
import { useResolvedPath } from "react-router-dom";
import { ChevronDown, LogOut } from "lucide-react";

export function SideMenu() {
  const { logout, user } = useAuth();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt=" logo monster burguer" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <div className="user">
        <UserAvatar>
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </UserAvatar>
        <div>
          <span>{user?.name || "Usuário"}</span>
          <ChevronDown size={16} />
        </div>
        </div>
        <NavLink to="/login" onClick={logout}>
          <LogOut size={32} color={theme.colors.light} />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
