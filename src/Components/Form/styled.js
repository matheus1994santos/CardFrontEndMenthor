import styled from "styled-components";

export const FormContainer = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100%;

   & form{
    display: flex;
    flex-direction: column;

        & section{
            display: flex;
            gap: 15px;

            & input[type=text]{
            width: 60px;
            }
        }
   }
`;