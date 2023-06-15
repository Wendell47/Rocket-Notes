import styled from "styled-components";

export const Container = styled.div`


    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: var(--bg-color-900);
    color: var(--color-gray-300);

    margin-bottom: 8px;
    border-radius: 10px;



    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color:var(--color-white);

        background: transparent;
        border: 0;

        &::placeholder{
            color: var(--color-gray-300);
            
        }
        &:focus-visible{
            outline: none;
        }
    }
    > svg{
        margin-left: 16px;
    }
`;