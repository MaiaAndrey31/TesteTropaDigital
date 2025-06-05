import React from 'react';
import styled from 'styled-components';
import { TrendingUp } from 'lucide-react';
import StatsGrid from './StatsGrid';
import ChartContainer from './ChartContainer';

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

const DashboardContent = () => {
  return (
    <ContentArea>
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
        <PageSubtitle>Bem-vindo ao painel de controle da Tropa Digital</PageSubtitle>
      </PageHeader>
      
      <StatsGrid />
      
      <ChartContainer title="Análise de Performance">
        <TrendingUp size={48} style={{ marginRight: '1rem' }} />
        Gráfico de Performance - Dados em tempo real
      </ChartContainer>
    </ContentArea>
  );
};

export default DashboardContent;
