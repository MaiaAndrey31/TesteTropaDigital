import React from 'react';
import styled from 'styled-components';
import StatCard from './StatCard';
import { Users, TrendingUp, Activity, AlertCircle } from 'lucide-react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const stats = [
  {
    value: '2,543',
    label: 'Total de Usuários',
    variant: 'success',
    icon: Users,
  },
  {
    value: 'R$ 45,230',
    label: 'Receita Mensal',
    variant: 'primary',
    icon: TrendingUp,
  },
  {
    value: '156',
    label: 'Pedidos Ativos',
    variant: 'warning',
    icon: Activity,
  },
  {
    value: '23',
    label: 'Tickets Abertos',
    variant: 'error',
    icon: AlertCircle,
  },
];

const StatsGrid = () => {
  return (
    <Grid>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          variant={stat.variant}
          icon={stat.icon}
        />
      ))}
    </Grid>
  );
};

export default StatsGrid;
