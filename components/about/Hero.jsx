import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className='w-full bg-[url("/pictures/main9.jpg")] bg-no-repeat bg-cover bg-right-top h-[50vh] relative'>
        <h2
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 md:text-4xl lg:text-5xl text-3xl md:font-bold font-semibold text-white absolute "
        >
          About Shelby&apos;s
        </h2>
      </div>
    </>
  );
};

export default Hero;
