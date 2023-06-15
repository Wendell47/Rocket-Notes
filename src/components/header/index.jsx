import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {BsBoxArrowRight} from 'react-icons/bs';
import { Container, Profile , Logout} from "./styles";
import{useAuth} from '../../hooks/auth'
import { api } from '../../services/api';

export function Header(){
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="foto de perfil" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <BsBoxArrowRight/>
            </Logout>
        </Container>
    )
}