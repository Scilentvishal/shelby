import Image from 'next/image'
import React from 'react'
import Hero from '../components/about/Hero'
import Info from '../components/about/Info'

const about = () => {
    return (
        <>
            <div>
                <Hero />
            </div>
            <div className="container px-1 mx-auto max-w-screen-xl">
                <Info />
            </div>
        </>
    )
}

export default about
