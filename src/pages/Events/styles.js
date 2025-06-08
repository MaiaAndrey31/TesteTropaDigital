import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
  }

  .css-s09cke-MuiTablePagination-selectLabel,
  .css-11cfq65-MuiTablePagination-displayedRows {
    margin-bottom: 0;
    font-size: 14px;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${theme.colors.primary[100]};
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 30px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  transition: all ease 0.4s;

  > svg {
    fill: ${theme.colors.primary[500]};
    height: 22px;
    width: 22px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.error[500]};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  gap: 16px;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.gray[100]};
  border-radius: 8px;
  padding: 0 16px;
  flex: 1;
  min-width: 180px;
  max-width: 200px;
  height: 48px;

  @media (max-width: 768px) {
    min-width: 160px;
    height: 44px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
  }

  input {
    width: 100%;
    padding: 8px 0;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: ${theme.colors.gray[800]};

    @media (max-width: 768px) {
      font-size: 13px;
    }

    &::placeholder {
      color: ${theme.colors.gray[400]};
    }
  }

  svg {
    color: ${theme.colors.gray[400]};
    margin-right: 8px;
    flex-shrink: 0;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0 20px;
  height: 48px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  @media (max-width: 768px) {
    height: 44px;
    padding: 0 16px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  &:hover {
    background: ${theme.colors.primary[600]};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
