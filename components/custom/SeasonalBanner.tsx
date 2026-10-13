'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 'banner-web',
    image: '/banner-web.jpg',
    alt: 'Colección de calzado Vary Shoes',
  },
  {
    id: 'banner-web2',
    image: '/banner-web2.jpg',
    alt: 'Calzado deportivo',
  },
];

export default function SeasonalBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    dotsClass: 'slick-dots seasonal-dots',
  };

  return (
    <section id="seasonal" className="relative bg-black text-white">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[40vh] min-h-[280px] sm:h-[55vh] sm:min-h-[420px] lg:h-[70vh] lg:min-h-[520px] p-4 sm:p-6 lg:p-8"
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .seasonal-dots {
          display: flex !important;
          justify-content: center;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
        }
        .seasonal-dots li {
          margin: 0;
        }
        .seasonal-dots li button {
          width: 3rem;
          height: 0.375rem;
          padding: 0;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .seasonal-dots li.slick-active button {
          width: 5rem;
          background: #ffffff;
        }
        .seasonal-dots li button:before {
          display: none;
        }
      `}</style>
    </section>
  );
}
