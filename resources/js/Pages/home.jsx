import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const katalogCV = [
  { id: 1, title: 'Simple', description: 'Desain simpel dan efektif untuk digunakan', image: '/images/sample 1.jpg', group: 'Group 1' },
  { id: 2, title: 'Classic', description: 'Desain klasik dan efektif untuk digunakan keseharian', image: '/images/sample 1.jpg', group: 'Group 2' },
  { id: 3, title: 'Modern', description: 'Desain modern dan efektif untuk digunakan', image: '/images/sample 1.jpg', group: 'Group 1' },
  { id: 4, title: 'Creative', description: 'Desain kreatif dan efektif untuk digunakan', image: '/images/sample 1.jpg', group: 'Group 3' },
];

function Homepage() {
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

  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const filteredKatalogCV = selectedGroup 
    ? katalogCV.filter(item => item.group === selectedGroup) 
    : katalogCV;

  return (
    <div className="bg-white text-white">
      <nav className="bg-red-500 border-gray-200 flex w-full lg:h-20 pl-10">
        <div className='h-max'>
          <img src='images/Logo.jpg' className='w-20' alt="Logo" />
        </div>
        <div className="mx-0 px-0 py-2 w-20 lg:w-36 md:w-20 sm:w-20 mr-10 text-xs lg:text-lg md:text-base sm:text-sm h-full">
          <span className='h-full align-middle font-montserrat font-medium'>Pabrik CV Indonesia</span>
        </div>
        <div className='w-20 hover:bg-red-600 mx-2'>
          <button className='w-full h-full font-montserrat font-medium'>Etalase</button>
        </div>
        <div className='w-20 hover:bg-red-600 mx-2'>
          <button className='w-full h-full font-montserrat font-medium'>Langkah</button>
        </div>
        <div className='w-28 hover:bg-red-600 mx-2'>
          <button className='w-full h-full font-montserrat font-medium'>Tentang Kami</button>
        </div>
      </nav>

      <div className="overflow-hidden relative">
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

      <div className='bg-white text-black py-12 text-center'>
        <h2 className='text-xl font-montserrat font-medium'>Template CV</h2>
        <p className="text-lg">Pilih template CV yang sesuai dengan selera anda, disini kami menyediakan beraneka ragam desain CV creative.</p>
      </div>
      
      <section className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Katalog CV</h2>
        <div className='flex flex-col items-center justify-center p-4 space-y-4'>
          <div className='flex space-x-4'>
            <button onClick={() => handleGroupClick(null)} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === null ? 'bg-gray-200' : ''}`}>
              Semua
            </button>
            <button onClick={() => handleGroupClick('Group 1')} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === 'Group 1' ? 'bg-gray-200' : ''}`}>
              Group 1
            </button>
            <button onClick={() => handleGroupClick('Group 2')} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === 'Group 2' ? 'bg-gray-200' : ''}`}>
              Group 2
            </button>
            <button onClick={() => handleGroupClick('Group 3')} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === 'Group 3' ? 'bg-gray-200' : ''}`}>
              Group 3
            </button>
            <button onClick={() => handleGroupClick('Group 4')} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === 'Group 4' ? 'bg-gray-200' : ''}`}>
              Group 4
            </button>
            <button onClick={() => handleGroupClick('Group 5')} className={`px-4 py-2 border-gray-200 border rounded-full text-black hover:border-4 ${selectedGroup === 'Group 5' ? 'bg-gray-200' : ''}`}>
              Group 5
            </button>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {filteredKatalogCV.map((item) => (
              <div key={item.id} className='relative group bg-gray-100 rounded-lg shadow p-4'>
                <img src={item.image} alt={`CV ${item.id}`} className='w-full h-auto' />
                <div className='bg-black bg-opacity-20 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='bg-red1 text-white px-10 py-2 rounded-lg shadow'>Pilih</button>
                </div>
                <div className='mt-2'>
                  <h2 className='text-lg font-bold text-black'>{item.title}</h2>
                  <p className='text-sm text-gray-500'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                
            </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
