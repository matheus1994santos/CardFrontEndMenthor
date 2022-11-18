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

            @media (max-width: 410px){
                width: 342px;
            }
        }

    @media (max-width: 410px){
        max-width: 288px;
        gap: 10px;
        margin-left: -66px;
        margin-top: 80px;
    }
   }
`;

export const StyleCongratulations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 488px; 
    margin-top: 28px;
    /* border: 1px solid; */

    & img{
        width: 90px;
    }

    & p{
        font-size: 2.1em;
    }

    & span{
        font-size: 1.0em;
        color: #999696;
    }

    & button{
        width: 360px;
        padding: 12px 0;
        border-radius: 8px;
        margin-top: 34px;
        border: none;
        background-color: hsl(278, 68%, 11%);
        color: #fff;
        font-weight: bold;
        font-size: 0.9em;
        cursor: pointer;

         @media (max-width: 410px){
            width: 342px;
        }
    }
`;