import Head from 'next/head'
import React from 'react'

import { coursesData } from '../data';
import CoursesCard from '../components/cards/CoursesCard'
import Hero from '../components/common/hero'

const services = () => {
    return (
        <div className=''>
            <Head>
                <title>Services - Makeup Artist</title>
            </Head>
            <div>
                <Hero img="main5.jpg" heading="Services We Provide" />
            </div>
            <div className="container mx-auto max-w-screen-xl pt-8 bg-black text-white md:px-8 px-0  py-8">
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

export default services
