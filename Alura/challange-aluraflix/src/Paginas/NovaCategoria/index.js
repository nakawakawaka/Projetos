import styled from "styled-components";
import { TextField, TextareaAutosize, ThemeProvider, createTheme } from "@mui/material";
import BtnSalvarLimpar from "component/BtnSalvarLimpar";

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
  return (
    <ThemeProvider theme={darkTheme}>
    <Form>
      <h1>Nova Categoria</h1>
      <TextField label="Nome" variant="filled" margin='normal' fullWidth />
      <TextareaAutosize aria-label="Descrição" placeholder='Descrição' minRows={7} />
      <input type="color" />
      <TextField label='Código de segurança' variant="filled" margin='normal' />
      <BtnSalvarLimpar />
    </Form>
    </ThemeProvider>
  )
}