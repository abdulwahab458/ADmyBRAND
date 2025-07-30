"use client"
import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pb-32 min-h-screen'>
      <Element name='hero'>
        <div className='hero'>
          {/* === TEXT BLOCK === */}
          <div className='relative z-2 max-w-512 max-lg:max-w-388'>
            <div className='ml-5 md:ml-40 uppercase text-xl font-bold tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
              Advertising Marketplace
            </div>
            <h1 className='ml-5 md:ml-40 mb-6 text-4xl uppercase mt-5 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
              Revolutionizing advertising
            </h1>
            <p className='ml-5 md:ml-40 mb-14 md:mb-10 text-2xl text-gray-300'>
              Simplifying advertising&#39;s complexity. Effortlessly unleash your brand across every channel.
            </p>

            <LinkScroll to='features' offset={-100} spy smooth>
              <div className='ml-6 md:ml-40'>
                <ShimmerButton>Try it now</ShimmerButton>
              </div>
            </LinkScroll>
          </div>

          {/* === HERO IMAGE === */}
          <div className='absolute -top-20 md:right-0 -right-[35%] w-[1230px] pointer-events-none'>
            <img src="/hero.png" className='w-full h-auto opacity-60 md:opacity-90' alt="hero-image" />
          </div>

          <div className='mt-50 md:mt-40 lg:mt-40'>
          {/* === LOGOS / TRUSTED BY === */}
          <div className="absolute bottom-48  left-6 md:left-40 z-10 flex flex-wrap gap-4 items-center opacity-80">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Trusted by:</span>
            <img src="/amplitude.svg" alt="Brand 1" className="h-6" />
            <img src="/sonos.svg" alt="Brand 2" className="h-6" />
            <img src="/maze.svg" alt="Brand 3" className="h-6" />
            <img src="/drips.svg" alt="Brand 4" className="h-6" />
            <img src="/afterpay.svg" alt="Brand 4" className="h-6" />
          </div>

          {/* === QUICK STATS === */}
          <div className="absolute bottom-32 left-6 md:left-40 flex gap-10 text-gray-300 text-sm z-10">
            <div>
              <span className="text-xl text-white font-bold">10,000+</span> campaigns launched
            </div>
            <div>
              <span className="text-xl text-white font-bold">98%</span> satisfaction rate
            </div>
            <div>
              <span className="text-xl text-white font-bold">AI</span> powered optimization
            </div>
          </div>

          {/* === TESTIMONIAL SNIPPET === */}
          <div className="absolute bottom-20 left-6 md:left-40 max-w-md text-sm italic text-white/60 z-10">
            “ADmyBRAND completely transformed how we run campaigns — fast, smart, and seamless.”
          </div>

          {/* === SCROLL INDICATOR === */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/40 text-sm animate-bounce z-10">
            ↓ Scroll down
          </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
