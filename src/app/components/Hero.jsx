import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
      <section>
      <div className="dark:bg-violet-600">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Welcome to my porftolio! 👋</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">This website is for me to showcase my previous projects and achievements, hope you enjoy your stay!
          This website was created using Next.js 13 and Taliwindcss</p>
          <div className="flex flex-wrap justify-center gap-5">
            <button type="button" className="btn ">Previous Work</button>
            <button type="button" className="btn btn-outline">Resume</button>
          </div>
        </div>
      </div>
      <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
    </section>
    );
};

export default Hero;