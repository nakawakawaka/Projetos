import Button from 'component/Button';
import './NovoVideo.css'
import Input from "component/Input";
import ListaSuspensa from 'component/ListaSuspensa';
import TextArea from 'component/TextArea';

export default function NovoVideo() {
  return(
    <section className='novoVideo'>
      <h1>Novo Video</h1>

      <form>
        <Input placeholder='Título' />
        <Input placeholder='Link do vídeo' />
        <Input placeholder='Link da imagem do vídeo' />
        <ListaSuspensa />
        <TextArea placeholder='Descricão' />
        <Input placeholder='Código de segurança' />

        <div className='btnContainer'>
          <div>
            <Button texto="Salvar" />
            <Button texto="Limpar" tipo="limpar" />
          </div>

          <Button texto="Nova Categoria" to="/novacategoria" />
        </div>

      </form>
    </section>
  )
}