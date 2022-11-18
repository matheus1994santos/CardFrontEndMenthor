import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    height: 100vh;

    @media (max-width:410px){
        flex-direction: column;
    }
`;