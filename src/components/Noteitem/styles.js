import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
background-color: ${({ isNew}) => isNew ? "transparent" : "var(--bg-color-900)"};
color: var(--color-gray-300);

border:${({ isNew}) => isNew ? "1px dashed var(--color-gray-300)" : "none"};

margin-bottom: 8px;
border-radius: 10px;
padding-right: 16px;

> button{
    border:none;
    background:none;

}

.button-delete{
    color: var(--color-red);
}
.button-add{
    color: var(--color-primary);
}
    >input {

        height: 56px;
        width: 100%;

        padding: 12px;

        color: var(--color-white);
        background: transparent;

        border:none;

        &::placeholder{
            color: var(--color-gray-300);
            
        }
    }

`;