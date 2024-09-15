import {React,useState,useEffect} from 'react';
import { ChevronLeft, ChevronRight, PlusCircle } from "react-feather";

const TabelBanner = () => {
    const [images, setImages] = useState([]); // Data yang boleh di utak-atik
    const [originalImages, setOriginalImages] = useState([]); // Data asli untuk cancel perubahan
    const [changes, setChanges] = useState(false); // State untuk data yang berubah
    const [draggedIndex, setDraggedIndex] = useState(null); // State untuk menyimpan indeks elemen yang sedang di-drag

    const [curr, setCurr] = useState(0);
    const autoSlide = true;
    const autoSlideInterval = 5000;

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
            setOriginalImages(data);
          })
          .catch(error => {
            console.error('Error fetching banner images:', error);
          });
    },[]);

    const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
      }, [autoSlide, next]);
    

    // Banner Action Functions
    function deleteBanner(path){
        setImages(images.filter(image => image.image !== path))
        setChanges(true);
    }
    
    function cancelChanges(){
        setImages(originalImages);
        setChanges(false);
    }

    // Hanya Simpan Urutan
    function saveChanges(){
        fetch('/api/cvbanner/saveorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'ids': images.map(image => image.id)}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save banner images');
            }
            return response.json();
        })
        .then(data => {
            // console.log('Banner images saved successfully:', data);
            setChanges(false);
        })
        .catch(error => {
            console.error('Error saving banner images:', error);
        });
    }

    // Drag n Drop functions
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (index) => {
        const updatedImages = [...images];
        const [draggedImage] = updatedImages.splice(draggedIndex, 1);
        updatedImages.splice(index, 0, draggedImage);
        setImages(updatedImages);
        setChanges(true);
    };

    // Simpan File dan Get Data Terbaru
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/api/cvbanner/savefile', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to upload banner image');
                }
                return response.json();
            })
            .then(data => {
                setImages(data);
                setChanges(true);
            })
            .catch(error => {
                console.error('Error uploading banner image:', error);
            });
        }
    };
    
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
                        <img key={index} src={src.image} alt={`Banner ${index + 1}`} className=" h-auto" />
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
                <div className="text-gray-500 mt-2">
                    Ukuran banner adalah 1920px(w) dan 400px(h)
                </div>
            </div>

            <div className="flex p-10 gap-x-2 w-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md p-2 flex w-auto draggable"
                        draggable="true"
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                    >
                        <button className='flex gap-x-0 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>

                        <div className='mr-2'>
                            {image.name}
                        </div>

                        <button onClick={() => deleteBanner(image.image)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-red1 hover:stroke-red-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                            </svg>
                        </button>
                    </div>
                ))}
                <div>
                    <input
                        type="file"
                        id="fileUpload"
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                    <button className='p-2' onClick={() => document.getElementById('fileUpload').click()}>
                        <PlusCircle size={35} />
                    </button>
                </div>
                
            </div>
            
            {/* Muncul tombol save ketika ada perubahan */}
            {changes && (
                <div className='flex flex-col px-10 gap-y-1'>
                    <div className="text-gray-500 mt-2">
                        Simpan urutan banner?
                    </div>
                    <div className='flex gap-x-4'>
                        <button onClick={()=>saveChanges()} className='w-24 px-auto py-2 bg-green-500 hover:bg-green-300 text-white rounded-md'>
                            Save
                        </button>
                        <button onClick={()=>cancelChanges()} className='w-24 px-auto py-2 bg-red-500 hover:bg-red-300 text-white rounded-md'>
                            Cancel
                        </button>
                    </div>
                </div>
                
            )}
        </div>

    )

}

export default TabelBanner;