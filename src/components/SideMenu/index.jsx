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
import { Power } from "lucide-react";
import { UserIcon } from "@phosphor-icons/react";

export function SideMenu() {
  const { logout, user } = useAuth();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt=" logo Tropa Digital" />
      <NavLinkContainer>
        <h4>Menu</h4>
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
          <UserAvatar>{user?.name?.charAt(0).toUpperCase() || "U"}</UserAvatar>
          <div className="user-info">
            <span>{user?.name || "Usuário"}</span>
            <span>{user?.role}</span>
          </div>
          
        </div>
        <NavLink to="">
        <UserIcon size={24} fill={theme.colors.gray[500]} />
          <span>Alterar Dados</span>
        </NavLink>
        <NavLink to="/login" onClick={logout}>
          <Power size={24} color={theme.colors.gray[500]} />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
