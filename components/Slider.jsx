import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Slider = () => {
  const CustomPrevArrow = (props) => (
    <button {...props}>
      <span>Previous</span>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props}>
      <span>Next</span>
    </button>
  );
  return (
    <Carousel
      className="relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[90vh]"
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={true}
    >
      <div className="relative">
        <Image
          src="/pictures/Untitled-1.jpg"
          width={1200}
          height={800}
          alt="s"
          className="h-[90vh] object-cover object-right-top"
        />
        <div className="text absolute md:top-1/2 bottom-1/2 md:w-1/2 w-full md:px-10 pl-6 pr-4">
          <h4 className="text-5xl font-semibold max-w-2xl ml-auto text-start text-white">
            Shelby’s Signature Bridal Look
          </h4>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/pictures/Untitled-2.jpg"
          width={1200}
          height={800}
          alt="s"
          className="h-[90vh] object-cover object-right-top"
        />
        <div className="text absolute md:top-1/2 bottom-1/2 md:w-1/2 w-full md:px-10 pl-6 pr-4">
          <h4 className="text-5xl font-semibold max-w-2xl ml-auto text-start text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h4>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/pictures/Untitled-3.jpg"
          width={1200}
          height={800}
          alt="s"
          className="h-[90vh] object-cover object-right-top"
        />
        <div className="text absolute md:top-1/2 bottom-1/2 md:w-1/2 w-full md:px-10 pl-6 pr-4">
          <h4 className="text-5xl font-semibold max-w-2xl ml-auto text-start text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h4>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/pictures/Untitled-4.jpg"
          width={1200}
          height={800}
          alt="s"
          className="h-[90vh] object-cover object-right-top"
        />
        <div className="text absolute md:top-1/2 bottom-1/2 md:w-1/2 w-full md:px-10 pl-6 pr-4">
          <h4 className="text-5xl font-semibold max-w-2xl ml-auto text-start text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h4>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
