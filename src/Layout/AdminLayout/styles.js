import styled from "styled-components";
import { theme } from "../../styles/theme";



export const Container = styled.div`
display: grid;
grid-template-columns: minmax(180px, 180px) 1fr;

main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.gray[100]};
    overflow-y: auto;
}

section {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 1200px;
    width: 100%;

}
`