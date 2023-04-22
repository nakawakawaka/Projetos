/* eslint-disable import/no-anonymous-default-export */
import Button from "component/Button";
import styled from "styled-components";

const BtnSalvarLimpar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 11rem;
`

export default () => {
  return (
    <BtnSalvarLimpar>
      <Button texto="Salvar"/>
      <Button texto="Limpar" tipo="limpar" />
    </BtnSalvarLimpar>
  )
}