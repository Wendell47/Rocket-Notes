import {BsBoxArrowRight} from 'react-icons/bs';
import { Container, Profile , Logout} from "./styles";


export function Header(){

    return(
        <Container>
            <Profile>
                <img src="https://github.com/Wendell47.png" alt="foto de perfil" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Wendel Araujo</strong>
                </div>
            </Profile>

            <Logout>
                <BsBoxArrowRight/>
            </Logout>
        </Container>
    )
}