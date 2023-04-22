import styled from 'styled-components';
import Button from 'component/Button';
import BtnSalvarLimpar from 'component/BtnSalvarLimpar';
import { MenuItem, TextField, TextareaAutosize, createTheme, ThemeProvider } from '@mui/material';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function NovoVideo() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Form>
        <h1>Novo Video</h1>
        <TextField label='Título' variant="filled" margin='normal' />
        <TextField label='Link do vídeo' variant="filled" margin='normal' />
        <TextField label='Link da imagem do vídeo' variant="filled" margin='normal' />
        <TextField
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
          margin='normal'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextareaAutosize aria-label="Descrição" placeholder='Descrição' minRows={7} />
        <TextField label='Código de segurança' variant="filled" margin='normal' />

        <BtnContainer>
          <BtnSalvarLimpar />

          <Button texto="Nova Categoria" to="/novacategoria" />
        </BtnContainer>

      </Form>
    </ThemeProvider>
  )
}