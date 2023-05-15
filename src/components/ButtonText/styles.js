import styled from "styled-components";


export const Container = styled.button`

background: none;

color: ${({ isActive}) => isActive ? 'var(--color-primary)': 'var(--color-gray-100)'};

border: none;
font-size: 1.6rem;

`;

