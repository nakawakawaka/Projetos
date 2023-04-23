import Banner from 'component/Banner';
import thumbnail from 'assets/img/thumbnail.avif'
import Carousel from 'component/Carousel';

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'

export default function Home() {

  return (
    <div className='home'>
      <Banner
        categoria='Fron-end'
        titulo='titulo'
        descricao={lorem}
        img={thumbnail}
      />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  )
}