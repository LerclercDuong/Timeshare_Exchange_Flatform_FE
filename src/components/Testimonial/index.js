import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonial = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:566,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
    <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p>
                Minh Duc noi rang Minh Duc very cold, Minh Duc la 1 LGBT chinh hieu voi 
                nhung tinh cam cua minh cho anime. Ngoai ra Minh Duc con la mot wibu chinh
                hieu.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <h5 className='mb-0 mt-3'>Nguyen Vu</h5>
                <p>Senior Developer</p>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Minh Duc noi rang Minh Duc very cold, Minh Duc la 1 LGBT chinh hieu voi 
                nhung tinh cam cua minh cho anime. Ngoai ra Minh Duc con la mot wibu chinh
                hieu.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <h5 className='mb-0 mt-3'>Xuan Tinh</h5>
                <p>Hacker Sex</p>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Minh Duc noi rang Minh Duc very cold, Minh Duc la 1 LGBT chinh hieu voi 
                nhung tinh cam cua minh cho anime. Ngoai ra Minh Duc con la mot wibu chinh
                hieu.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <h5 className='mb-0 mt-3'>Minh Duc</h5>
                <p>Hacker RAT</p>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Minh Duc noi rang Minh Duc very cold, Minh Duc la 1 LGBT chinh hieu voi 
                nhung tinh cam cua minh cho anime. Ngoai ra Minh Duc con la mot wibu chinh
                hieu.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <h5 className='mb-0 mt-3'>Minh Duc</h5>
                <p>Hacker RAT</p>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Minh Duc noi rang Minh Duc very cold, Minh Duc la 1 LGBT chinh hieu voi 
                nhung tinh cam cua minh cho anime. Ngoai ra Minh Duc con la mot wibu chinh
                hieu.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <h5 className='mb-0 mt-3'>Minh Duc</h5>
                <p>Hacker RAT</p>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial