import styled from "styled-components";

export const Inputnum = styled.div`
    
    & p{
        font-size: 0.8em;
    }

    & input{
        border: 1px solid #ccc;
        padding: 10px 16px;
        border-radius: 10px;
        margin-right: 4px;
        width: 350px;
        font-size: 0.98em;
        outline-color: ${(props) => !props.validacao ? 'hsl(278, 80%, 40%)' : 'red'};
    }

    & span{
        font-size: 0.8em;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: red;
    }
`;