import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="py-2 md:px-10 px-1">
        <h2 className="text-[#DAA520] drop-shadow-[0px_2px_9px_1px_#DAA520] my-8 text-3xl mx-auto text-center font-bold">
          What People Thinks?
        </h2>

        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={true}
          showThumbs={false}
          responsive={responsiveSettings}
          className="my-5"
        >
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
          <div className="relative px-2 py-3">
            <div className="card bg-black py-7 px-6 rounded-md shadow-[0px_0px_5px_0px_#808080] rounded-br-[4rem]">
              <h4 className="text-2xl">Lorem ipsum dolor sit amet.</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit dolor eveniet commodi? Cum, reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                corporis molestiae ducimus quod iusto, expedita doloribus qui
                sed rem repudiandae.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Testimonial;
