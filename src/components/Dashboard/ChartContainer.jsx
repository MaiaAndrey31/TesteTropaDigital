import styled from 'styled-components';

const ChartContainerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.white};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: 2rem;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ChartContent = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: white;
  font-size: 1.125rem;
  text-align: center;
  padding: 1rem;
`;

const ChartContainer = ({ title, children, ...props }) => {
  return (
    <ChartContainerWrapper {...props}>
      <ChartHeader>
        <ChartTitle>{title}</ChartTitle>
      </ChartHeader>
      <ChartContent>
        {children || 'Gráfico de dados em tempo real'}
      </ChartContent>
    </ChartContainerWrapper>
  );
};

export default ChartContainer;
