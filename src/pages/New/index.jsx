import { Container, Form } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../../components/header'
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import {Section} from "../../components/Section";
import {Button} from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleBack(){
    
        navigate(-1)
      }

    const navigate = useNavigate()
    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }
    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted ))
        setNewLink("")
    }
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted ))
        setNewTag("")
    }

    async function handleNewNote(){
        if(!title){
            return alert("digite um titulo")
        }
        
        if(newTag){
            return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar.")
        }
        if(newLink){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.")
        }
        await api.post("/notes",{
            title,
            description,
            tags,
            links
        })

        alert("Nota Criada com sucesso!")
        navigate(-1)
    }

     return(
        <Container>

            <Header/>
                    <main>
                    <Form>
                    <header>

                        <h1>
                            Criar Nota
                        </h1>

                       
                            <ButtonText 
                            title="Voltar" 
                            onClick={handleBack}
                            />
                    

                    </header>
                        <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                        />
                        <Section title='Links úteis'>
                           {
                            links.map((link, index) =>(
                                <NoteItem 
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                                />
                            ))
                           }
                            <NoteItem 
                            isNew 
                            placeholder ="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                            />
                        </Section>
                        <Section title='Marcadores'>
                            <div className="tags">
                            {
                            tags.map((tag, index) =>(
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                           }
                            <NoteItem 
                            isNew 
                            placeholder ="Nova Tag"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                            />
                            </div>
                        </Section>
                        <Button 
                        title="salvar"
                        onClick={handleNewNote}
                        />
                    </Form>
                    </main>
        </Container>
     )
}