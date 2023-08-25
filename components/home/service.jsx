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

const Service = () => {
  return (
    <div>
      <div className="py-2 md:px-10 px-1">
        <h2 className="text-[#DAA520] line my-8  md:text-3xl text-2xl mx-auto text-center font-bold">
          Shelby&apos;s Beauty Services
        </h2>

        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={true}
          showThumbs={false}
          responsive={responsiveSettings}
          className="mt-5"
        >
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main5.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Bridal Makeup</h4>
            </div>
          </div>
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main9.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Air Brush Makeup</h4>
            </div>
          </div>
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main5.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Engagement Makeup</h4>
            </div>
          </div>
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main9.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Pre Wedding Makeup</h4>
            </div>
          </div>
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main5.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Party Makeup</h4>
            </div>
          </div>
          <div className="relative px-2 cursor-pointer rounded-ss-3xl rounded-ee-3xl">
            <Image
              src="/pictures/main9.jpg"
              width={400}
              height={300}
              className="w-full rounded-ss-3xl rounded-ee-3xl"
              alt=""
            />
            <div className="absolute bottom-2 right-4 left-4 py-4 rounded-sm bg-gray-950 rounded-ss-3xl rounded-ee-3xl text-white text-center">
              <h4 className="text-[#DAA520]">Hairstyling</h4>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Service;
