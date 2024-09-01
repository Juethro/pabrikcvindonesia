import React, { useEffect, useState } from 'react';

const KatalogCV = () => {
    const [katalogCV, setKatalogCV] = useState([]);

    useEffect(() => {
        const dataElement = document.getElementById('app');
        const data = dataElement.getAttribute('data-katalog-cv');
        setKatalogCV(JSON.parse(data));
    }, []);

    return (
        <div>
            {katalogCV.map((item) => (
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
    );
}

export default KatalogCV;
