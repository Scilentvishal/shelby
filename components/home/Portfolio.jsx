import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { img } from '../../data';

const Portfolio = () => {
  return (
    <div className="py-2 md:px-10 px-1 text-center">
      <h2 className="text-[#DAA520] line drop-shadow-[0px_2px_9px_1px_#DAA520] my-8  md:text-3xl text-2xl mx-auto text-center font-bold">
        Shelby&apos;s Portfolio
      </h2>

      <div className="lg:columns-4 md:columns-3 columns-2 my-5 gap-2 gap-y-1">
        {img.map((img) => (
          <Image
            key={img.id}
            src={`/pictures/${img.img}`}
            alt=""
            className="mb-2 mx-auto"
            width={600}
            height={500}
          />
        ))}
      </div>
      <Link
        href="/portfolio"
        className="my-4 rounded-md bg-transparent hover:bg-[#DAA520] text-[#DAA520] border border-[#DAA520] font-semibold hover:text-white py-2 px-6 text-lg"
      >
        Show More
      </Link>
    </div>
  );
};

export default Portfolio;
