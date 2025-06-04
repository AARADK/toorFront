'use client'

import HeroHeading from "./HeroHeading"
import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center" />
      <div className="relative z-10 px-4 w-full max-w-3xl">
        <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-lg px-5 py-10 flex flex-col items-center text-center space-y-6">
          <HeroHeading />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl" style={{ bottom: '-2.5rem' }}>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}

export default Hero
