import React from 'react'
import { CARAUSEL_IMG_CDN } from '../constants'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max:3000, min: 1024 },
          items: 2.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='banner'>
    <h2>Best offers for you</h2>
    <Carousel responsive={responsive} infinite={true}
    autoPlay={true}
  autoPlaySpeed={1500}>
    <div className='banner-img'>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/70712689205fe5b828df8e0ac94ce70f" alt="banner" />
    </div>
    <div className='banner-img'>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/345b2c3e5d0064046c07b0fe01de8e66" alt="banner" />
    </div>
    <div className='banner-img'>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3" alt="banner" />
    </div>
    <div className='banner-img'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7e0d4dc0794fba64f5d9944900bcac09" alt="banner" />
    </div>
    <div className='banner-img'>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/345b2c3e5d0064046c07b0fe01de8e66" alt="banner" />
    </div>
    </Carousel>  
    </div>

  )
}

export default Banner