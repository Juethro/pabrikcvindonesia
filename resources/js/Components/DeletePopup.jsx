import React from 'react';

const DeletePopup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <p className="text-lg">Apakah Anda yakin ingin menghapus item ini?</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button 
                        onClick={onConfirm} 
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                    >
                        Hapus
                    </button>
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;