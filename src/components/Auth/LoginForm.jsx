import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  margin-top: 0.5rem;
`;

const TestCredentials = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  p {
    margin-bottom: 0.25rem;
  }
  strong {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const LoginForm = ({ onLogin, loading = false, error = '' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <LoginFormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          icon={User}
          required
        />
        
        <Input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Sua senha"
          value={formData.password}
          onChange={handleChange}
          icon={Lock}
          endAdornment={
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'inherit'
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          }
          required
        />
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
        
        <TestCredentials>
          <p>Credenciais de teste:</p>
          <p><strong>Email:</strong> admin@tropadigital.com</p>
          <p><strong>Senha:</strong> 123456</p>
        </TestCredentials>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
