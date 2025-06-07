import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "../../contexts/useAuth";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Logotipo from "../../assets/logo.svg";

import {
  PageContainer,
  LoginContainer,
  LoginFormContainer,
  LogoContainer,
  Logo,
  Title,
  Subtitle,
  Form,
  InputGroup,
  InputIcon,
  Input,
  PasswordToggle,
  ForgotPassword,
  LoginButton,
  ErrorMessage,
  IllustrationContainer,
  ContainerImage,
} from "./LoginPage.styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Por favor, preencha todos os campos");
      return;
    }

    try {
      setIsLoading(true);
      setLoginError("");
      const result = await login({ email, password });

      if (result && result.success) {
        navigate(from || "/admin/events", { replace: true });
      } else {
        setLoginError(result?.error || "Email ou senha inválidos");
      }
    } catch (error) {
      setLoginError("Ocorreu um erro durante o login. Tente novamente.");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <LoginFormContainer>
          <LogoContainer>
            <Logo src={Logotipo} alt="Tropa Digital" />
          </LogoContainer>

          <Title>Bem-vindo de volta</Title>
          <Subtitle>Entre com sua conta para acessar o painel</Subtitle>

          <Form onSubmit={handleSubmit}>
            {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

            <InputGroup>
              <InputIcon>
                <Mail size={20} />
              </InputIcon>
              <Input
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <Lock size={20} />
              </InputIcon>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </PasswordToggle>
            </InputGroup>

            <ForgotPassword to="/forgot-password">
              Esqueceu sua senha?
            </ForgotPassword>

            <LoginButton type="submit" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </LoginButton>
          </Form>
        </LoginFormContainer>
        <IllustrationContainer>
          <ContainerImage />
        </IllustrationContainer>{" "}
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
