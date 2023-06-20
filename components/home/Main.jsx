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
      <div className="container mx-auto px-1 max-w-screen-xl overflow-x-hidden">
        <About />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl overflow-x-hidden">
        <Service />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl overflow-x-hidden">
        <Portfolio />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl overflow-x-hidden">
        <Courses />
      </div>
      <div className="container mx-auto px-1 max-w-screen-xl overflow-x-hidden">
        <Testimonial />
      </div>
    </>
  );
};

export default Main;
