import React, { useState, useEffect } from 'react';

const AddPopup = ({ isOpen, onClose, onSave }) => {
    const [kode, setKode] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');
    const [image, setImage] = useState(null);
    const [groups, setGroups] = useState([]);

    // Fetch Groups saat komponen dimuat
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await fetch('/api/groups'); // Sesuaikan endpoint-nya
                const data = await response.json();
                setGroups(data);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };
        fetchGroups();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('kode', kode);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('group_id', groupId);
        formData.append('image', image);
    
        try {
            const response = await fetch('/api/catalog', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json(); // Ubah ke JSON di sini
            
            if (response.ok) {
                console.log('Response from server:', data);
                onSave(data.data); // Memperbarui katalog setelah item ditambahkan
                onClose(); // Tutup popup setelah berhasil
            } else {
                console.error('Failed to add item:', data);
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };
    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label className="block text-sm font-medium">Kode Produk</label>
                        <input
                            type="text"
                            value={kode}
                            onChange={(e) => setKode(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nama Produk</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Deskripsi Produk</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Group</label>
                        <select
                            value={groupId}
                            onChange={(e) => setGroupId(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        >
                            <option value=''>Pilih Group</option>
                            {groups.map((group) => (
                                <option key={group.id} value={group.id}>
                                    {group.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Gambar Produk</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-lg"
                        >
                            Batal
                        </button>
                        
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPopup;
