import React from 'react';

function CatalogItem({ item }) {
    const imageSrc = `data:image/jpeg;base64,${item.Gambar}`;

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src={imageSrc} alt={item.Nama_CV} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{item.Nama_CV}</h3>
                <p className="text-gray-700">{item.Deskripsi}</p>
                <p className="text-gray-500 text-sm">{item.Kategori}</p>
            </div>
        </div>
    );
}

export default CatalogItem;
