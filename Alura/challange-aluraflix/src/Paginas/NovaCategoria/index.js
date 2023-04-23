import styled from "styled-components";
import { TextField, TextareaAutosize, ThemeProvider, createTheme } from "@mui/material";
import BtnSalvarLimpar from "component/BtnSalvarLimpar";
import { useState } from "react";
import { videosService } from "Service/videos-service";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})


export default function NovaCategoria() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cor, setCor] = useState('');
  const [codigo, setCodigo] = useState('');

  return (
    <ThemeProvider theme={darkTheme}>
      <Form onSubmit={event => {
        event.preventDefault();
        videosService.cadastraCategoria(nome, descricao, cor, codigo)
      }}>
        <h1>Nova Categoria</h1>
        <TextField
          onChange={(event) => setNome(event.target.value)}
          value={nome}
          label="Nome"
          variant="filled"
          margin='normal'
          fullWidth
        />
        <TextareaAutosize
          onChange={(event) => setDescricao(event.target.value)}
          value={descricao}
          aria-label="Descrição"
          placeholder='Descrição'
          minRows={7}
        />
        <input
          onChange={(event) => setCor(event.target.value)}
          value={cor}
          type="color"
        />
        <TextField
          onChange={(event) => setCodigo(event.target.value)}
          value={codigo}
          label='Código de segurança'
          variant="filled"
          margin='normal'
        />
        <BtnSalvarLimpar />
      </Form>
    </ThemeProvider>
  )
}