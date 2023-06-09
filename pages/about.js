import Image from 'next/image'
import React from 'react'
// import Hero from '../components/about/Hero'
import Info from '../components/about/Info'
import Hero from '../components/common/hero'

const about = () => {
    return (
        <>
            <div>
                <Hero img="main9.jpg" heading="About Shelby's" />
            </div>
            <div className="container px-1 mx-auto max-w-screen-xl">
                <Info />
            </div>
        </>
    )
}

export default about
