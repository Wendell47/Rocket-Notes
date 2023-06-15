import styled from "styled-components";
import backgroundImg from "../../assets/img1.jpeg"

export const Container = styled.div `
height: 100vh;

display: flex;

align-items: stretch;

background-color: var(--bg-color-800);
`;

export const Form = styled.form`
padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

>h1{
    font-size: 4.8rem;
    color: var(--color-primary);
}

>h2{
    font-size: 2.4rem;
    margin:48px 0;

}

>p {
    font-size: 1.4rem;
    color:var(--color-gray-100);
    

}

> a{
    margin-top: 124px;
    color: var(--color-primary);
}
`

export const BackgroundImg = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center, var(--bg-color-900);

background-size:cover;
background-blend-mode:soft-light;
`;