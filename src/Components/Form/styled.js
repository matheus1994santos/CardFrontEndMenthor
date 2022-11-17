import styled from "styled-components";

export const FormContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100%;

   & form{
    display: flex;
    flex-direction: column;
    max-width: 388px;
    gap: 20px;

        & section{
            display: flex;
            gap: 15px;
        }

        & button{
            padding: 12px 0;
            border-radius: 8px;
            margin-top: 34px;
            border: none;
            background-color: hsl(278, 68%, 11%);
            color: #fff;
            font-weight: bold;
            font-size: 0.9em;
            cursor: pointer;
        }
   }
`;