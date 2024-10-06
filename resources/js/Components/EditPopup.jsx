import React, { useState, useEffect } from 'react';

const EditPopup = ({ isOpen, onClose, item, onSave }) => {
    const [formData, setFormData] = useState(item);

    // Gunakan useEffect untuk mengupdate formData saat item berubah
    useEffect(() => {
        if (item) {
            setFormData(item); // Update formData saat item berubah
        }
    }, [item]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); // Kirim data form yang sudah diedit ke callback
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-1/2">
                <h2 className="text-xl mb-4">Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Kode</label>
                        <input 
                            name="id" 
                            value={formData?.id || ''} 
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Nama Produk</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={formData?.title || ''} 
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Deskripsi Produk</label>
                        <textarea 
                            name="description" 
                            value={formData?.description || ''}
                            onChange={handleChange}
                            className="mt-1 block h-60 w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Group</label>
                        <input 
                            type="text" 
                            name="group" 
                            value={formData?.group || ''} 
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-600"
                        >
                            Simpan
                        </button>

                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            Batal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPopup;
