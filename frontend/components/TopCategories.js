import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import Link from 'next/link';
import { Navigation } from "swiper";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';




export default function TopCategories() {

    return (
        <>
            <div className="shopTopCatDiv">
                <div className="container">
                    <div className="head">Shop Top Categories</div>
                    <div className="catCarousel">
                        <Swiper
                            breakpoints={{
                                700: {
                                    slidesPerView: 4
                                }
                            }}
                            navigation={{
                                nextEl: '.next',
                                prevEl: '.prev',
                            }}

                            modules={[Navigation]}

                            spaceBetween={30}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="topSlider"
                        >
                            <SwiperSlide>
                                <div className="catBox">
                                    <Link href={'/about'} style={{ textDecoration: 'none' }}>
                                        <img src="/images/bag1.jpg" alt="banner image" className="w-100 bannerImg" />
                                        <div className="catName">
                                            All backpacks
                                        </div>

                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="catBox">
                                    <img src="/images/bag2.png" alt="banner image" className="w-100 bannerImg" />
                                    <div className="catName">
                                        Travel & Luggage
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="catBox">
                                    <img src="/images/bag3.png" alt="banner image" className="w-100 bannerImg" />
                                    <div className="catName">
                                        Ladies Handbags
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="catBox">
                                    <img src="/images/bag4.png" alt="banner image" className="w-100 bannerImg" />
                                    <div className="catName">
                                        Travel Accessories
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="catBox">
                                    <img src="/images/bag1.jpg" alt="banner image" className="w-100 bannerImg" />
                                    <div className="catName">
                                        All backpacks
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="navBtns">
                            <div className="navBtn prev">
                            <FaAngleLeft className='iconn'/>
                            </div>
                            <div className="navBtn next">
                            <FaAngleRight className='iconn' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
