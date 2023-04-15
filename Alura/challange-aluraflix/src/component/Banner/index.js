import Button from '../Button';
import './Banner.css'

const Banner = ({ categoria, titulo, descricao, img }) => {
  return (
    <section className='banner' style={{backgroundImage:`url${img}`}}>
      <div className='bannerInfo'>
        <Button texto={categoria} tipo='bannerBtn' />
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
      <div className='thumbnail'>
        <img src={img} alt={titulo}></img>
      </div>
    </section>
  )
}

export default Banner;