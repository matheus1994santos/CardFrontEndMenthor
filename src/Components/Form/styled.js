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
            

            & div > input{
            width: 60px;
            }
        }

        & div{
            & p{
                font-size: 0.8em;
            }

            & input{
                border: 1px solid #ccc;
                outline: none;
                padding: 10px 16px;
                border-radius: 10px;
                margin-right: 4px;
                width: 350px;
                font-size: 0.98em;
            }
        }

        & div.CVC{
            & p{
                font-size: 0.8em;
            }

            & input{
                border: 1px solid #ccc;
                outline: none;
                padding: 10px 16px;
                border-radius: 10px;
                margin: 0px;
                width: 130px;
                font-size: 0.98em;
            }
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