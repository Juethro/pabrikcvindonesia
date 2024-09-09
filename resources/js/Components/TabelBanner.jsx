import {React,useState,useEffect} from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const TabelBanner = () => {
    const images = [
        "images/Banner1.png",
        "images/Banner2.png",
        "images/Banner3.png",
      ];

    const [curr, setCurr] = useState(0);
    const autoSlide = true;
    const autoSlideInterval = 5000;

    const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
      }, [autoSlide, next]);
    
    return (

        <div>
            <div className="h-10 mt-6 pl-10 text-2xl font-black">
                <div className="w-96 border-solid border-b-2 border-black">
                    Preview Banner
                </div>
            </div>

            <div className="overflow-hidden relative mx-10 rounded-lg">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Banner ${index + 1}`} className="w-full h-auto" />
                ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="opacity-50 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-gray-300">
                    <ChevronLeft size={20} />
                </button>

                <button onClick={next} className="opacity-50 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-gray-300">
                    <ChevronRight size={20} />
                </button>
                </div>

                <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                    <div key={i} className={`transition-all bg-white rounded-full ${curr === i ? "p-1 w-2 h-2 bg-white" : "w-2 h-2 bg-white bg-opacity-50"}`} />
                    ))}
                </div>
                </div>
            </div>

            <div className="h-10 mt-6 pl-10">
                <div className="w-96 border-solid border-b-2 border-black text-2xl font-black">
                    Urutan Banner
                </div>
                <div className="text-gray-400 mt-2">
                    Ukuran banner adalah 1920px(w) dan 400px(h)
                </div>
            </div>

            <div className="flex p-10 gap-x-2 w-auto">
                <div className="bg-gray-200 w-20 rounded p-2 flex w-auto">
                    <button className='flex gap-x-0 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>

                    <div className='mr-2'>
                        Banner 1
                    </div>

                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-red1 hover:stroke-red-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        </svg>
                    </button>
                </div>
                <div className="bg-gray-200 w-20 rounded p-2 flex w-auto">
                    <button className='flex gap-x-0 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>

                    <div className='mr-2'>
                        Banner 2
                    </div>

                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-red1 hover:stroke-red-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        </svg>
                    </button>
                </div>
                <div className="bg-gray-200 w-20 rounded p-2 flex w-auto">
                <button className='flex gap-x-0 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>

                    <div className='mr-2'>
                        Banner 3
                    </div>

                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-red1 hover:stroke-red-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )

}

export default TabelBanner;