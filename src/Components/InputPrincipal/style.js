import styled from "styled-components";

export const Inputname = styled.div`
    & p{
        font-size: 0.8em;
    }

    & input{
        border: 1px solid #ccc;
        outline-color: ${ props => props.isString ? 'red' : 'hsl(278, 80%, 40%)'};
        padding: 10px 16px;
        border-radius: 10px;
        margin-right: 4px;
        width: 350px;
        font-size: 0.98em;
    }
`;