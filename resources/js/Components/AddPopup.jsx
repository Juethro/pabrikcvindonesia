import React, { useState } from 'react';

const AddPopup = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        group: '',
        image: null, // Untuk menyimpan file gambar
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] }); // Menyimpan file gambar
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('group', formData.group);
        formDataToSend.append('image', formData.image); // Menambahkan gambar ke FormData

        try {
            const response = await fetch('/api/catalog', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const newItem = await response.json();
            onAdd(newItem); // Memanggil callback untuk menambahkan item baru ke daftar
            onClose(); // Menutup popup setelah berhasil
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-1/2">
                <h2 className="text-xl mb-4">Tambah Item Baru</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nama Produk</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Deskripsi Produk</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block h-60 w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Group</label>
                        <input
                            type="text"
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Upload Gambar</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-orange-400 text-white rounded-lg"
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

export default AddPopup;
