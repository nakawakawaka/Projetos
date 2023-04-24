import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 3, itemsFit: 'contain' },
  1024: { items: 6 }
}

export default function Carousel({ videos }) {
  return (
    <AliceCarousel
      items={videos.map(video => (<img key={video.id} src={video.img} onDragStart={handleDragStart} alt={video.titulo} role="presentation" width="320" height="186" />))}
      mouseTracking
      disableDotsControls
      infinite
      responsive={responsive}
    />
  )
}