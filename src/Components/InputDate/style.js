import styled from "styled-components";

export const InputData = styled.div`
    position: relative;

    & p{
        font-size: 0.8em;
    }

    & div{
        display: flex;
        gap: 8px;

        & .month{
            outline-color:  ${(props) => !props.isValidMonth ? 'hsl(278, 80%, 40%)' : 'red'};
        }

        & .year{
            outline-color:  ${(props) => !props.isValidYear ? 'hsl(278, 80%, 40%)' : 'red'};
        }

        & input{
            border: 1px solid #ccc;
            padding: 10px 16px;
            border-radius: 10px;
            margin-right: 4px;
            font-size: 0.98em;
            width: 60px;
        }

        & span{
            position: absolute;
            font-size: 0.81em;
            top: 84px;
            left: 2px;
            color: hsl(0, 100%, 66%);
        }

        & p{
            position: absolute;
            font-size: 0.81em;
            top: 71px;
            right: 5px;
            color: red;            
        }
    }
`;