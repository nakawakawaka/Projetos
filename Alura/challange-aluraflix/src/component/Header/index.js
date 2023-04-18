import './Header.css'
import logo from 'assets/img/logo.png'
import { Link } from 'react-router-dom';
import Button from 'component/Button';

const Header = () => {
  return (
    <section className='header'>
      <Link to={'/'}>
        <img src={logo} alt='logo Aluraflix' />
      </Link>

      <Button texto='Novo vídeo' tipo='headerBtn'  to={`/novovideo`}/>
    </section>
  )
}

export default Header;