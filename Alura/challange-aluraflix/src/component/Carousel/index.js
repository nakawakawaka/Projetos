import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import thumbnail from 'assets/img/thumbnail.avif'

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items:1 },
  568: { items:3, itemsFit: 'contain' },
  1024: { items:6 }
}

const items = [
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,
  <img src={thumbnail} onDragStart={handleDragStart} role="presentation" alt='' width="300" height="300" />,


]

export default function Carousel() {
  return (
  <AliceCarousel 
  items={items} 
  mouseTracking 
  disableDotsControls 
  infinite
  responsive={responsive}

  />
  )
}