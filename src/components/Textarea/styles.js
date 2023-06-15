import styled from 'styled-components'

export const Container = styled.textarea`

width: 100%;
height: 150px;

background-color: var(--bg-color-900);
color: var(--color-white);

border:none;
resize: none;

margin-bottom: 8px;
border-radius: 10px;
padding: 16px;

&::placeholder{
    color:var(--color-gray-300);
}
`