import React from 'react';

const TabelEtalase = () => {
    return (
        <div className=''>
            <div className="mt-6 h-10 pl-10 text-2xl font-black">
                <div className="w-96 border-solid border-b-2 border-black">
                    Tabel Produk
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md rounded-lg mx-10">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-red-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Kode</th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Nama Produk
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">Deskripsi Produk</th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Apple MacBook Pro 17"</th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="p-2 font-medium text-white bg-red1 hover:bg-red-700 hover:bg-gray-200 rounded-lg">
                                    Hapus</a>
                                <a href="#" className="ml-2 p-2 font-medium text-white bg-orange-400 hover:bg-orange-600 hover:bg-gray-200 rounded-lg">
                                    Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex pt-2 h-20 justify-center item-center">
                Pagination
            </div>
        </div>
    );
};

export default TabelEtalase;
