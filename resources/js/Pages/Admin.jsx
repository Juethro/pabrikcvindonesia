import {React, useState, useEffect} from "react";
import TabelEtalase from "@/Components/TabelEtalase";
import TabelBanner from "@/Components/TabelBanner";

const Admin = () => {
    const [activeTable, setActiveTable] = useState('')

    const handleEtalaseClick = () => {
        setActiveTable('product');
    };

    const handleBannerClick = () => {
        setActiveTable('banner');
    };

    return(

        <div className="flex-row w-screen h-screen">
            <nav className="bg-white border-gray-200 flex flex-wrap w-full h-16 pl-10">
                <div className='h-max'>
                <img src='images/Logo.jpg' className='w-16' alt="Logo" />
                </div>

                <div className="flex items-center w-52 mr-10 py-2 bg-red1">
                <span className='font-montserrat font-medium text-lg text-white'>
                    Pabrik CV Indonesia
                </span>
                </div>

                <div className='flex flex-wrap justify-between w-full lg:w-auto'>
                    <div className='w-20 mx-2 transition duration-150 border-b-8 border-transparent hover:border-red1'>
                        <button onClick={handleEtalaseClick} className='w-full h-full font-montserrat font-medium text-black'>Etalase</button>
                    </div>

                    <div className='w-20 mx-2 transition duration-150 border-b-8 border-transparent hover:border-red1'>
                        <button onClick={handleBannerClick} className='w-full h-full font-montserrat font-medium text-black'>Banner</button>
                    </div>
                </div>
            </nav>

            {activeTable === 'product' && <TabelEtalase />}
            {activeTable === 'banner' && <TabelBanner />}
        </div>

    );

}

export default Admin;