import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from '../public/images/heroimg.png'
import ReactPlayer from 'react-player';

const Hero = () => {
return (
    <section className="pt-44 bg-gradient-to-b from-[#BF202F] w-full md:flex-row md:py-44">
      <div className="flex flex-col px-32 md:flex-row space-x-12 w-full items-center">
        <div className="basis-1/2">
          <h1 className="text-4xl text-white font-bold text-left md:text-5xl 2xl:text-8xl font-robotoBold">
            Join The{" "}
          </h1>
          <h1 className="text-6xl md:text-5xl font-bold text-black pt-3 text-left 2xl:text-8xl font-robotoBold leading-tight">
            Appliance Plug Family
          </h1>
          <div className="pt-4">
            <p className="text-left text-[#BF202F] font-bold pt-4 font-robotoBold xl:text-2xl">
              Our Plug Shield Membership Program is the best in the business. Become a member today and have instant peace of mind.
            </p>
          </div>
          <div className="md:flex md:pt-12">
            <Link href="/signup">
              <button className="text-xl mb-8 mt-16 md:mt-0 bg-[#BF202F] text-white py-3 px-3 rounded-lg hover:scale-110 ease-in duration-300">
                Get Started
              </button>
            </Link>
            <a
              href="https://www.youtube.com/channel/UCXRaNufTL_ez75DOzHtMMXQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex text-xl bg-white text-[#BF202F] py-3 px-3 rounded-lg md:ml-9 hover:scale-110 ease-in duration-300">
                Subscribe To Our YouTube 
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/2 py-12">
          <Image
            className="invisible md:visible border-8 rounded-lg hover:scale-110 ease-in duration-300"
            src={hero}
            alt="/"
              />
        </div>
      </div>
    </section>
     )
}

export default Hero;