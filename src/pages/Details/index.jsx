import { Container, Links, Content} from "./styles";


import { Tag } from "../../components/Tag";
import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";


export  function Details (){

  return(
    <Container>
    <Header/>
    <main>
      <Content>

   
<ButtonText title="Excluir Nota"/>

    <h1>
      Introduction
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate facere, eligendi hic corrupti debitis tempora id et necessitatibus culpa officia repellat repellendus cum consequatur reiciendis obcaecati unde dolore iure eius!
    </p>
    <Section title="Link úteis">
      <Links>
        <li><a href="#">Item 1</a></li>
      
        <li><a href="#">Item 1</a></li>
      
        <li><a href="#">Item 1</a></li>
      
      </Links>
    </Section>

    <Section title="Tags">
      <Tag title="Code" />
      <Tag title="NodeJS" />
    </Section>
<Button title="Voltar" />

</Content>
    </main>

    </Container>

    
  );
};