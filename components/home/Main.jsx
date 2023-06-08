import About from './About';
import Courses from './Courses';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Service from './service';

const Main = () => {
  return (
    <>
      <div className="md:h-[90vh] h-[70vh] relative">
        <Hero />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl">
        <About />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl">
        <Portfolio />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl">
        <Courses />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl">
        <Service />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl">
        <Testimonial />
      </div>
    </>
  );
};

export default Main;
