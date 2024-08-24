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
        <nav class="bg-red1 border-gray-200 flex h-20">
            <div>
                <img></img>
            </div>

            <div class="w-36 mr-10 text-center text-lg font-bold h-full">
                <span className='h-full align-middle'>
                    Pabrik CV Indonesia
                </span>
            </div>

            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
                    Etalase
                </button>
            </div>

            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
                    Langkah
                </button>
            </div>

            <div className='w-28 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
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

        <section class="bg-white text-black py-12 text-center">
            <h2 class="text-3xl font-bold mb-4">CV Template</h2>
            <p class="text-lg">Pilih template CV yang sesuai dengan selera anda, disini kami menyediakan beraneka ragam desain CV creative.</p>
        </section>
        </body>
    );
}

export default Homepage;
