import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import Popup from '@/Components/Popup';


function Homepage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [curr, setCurr] = useState(0);
  const [images, setImages] = useState([]);
  const [Catalog, setCatalog] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const autoSlide = true;
  const autoSlideInterval = 5000;
  const [selectedItem, setSelectedItem] = useState(null);

  

  const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    fetch('/api/cvbanner')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch banner images');
        }
        return response.json();
      })
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching banner images:', error);
      });


    fetch('/api/catalog')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, next]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setCurrentPage(1);
  };

  const filteredCatalog = selectedGroup 
    ? Catalog.filter(item => item.group === selectedGroup) 
    : Catalog;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCatalog.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const openPopup = (item) => {
    setSelectedItem(item);  // Set the selected item
    setIsPopupOpen(true);    // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);  // Clear the selected item when closing the popup
  };



  return (
    <div className="bg-white text-white">
      <nav className="bg-red1 border-gray-200 flex flex-wrap w-full lg:h-20 pl-10">
        <div className='h-max'>
          <img src='images/Logo.jpg' className='w-20' alt="Logo" />
        </div>

        <div className="flex items-center w-auto lg:w-36 md:w-20 sm:w-20 mr-10 py-2">
          <span className='font-montserrat font-medium text-xs lg:text-lg md:text-base sm:text-sm'>
            Pabrik CV Indonesia
          </span>
        </div>

        <div className='flex flex-wrap justify-between w-full lg:w-auto'>
          <a href="#etalase" className='w-auto hover:bg-red-800 mx-2 content-center'>
            <div className='py-2 px-4 font-montserrat font-medium'>
              Etalase
            </div>
          </a>

          <a href="#langkah" className='w-auto hover:bg-red-800 mx-2 content-center'>
            <div className='py-2 px-4 font-montserrat font-medium'>
              Langkah
            </div>
          </a>

          <a href="#tentangkami" className='w-auto hover:bg-red-800 mx-2 content-center'>
            <div className='py-2 px-4 font-montserrat font-medium'>
              Tentang Kami
            </div>
          </a>
        </div>
      </nav>

       <div className="overflow-hidden relative">
          <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image.image} alt={`Banner ${index + 1}`} className=" h-auto" />
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

          <div id='etalase'>
            {/* Catalog grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {currentItems.map((item) => (
                <div key={item.id} className='relative group bg-gray-100 rounded-lg shadow p-4'>
                  <img src={item.image} alt={`CV ${item.id}`} className='w-full h-auto' />
                  <div className='bg-black bg-opacity-20 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button
                      onClick={() => openPopup(item)}  // Pass the specific item to openPopup
                      className='bg-red1 text-white px-10 py-2 rounded-lg shadow'
                    >
                      Pilih
                    </button>
                  </div>
                  <div className='mt-2'>
                    <h2 className='text-lg font-bold text-black'>{item.title}</h2>
                    <p className='text-sm text-gray-500'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Render Popup if it's open */}
            {isPopupOpen && selectedItem && (
              <Popup closePopup={closePopup} item={selectedItem} />
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={goToPrevPage}
              className="bg-white rounded-full shadow p-2 disabled:opacity-50  text-gray-800 hover:bg-gray-200"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`w-4 h-4 rounded-full ${currentPage === index + 1 ? 'bg-gray-400' : 'bg-gray-200'} transition-all`}
              />
            ))}

            <button
              onClick={goToNextPage}
              className="bg-white rounded-full shadow p-2 disabled:opacity-50  text-gray-800 hover:bg-gray-200"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <div id='langkah' className='mt-20 bg-gradient-to-r from-red-700 to-red-900 w-full h-50 shadow-inner'>
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

      <div id='tentangkami' className='flex flex-col lg:flex-row bg-white text-black justify-between items-center p-4 sm:p-8 lg:p-10'>
        {/* Left Section: Text and Logo */}
        <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start px-4 lg:px-20'>
          <div className='tracking-wide font-bold font-montserrat text-2xl sm:text-3xl bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text mb-4'>
            About Us
          </div>

          <div className='flex items-center justify-center lg:justify-start md:justify-center sm:justify-center'>
            <div className='h-max ml-10 lg:ml-0 md:ml-0'>
              <img src='images/Logo.jpg' className='w-24 sm:w-28 md:w-32 lg:w-44 rounded-md' alt="Logo" />
            </div>
            
            <div className="ml-6 lg:ml-4 md:ml-4 sm:ml-4 bg-gradient-to-r from-red1 via-indigo-600 to-blue-400 text-transparent bg-clip-text">
              <span className='text-4xl sm:text-6xl lg:text-6xl font-montserrat font-bold'>
                Pabrik CV Indonesia
              </span>
            </div>
          </div>

          <div className='w-full mt-4 text-center lg:text-left font-montserrat text-sm sm:text-base md:text-lg lg:text-gray-700'>
            Selamat datang di Pabrik CV Indonesia, platform terpercaya yang membantu Anda untuk membuat CV kreatif dan profesional dengan mudah dan cepat. Kami memahami pentingnya desain yang menonjol dan mempresentasikan keahlian serta kepribadian Anda dengan cara yang menarik.
          </div>
        </div>

        {/* Right Section: CV Preview */}
        <div className='lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0'>
          <img src='images/sample1.jpg' className='w-4/5 sm:w-3/4 lg:w-2/3' alt="CV Preview" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;