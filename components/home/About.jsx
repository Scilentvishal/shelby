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

const About = () => {
  return (
    <>
      <div className="py-2 text-white relative md:px-10 px-1">
        <h2 className="text-[#DAA520] my-8 text-3xl mx-auto text-center font-bold">
          About Shelby&apos;s
        </h2>
        <div className="relative">
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            autoplay={false}
            showThumbs={false}
            responsive={responsiveSettings}
          >
            <div className="h-[60vh]">
              <Image
                src="/pictures/main.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
            <div className="h-[60vh]">
              <Image
                src="/pictures/main1.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
            <div className="h-[60vh]">
              <Image
                src="/pictures/main2.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
            <div className="h-[60vh]">
              <Image
                src="/pictures/main8.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
            <div className="h-[60vh]">
              <Image
                src="/pictures/main4.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
            <div className="h-[60vh]">
              <Image
                src="/pictures/main6.jpg"
                width={500}
                height={400}
                className="object-contain object-center shadow-[0px_0px_7px_0px_#DAA520]"
                alt=""
              />
            </div>
          </Slide>
        </div>
        <h3 className="text-[#DAA520] my-1 text-3xl font-bold px-2">HELLO</h3>
        <p className="text-xl italic px-2">
          <span className="inline-block w-16 bg-white"></span>
          is a versatile bridal makeup artist & makeup educator having 10 years
          of expereince
        </p>
        <p className="px-2">
          <span className="h-[2px] bg-white inline-block w-16"></span>
          <br />
          Shelby’s “Passion to Beautify” has transformed numerous clients into
          stunningly beautiful brides for their special day. Shelby’s Signature
          Bridal Look of minimalistic, subtle, realistic and natural makeup has
          taken the industry by storm, especially, for clients who perhaps are
          not used to wearing makeup at all. She creates magic with her
          exceptional knowledge and skills, making everyone spellbound with her
          extraordinary talent.
        </p>
      </div>
    </>
  );
};

export default About;
