import { coursesData } from '../../data';
import CoursesCard from '../cards/CoursesCard';

const limit = 3;
const slicedData = coursesData.slice(0, limit);

const Courses = () => {
  return (
    <>
      <div className="py-2 md:px-10 px-1">
        <h2 className="text-[#DAA520] line drop-shadow-[0px_2px_9px_1px_#DAA520] my-8 text-3xl mx-auto text-center font-bold">
          Shelby&apos;s Academy
        </h2>

        <div className="flex flex-wrap my-5">
          {slicedData.map((course) => (
            <CoursesCard
              img={course.img}
              title={course.title}
              desc={course.desc}
              duration={course.duration}
              key={course.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
