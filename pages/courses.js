import React from 'react'
import { coursesData } from '../data';
import CoursesCard from '../components/cards/CoursesCard';

const courses = () => {
    return (
        <div className='pt-24 container px-1 mx-auto max-w-screen-xl'>
            <h1 className='text-[#DAA520] my-8 text-3xl mx-auto text-center font-bold'>Best Shelb&apos;y Courses</h1>
            <div className="flex flex-wrap my-5">
                {coursesData.map((course) => (
                    <CoursesCard
                        img={course.img}
                        title={course.title}
                        desc={course.desc}
                        key={course.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default courses
