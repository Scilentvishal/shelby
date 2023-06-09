const Hero = ({ img, heading }) => {
  return (
    <>
      <div
        className={`w-full bg-no-repeat bg-cover bg-right-top h-[70vh] relative`}
        style={{ backgroundImage: `url("/pictures/${img}")` }}
      >
        <h2
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 md:text-4xl lg:text-5xl text-3xl md:font-bold font-semibold text-white absolute "
        >
          {heading}
        </h2>
        <div class="absolute -bottom-1 left-0 right-0 h-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            class="w-full h-full"
          >
            <path
              fill="#000"
              d="M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,122.7C560,160,640,224,720,218.7C800,213,880,139,960,138.7C1040,139,1120,213,1200,229.3C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,122.7C560,160,640,224,720,218.7C800,213,880,139,960,138.7C1040,139,1120,213,1200,229.3C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z;
                  M0,96L40,80C80,64,160,32,240,48C320,64,400,128,480,138.7C560,149,640,107,720,74.7C800,43,880,21,960,42.7C1040,64,1120,128,1200,149.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z;
                  M0,96L40,122.7C80,149,160,203,240,218.7C320,235,400,213,480,213.3C560,213,640,235,720,250.7C800,267,880,277,960,277.3C1040,277,1120,267,1200,250.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></animate>
            </path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
