import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const images = [
    {
      "id": "102",
      "author": "Ben Moore",
      "width": 4320,
      "height": 3240,
      "url": "https://unsplash.com/photos/pJILiyPdrXI",
      "download_url": "https://picsum.photos/id/102/4320/3240"
    },
    {
      "id": "103",
      "author": "Ilham Rahmansyah",
      "width": 2592,
      "height": 1936,
      "url": "https://unsplash.com/photos/DwTZwZYi9Ww",
      "download_url": "https://picsum.photos/id/103/2592/1936"
    },
    {
      "id": "104",
      "author": "Dyaa Eldin",
      "width": 3840,
      "height": 2160,
      "url": "https://unsplash.com/photos/2fl-ocJ5MOA",
      "download_url": "https://picsum.photos/id/104/3840/2160"
    },
    {
      "id": "106",
      "author": "Arvee Marie",
      "width": 2592,
      "height": 1728,
      "url": "https://unsplash.com/photos/YnfGtpt2gf4",
      "download_url": "https://picsum.photos/id/106/2592/1728"
    },
    {
      "id": "107",
      "author": "Lukas Schweizer",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/9VWOr22LhVI",
      "download_url": "https://picsum.photos/id/107/5000/3333"
    },
    {
      "id": "108",
      "author": "Florian Klauer",
      "width": 2000,
      "height": 1333,
      "url": "https://unsplash.com/photos/t1mqA3V3-7g",
      "download_url": "https://picsum.photos/id/108/2000/1333"
    },
    {
      "id": "109",
      "author": "Zwaddi",
      "width": 4287,
      "height": 2392,
      "url": "https://unsplash.com/photos/YvYBOSiBJE8",
      "download_url": "https://picsum.photos/id/109/4287/2392"
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto gap-5 bg-slate-400'>
      <h1 className='text-4xl'>Carousel using react-responsive-carousel</h1>
      <div className='mx-auto w-[1000px]'>
        <Carousel 
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={1000}
          autoPlay={true}
        >
          {images.map((image) => (
            <img src={image.download_url} alt={image.url} className='w-[400px] h-[400px]'/>
          ))}
        </Carousel>
      </div>
      <h1 className='text-4xl'>Carousel Using React-Slick</h1>
      <div className="w-3/4 mx-auto mt-10">
          <Slider {...settings}>
            {images.map((image) => (
              <img src={image.download_url} alt={image.url} className='w-[400px] h-[400px]'/>
            ))}
          </Slider>
      </div>
    </div>
  )
}

export default App
