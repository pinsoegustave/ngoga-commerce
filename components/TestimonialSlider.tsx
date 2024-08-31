import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const TestimonialSlider = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
>
    {/* Client Review */}
    <ClientReview image="/pro1.webp" name="Bob Pro" role="Music Producer" />
    <ClientReview image="/pro2.webp" name="J.K Rowling" role="Book Author" />
    <ClientReview image="/pro4.webp" name="Home Paul" role="Architect" />
</Carousel>
  )
}

export default TestimonialSlider;