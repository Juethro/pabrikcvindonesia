import {React,useState,useEffect} from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'react-feather';
import DeletePopup from './DeletePopup';
import EditPopup from './EditPopup';
import AddPopup from './AddPopup';
import { ToastContainer, toast } from 'react-toastify';

const TabelEtalase = () => {
    const [Catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Batas item per halaman
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortField, setSortField] = useState('id');
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showAddPopup, setShowAddPopup] = useState(false);

    // for toast notification
    const newStuffAdd = () => toast.success("New Stuff Added!");
    const stuffDeleted = () => toast.warn("Stuff Deleted!");
    const stuffEditSaved = () => toast.success("Information Saved!");
    const newGroupAdd = () => toast.success("New Group Added");

    const handleSort = (field) => {
        setSortField(field);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const handleDelete = (item) => {
        setSelectedItem(item);
        setShowDeletePopup(true);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setShowEditPopup(true);
    };

    const confirmDelete = async () => {
        try {
            const response = await fetch(`/api/catalog/${selectedItem.id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
    
            // Update Catalog state
            setCatalog(prevCatalog => 
                prevCatalog.filter(item => item.id !== selectedItem.id)
            );
    
            setShowDeletePopup(false);
            setSelectedItem(null);
            stuffDeleted();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleEditSubmit = async (updatedItem) => {
        try {
            const response = await fetch(`/api/catalog/${updatedItem.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });
    
            if (response.ok) {
                const updatedCatalog = await response.json();
                setCatalog((prevCatalog) =>
                    prevCatalog.map((item) =>
                        item.id === updatedCatalog.id ? updatedCatalog : item
                    )
                );
                setShowEditPopup(false);
                setSelectedItem(null);
                stuffEditSaved();
            } else {
                console.error('Failed to update catalog');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddSubmit = async (newItem) => {
        try {
            const response = await fetch('/api/catalog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add item');
            }
    
            const addedItem = await response.json();
            setCatalog(prevCatalog => [...prevCatalog, addedItem]); // Tambahkan item baru ke daftar
            setShowAddPopup(false); // Tutup popup
            newStuffAdd();
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };
    

    // Fungsi untuk memotong teks panjang
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    useEffect(() => {
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


    // Fungsi untuk menangani sorting
    const sortItems = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Fungsi sortir berdasarkan konfigurasi
    const sortedItems = [...Catalog].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // Menghitung total halaman
    const totalPages = Math.ceil(Catalog.length / itemsPerPage);

    // Menghitung index awal dan akhir item pada halaman aktif
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk pindah ke halaman berikutnya
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Fungsi untuk pindah ke halaman sebelumnya
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Fungsi untuk pindah ke halaman tertentu
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <div className='font-montserrat'>
            <ToastContainer />
            <div className="flex mt-6 mb-2 h-10 pl-10 text-2xl font-black justify-between">
                <div className="w-96 border-solid border-b-2 border-black">
                    Tabel Produk
                </div>

                <button onClick={() => setShowAddPopup(true)} className='mr-10 flex bg-white rounded-lg p-2 hover:bg-gray-200 hover:text-gray-800'>
                    <div className='flex text-base font-medium content-center items-center'>
                        Tambahkan
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </button> 
            </div>

            <div className="relative overflow-x-auto shadow-md rounded-lg mx-10">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-red-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Kode
                                    <button onClick={() => sortItems('id')} className="flex items-center ml-2">
                                        {sortConfig.key === 'id' && sortConfig.direction === 'ascending' ? (
                                            <ChevronUp className="w-6 h-6 text-white hover:text-gray-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Nama Produk
                                    <button onClick={() => sortItems('title')} className="flex items-center ms-2">
                                    {sortConfig.key === 'title' && sortConfig.direction === 'ascending' ? (
                                            <ChevronUp className="w-6 h-6 text-white hover:text-gray-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">Deskripsi Produk</th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Group
                                    <button onClick={() => sortItems('group')} className="flex items-center ms-2">
                                    {sortConfig.key === 'group' && sortConfig.direction === 'ascending' ? (
                                            <ChevronUp className="w-6 h-6 text-white hover:text-gray-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </th>

                            <th className="px-6 py-3">Gambar</th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id} className="bg-white border-b border-gray-200">
                                <th className="px-6 py-4 font-medium text-black">{item.id}</th>

                                <td className="px-6 py-4">{item.title}</td>

                                <td className="px-6 py-4">
                                    {truncateText(item.description, 50)} {/* Batasi deskripsi hingga 50 karakter */}
                                </td>

                                <td className="px-6 py-4">{item.group_name}</td>

                                <td className="px-6 py-4">
                                    <img src={`/${item.image_path}`} alt={item.title} className="w-16 h-16" />
                                </td>

                                <td className="px-6 py-4 text-right">
                                    <button 
                                        onClick={() => handleDelete(item)} 
                                        className="p-2 font-medium text-white bg-red-600 rounded-lg">
                                        Hapus
                                    </button>

                                    <button 
                                        onClick={() => handleEdit(item)} 
                                        className="ml-2 p-2 font-medium text-white bg-orange-400 rounded-lg">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2 mt-8">
                <button
                    onClick={goToPrevPage}
                    className="bg-white rounded-full shadow p-2 disabled:opacity-50 text-gray-800 hover:bg-gray-200"
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
                    className="bg-white rounded-full shadow p-2 disabled:opacity-50 text-gray-800 hover:bg-gray-200"
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
            <DeletePopup 
                isOpen={showDeletePopup} 
                onClose={() => setShowDeletePopup(false)} 
                onConfirm={confirmDelete} 
            />

            <EditPopup 
                isOpen={showEditPopup} 
                onClose={() => setShowEditPopup(false)} 
                item={selectedItem} 
                onSave={handleEditSubmit} 
            />

            <AddPopup 
                isOpen={showAddPopup} 
                onClose={() => setShowAddPopup(false)} 
                onAdd={handleAddSubmit} 
            />  
        </div>
    );
};

export default TabelEtalase;
