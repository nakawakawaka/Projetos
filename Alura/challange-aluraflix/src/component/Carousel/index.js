import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { videosService } from 'Service/videos-service';
import { useEffect, useState } from 'react';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items:1 },
  568: { items:3, itemsFit: 'contain' },
  1024: { items:6 }
}

export default function Carousel() {
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    videosService.listaVideos()
      .then(data => setThumbnail(data))
      .catch(err => console.log(err))
  }, [])

  return (
  <AliceCarousel 
  items={thumbnail.map(video => (<img key={video.id} src={video.img} onDragStart={handleDragStart} alt={video.titulo} role="presentation" width="320" height="186" />))} 
  mouseTracking 
  disableDotsControls 
  infinite
  responsive={responsive}
  />
  )
}