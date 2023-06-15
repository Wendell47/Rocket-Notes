import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;

grid-template-columns: 250px auto;
grid-template-rows: 105px  128px auto 64px;
grid-template-areas:

"brand header"
"menu search"
"menu content"
"newnote content";

background-color: var(--bg-color-800);


`;
export const Brand = styled.div`

grid-area: brand;

display:flex;
justify-content: center;
align-items: center;

border-bottom: 1px solid var(--bg-color-700);

background-color: var(--bg-color-900);

> h1{
    font-size:2.4rem;
    color:var(--color-primary)
}
`;
export const Menu = styled.ul`
    grid-area: menu;
    list-style: none;
    background-color: var(--bg-color-900);

    padding-top: 64px;
    text-align: center;

    > li{
         margin-bottom: 24px;
         list-style: none;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding:  64px 64px 0;
`;
export const Content = styled.div`
grid-area: content;

`;

export const NewNote =styled(Link)`
grid-area: newnote;
    background-color: var(--color-primary);
    color: var(--bg-color-900);
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        margin-right: 8px;
    }
`;