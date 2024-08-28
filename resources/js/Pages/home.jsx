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
      <nav className="bg-red1 border-gray-200 flex w-full lg:h-20 pl-10">
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

      <div className='bg-white text-black pt-8 text-center'>
        <h2 className='text-xl font-montserrat font-medium'>Template CV</h2>
        <p className="text-lg">Pilih template CV yang sesuai dengan selera anda, disini kami menyediakan beraneka ragam desain CV creative.</p>
      </div>
      
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Katalog CV</h2>
        <div className='flex flex-col items-center justify-center p-4 space-y-16'>
          <div className="flex flex-wrap justify-center gap-4 h-10">
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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
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

      <div className='mt-20 bg-gradient-to-r from-red-700 to-red-900 w-full h-50 shadow-inner'>
        <div className='flex justify-center py-16'>
        <section className="p-8 text-black">
          <h2 className="text-white text-2xl font-montserrat font-bold mb-8 underline underline-offset-2">Bagaimana Langkahnya?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center items-center text-4xl font-bold mb-4">1</div>
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <p className="text-center font-montserrat">Kami memiliki aneka macam desain template CV kreatif yang sudah dipisahkan menjadi beberapa grup kategori.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center items-center text-4xl font-bold mb-4">2</div>
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-12 h-12'>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                </svg>
              </div>
              <p className="text-center font-montserrat">Jika anda telah mendapatkan desain CV yang anda sukai, tekan desain CV tersebut untuk melanjutkan ke WhatsApp.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center items-center text-4xl font-bold mb-4">3</div>
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-12 h-12'>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <p className="text-center font-montserrat">Saat di WhatsApp, kirim pesan dengan desain CV yang anda pilih dan admin akan mengirimkan file CV.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center items-center text-4xl font-bold mb-4">4</div>
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-12 h-12'>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
              </div>
              <p className="text-center font-montserrat">CV Anda telah selesai, siap digunakan untuk keperluan Anda.</p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
