import styled from "styled-components";

export const CVC = styled.div`
    position: relative;

    & p{
        font-size: 0.8em;
    }

    & input{
        border: 1px solid #ccc;
        outline-color:  ${(props) => !props.isValid ? 'hsl(278, 80%, 40%)' : 'red'};
        padding: 10px 16px;
        border-radius: 10px;
        margin-right: 4px;
        font-size: 0.98em;
        width: 135px;

        @media (max-width: 410px){
            width: 90px;
        }
    }

    & span{
        position: absolute;
        font-size: 0.81em;
        top: 84px;
        left: 2px;
        color: hsl(0, 100%, 66%);
    }
`;