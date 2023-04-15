import './Header.css'
import '../VariaveisCss/Variaveis.css'
import Button from '../Button'

const Header = () => {
  return (
    <section className='header'>
        <img src='img/logo.png' alt='logo Aluraflix'/>
        <Button texto='Novo vídeo' tipo='headerBtn' />
    </section>
  )
}

export default Header;