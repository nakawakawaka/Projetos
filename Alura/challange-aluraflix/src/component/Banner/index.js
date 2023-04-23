
import styled from '@emotion/styled';
import Button from '../Button';
import './Banner.css'

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 100vh;
  background-image: url(${({ img }) => img});
`

const Thumbnail = styled.img`
  width: 40rem;
  height: 21rem;
  display: block;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Banner = ({ categoria, titulo, descricao, img }) => {
  return (
    <BannerContainer>
      <div className='bannerInfo'>
        <Button texto={categoria} tipo='bannerBtn' />
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>

        <Thumbnail src={img} alt={titulo} />

    </BannerContainer>
  )
}

export default Banner;