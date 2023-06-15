import { useState } from "react";
import { Container, } from "./styles";
import { Link } from "react-router-dom";
import {FiArrowLeft, FiMail, FiUser, FiLock, FiCamera} from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Form } from "./styles";
import { Avatar } from "./styles";
import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function Profile(){
    const {user, updateProfile}  = useAuth()
    
    const [name, setName]= useState(user.name)
    const [email, setEmail]= useState(user.email)
    const [passwordOld, setPasswordOld]= useState()
    const [passwordNew, setPasswordNew]= useState()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
 
    async function handleUpdate(){
        const updated ={
            name,
            email,
            password : passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign( user, updated)
        await updateProfile({user:userUpdated, avatarFile})
    }

    const navigate = useNavigate()

    function handleBack(){
    
        navigate(-1)
      }


    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    return(
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                <FiArrowLeft/>

                </button>
            </header>

        <Form>
            <Avatar>
                <img 
                src={avatar} 
                alt="Foto de perfil do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera/>
                <input 
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
                />
                </label>
            </Avatar>
            
            <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange = {e => setName(e.target.value)}
            >
            
            </Input>
            <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange = {e => setEmail(e.target.value)}
            >
            
            </Input>
            <Input 
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}
            onChange = {e => setPasswordOld(e.target.value)}
            >
            
            </Input>
            <Input 
            placeholder="Senha Nova"
            type="password"
            icon={FiLock}
            onChange = {e => setPasswordNew(e.target.value)}
            >
            
            </Input>
            <Button title="Salvar" onClick = {handleUpdate}/>
        </Form>
        </Container>
    )
}