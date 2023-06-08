import Head from 'next/head'
import React from 'react'

import { coursesData } from '../data';
import CoursesCard from '../components/cards/CoursesCard'

const services = () => {
    return (
        <div className='container mx-auto max-w-screen-xl pt-8'>
            <Head>
                <title>Services - Makeup Artist</title>
            </Head>
            <div className="bg-black text-white md:px-8 px-0  py-8">
                <h1 className="text-[#DAA520] my-8 text-3xl mx-auto text-center font-bold">Services We Provide</h1>
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
