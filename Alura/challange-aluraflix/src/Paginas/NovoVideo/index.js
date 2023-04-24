import { useState } from 'react';
import { videosService } from 'Service/videos-service';
import { MenuItem, TextField, TextareaAutosize, createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import Button from 'component/Button';
import BtnSalvarLimpar from 'component/BtnSalvarLimpar';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function NovoVideo({ categoria }) {
  const [titulo, setTitulo] = useState('');
  const [url, setUrl] = useState('');
  const [img, setImg] = useState('');
  const [categSelec, setCategSelec] = useState('');
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');

  return (
    <ThemeProvider theme={darkTheme}>
      <Form onSubmit={event => {
        event.preventDefault();
        videosService.cadastraVideo(titulo, url, img, categSelec, descricao, codigo);
      }}>
        <h1>Novo Video</h1>
        <TextField
          onChange={(event) => setTitulo(event.target.value)}
          value={titulo}
          label='Título'
          variant="filled"
          margin='normal'
        />
        <TextField
          onChange={(event) => setUrl(event.target.value)}
          value={url}
          label='Link do vídeo'
          variant="filled"
          margin='normal'
        />
        <TextField
          onChange={(event) => setImg(event.target.value)}
          value={img}
          label='Link da imagem do vídeo'
          variant="filled"
          margin='normal' />

        <TextField
          onChange={event => setCategSelec(event.target.value)}
          value={categSelec}
          select
          label="Categoria"
          defaultValue=""
          helperText="Porfavor selecione uma categoria"
          variant="filled"
          margin='normal'
        >
          {categoria.map((option) => (
            <MenuItem key={option.id} value={option.nome}>
              {option.nome} 
            </MenuItem>
          ))}
        </TextField>

        <TextareaAutosize
          onChange={(event) => setDescricao(event.target.value)}
          value={descricao}
          aria-label="Descrição"
          placeholder='Descrição'
          minRows={7}
        />
        <TextField
          onChange={(event) => setCodigo(event.target.value)}
          value={codigo}
          label='Código de segurança'
          variant="filled"
          margin='normal'
        />

        <BtnContainer>
          <BtnSalvarLimpar />

          <Button texto="Nova Categoria" to="/novacategoria" />
        </BtnContainer>

      </Form>
    </ThemeProvider>
  )
}