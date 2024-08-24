import React, {useEffect, useState} from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

function Homepage() {
  const images = [
    "images/Banner1.png",
    "images/Banner2.png",
    "images/Banner3.png",
  ];

  const [curr, setCurr] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 5000;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
      
    return (
        <body class="bg-white text-white">
        <nav class="bg-local top-0 bg-red1 border-gray-200 flex w-full lg:h-20 pl-10">
            <div className='h-max'>
                <img 
                src='images/Logo.jpg' 
                className='w-20 sm:w-20 md:w-20 lg:w-20'>
                </img>
            </div>

            <div class="mx-0 px-0 py-2 w-20 lg:w-36 md:w-20 sm:w-20 mr-10 text-xs lg:text-lg md:text-base sm:text-sm h-full">
                <span className='h-full align-middle font-montserrat font-medium'>
                    Pabrik CV Indonesia
                </span>
            </div>

            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full font-montserrat font-medium'>
                    Etalase
                </button>
            </div>

            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full font-montserrat font-medium'>
                    Langkah
                </button>
            </div>

            <div className='w-28 hover:bg-red-600 mx-2'>
                <button className='w-full h-full font-montserrat font-medium'>
                    Tentang Kami
                </button>
            </div>
        </nav>

        <div className="overflow-hidden relative">
            <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
            >
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Banner ${index + 1}`} className="w-full h-auto"/>
            ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="opacity-50 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-gray-300"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    onClick={next}
                    className="opacity-50 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-gray-300"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                    <div
                        key={i}
                        className={`
                        transition-all bg-white rounded-full
                        ${curr === i ? "p-1 w-2 h-2 bg-white" : "w-2 h-2 bg-white bg-opacity-50"}
                        `}
                    />
                    ))}
                </div>
            </div>
        </div>

        <div className='bg-white text-black py-12 text-center'>
            <h2 className='text-xl font-montserrat font-medium'>
                Template CV
            </h2>
        </div>
        </body>
    );
}

export default Homepage;
