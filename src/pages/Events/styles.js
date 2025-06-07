import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div``

export const ProductImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 16px;
background-color:${theme.colors.primary[100]};
`

export const EditButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.primary[500]};
width: 30px;
border: none;
border-radius: 10px;
margin: 0 auto;
transition: all ease 0.4s;


> svg {
    fill: ${theme.colors.gray[700]};
    height: 22px;
    width: 22px;
}

&:hover{
    background-color: ${({theme}) => theme.colors.error[500]};
}
`