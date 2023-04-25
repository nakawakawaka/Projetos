
import styled from '@emotion/styled';
import Button from '../Button';
import './Banner.css'
import ReactPlayer from 'react-player';

const BannerContainer = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
`


const Banner = ({ categoria, titulo, descricao, img, url }) => {
  return (
    <BannerContainer img={img} >
      <Overlay className='container'>
        <div className='bannerInfo'>
          <Button texto={categoria} tipo='bannerBtn' />
          <h1>{titulo}</h1>
          <p>{descricao}</p>
        </div>

        <ReactPlayer
          url={url}
          width={640}
          height={360}
          controls
        />

      </Overlay>
    </BannerContainer>
  )
}

export default Banner;