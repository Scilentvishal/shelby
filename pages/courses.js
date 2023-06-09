import React from 'react'
import { coursesData } from '../data';
import CoursesCard from '../components/cards/CoursesCard';
import Hero from '../components/common/hero';

const courses = () => {
    return (
        <div className=''>
            <div>
                <Hero img="main14.jpg" heading="Best Shelb&apos;y Courses" />
            </div>
            <div className='container px-1 mx-auto max-w-screen-xl'>
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
        </div>
    )
}

export default courses
