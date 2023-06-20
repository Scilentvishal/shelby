const Hero = ({ img, heading }) => {
  return (
    <>
      <div
        className={`w-full bg-no-repeat bg-cover bg-right-top h-[50vh] relative`}
        style={{ backgroundImage: `url("/pictures/${img}")` }}
      >
        <h2
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 md:text-4xl lg:text-5xl text-3xl md:font-bold font-semibold text-white absolute "
        >
          {heading}
        </h2>
      </div>
    </>
  );
};

export default Hero;
