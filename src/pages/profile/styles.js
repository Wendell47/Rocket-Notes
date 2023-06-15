import styled from "styled-components";



export const Container = styled.div`

    width: 100%;

    > header{
        width: 100%;
        height: 144px;

        background: var(--bg-color-900);

        display: flex;
        align-items: center;
    padding: 0 124px;

    svg{
        color: var(--color-gray-100);
        font-size:2.4rem;
    }

    button{
      background: none ;
      border: none;
    }
}


`;


export const Form = styled.form`

max-width: 340px;
margin: 30px  auto 0;

> div:nth-child(4){
    margin-top: 24px;
}
`;

export const Avatar = styled.div`

position: relative;
margin: -124px auto 32px;

width: 186px;
height: 186px;

> img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
}

> label {

    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{

        display: none;
    }

    svg{

        width: 2.0rem;
        height: 2.0rem;
        color: var(--bg-color-800);
    }
}
`;