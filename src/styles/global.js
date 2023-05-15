import { createGlobalStyle } from "styled-components";

({theme}) => theme.COLORS.BACKGROUND_800;
export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    
}

:root{
    font-size: 10px;

    --color-primary: ${({theme}) => theme.COLORS.ORANGE};
    --color-white:${({theme}) => theme.COLORS.WHITE} ;
    --color-gray-100: ${({theme}) => theme.COLORS.GRAY_100};
    --color-gray-300:  ${({theme}) => theme.COLORS.GRAY_300};
    --color-red:  ${({theme}) => theme.COLORS.RED};
    
    --bg-color-900: ${({theme}) => theme.COLORS.BACKGROUND_900};
    --bg-color-800: ${({theme}) => theme.COLORS.BACKGROUND_800};
    --bg-color-700: ${({theme}) => theme.COLORS.BACKGROUND_700} ;

  
}

body{
  
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
   
}

body, input, button, textarea {
    font-family: 'Kanit', sans-serif;
    font-size:1.6rem;
}
a{
    text-decoration: none;
}

button, a{
    cursor:pointer;
    transition: filter 0.2s;
}

ul{
    list-style: none;
}

button:hover, a:hover{
    filter: brightness(0.9);

}

::-webkit-scrollbar {
  width: .5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:${({theme}) => theme.COLORS.ORANGE};
  border-radius: 30rem;
}
`;