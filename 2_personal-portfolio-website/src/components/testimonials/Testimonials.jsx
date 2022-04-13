import React from "react"
import './testimonials.css'

import { AVTR1, AVTR2, AVTR3, AVTR4 } from './import'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials () {
    const testimonialList = [
        {
            id: 1,
            avartar: AVTR1,
            name: 'Client Name 1',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero dicta pariatur, ab nisi fugit impedit delectus est temporibus aliquam?'
        },
        {
            id: 2,
            avartar: AVTR2,
            name: 'Client Name 2',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium repellendus voluptatibus perspiciatis unde, enim placeat laudantium totam soluta necessitatibus?'
        },
        {
            id: 3,
            avartar: AVTR3,
            name: 'Client Name 3',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis mollitia laboriosam facilis architecto tenetur error sequi nesciunt vitae culpa animi.'
        },
        {
            id: 4,
            avartar: AVTR4,
            name: 'Client Name 4',
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias hic provident dicta maxime quod sapiente nihil cupiditate illum natus eum!'
        },
    ]

    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonialList.map(({id, avartar, name, review}) => (
                    <SwiperSlide className="testimonial" key={id}>
                        <div className="client__avatar">
                            <img src={avartar} alt={`avatar ${id}`} />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials