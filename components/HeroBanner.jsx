import React from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css' // Import Swiper styles
import Image from 'next/image'
import Link from 'next/link'
import { CgShoppingCart } from 'react-icons/cg'
import headerImg from '../src/assets/Dac.png'

// Initialize Swiper core components
SwiperCore.use([, Pagination, Autoplay])

const HeroBanner = () => {
  return (
    <div className='hero-banner'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <header className='header'>
            <div className='header-left-side'>
              <div className='header-content'>
                <span>MYGA</span>
                <h1>Hospitality</h1>
                <p>
                  Light due to your mood and feel the place with our elegant and
                  high class lights for hospitality spaces
                </p>
                <Link href='/products'>
                  <button className='btn' type='button'>
                    <CgShoppingCart size={26} /> Start Shopping
                  </button>
                </Link>
              </div>
            </div>
            <div className='header-right-side'>
              <div className='header-circle'>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <Image
                      className='header-img'
                      src={headerImg}
                      width={500}
                      height={500}
                      alt='header image'
                    />
                  </SwiperSlide>
                  {/* Add more SwiperSlides for additional images */}
                </Swiper>
              </div>
            </div>
          </header>
        </SwiperSlide>
        {/* Add more SwiperSlides for additional banners */}
        <SwiperSlide>
          <header className='header'>
            <div className='header-left-side'>
              <div className='header-content'>
                <span>MYGA</span>
                <h1>Fashion & Retail</h1>
                <p>
                  Retail lighting does much more than just illuminate your
                  space. Get different moods and options with our various
                  collection.
                </p>
                <Link href='/products'>
                  <button className='btn' type='button'>
                    <CgShoppingCart size={26} /> Start Shopping
                  </button>
                </Link>
              </div>
            </div>
            <div className='header-right-side'>
              <div className='header-circle'>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <Image
                      className='header-img'
                      src={headerImg}
                      width={500}
                      height={500}
                      alt='header image'
                    />
                  </SwiperSlide>
                  {/* Add more SwiperSlides for additional images */}
                </Swiper>  
              </div>
            </div>
          </header>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroBanner
