/* eslint-disable import/no-anonymous-default-export */
import { Button } from "@mui/material";
import styled from "styled-components";

const BtnSalvarLimpar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 11rem;
`

export default () => {
  return (
    <BtnSalvarLimpar>
      <Button variant="contained" size="large" type="submit">
        Salvar
      </Button>
      <Button variant="outlined" size="large">
        Limpar
      </Button>
    </BtnSalvarLimpar>
  )
}