import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image_carousel1 from "~/assets/image_carousel1.png";
import image_carousel2 from "~/assets/image_carousel2.png";
import image_carousel3 from "~/assets/image_carousel3.png";
import image_carousel4 from "~/assets/image_carousel4.png";
import image_carousel5 from "~/assets/image_carousel5.png";
import image_carousel6 from "~/assets/image_carousel6.png";
import image_carousel7 from "~/assets/image_carousel7.png";
import image_carousel8 from "~/assets/image_carousel8.png";
import image_carousel9 from "~/assets/image_carousel9.png";

const images = [
    { src: image_carousel1, alt: "Ảnh carousel 1" },
    { src: image_carousel2, alt: "Ảnh carousel 2" },
    { src: image_carousel3, alt: "Ảnh carousel 3" },
    { src: image_carousel4, alt: "Ảnh carousel 4" },
    { src: image_carousel5, alt: "Ảnh carousel 5" },
    { src: image_carousel6, alt: "Ảnh carousel 6" },
    { src: image_carousel7, alt: "Ảnh carousel 7" },
    { src: image_carousel8, alt: "Ảnh carousel 8" },
    { src: image_carousel9, alt: "Ảnh carousel 9" },
];
export default function Slider() {
    return (
        <section className="p-14">
            <Swiper spaceBetween={50} slidesPerView={5} loop={true}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <figure className="flex justify-center p-5">
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className=""
                            />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
