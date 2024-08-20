
import React from 'react';

function Homepage() {
    return (
        <body class="bg-white text-white">
        <nav class="bg-red1 border-gray-200 flex h-20">
            <div>
                <img></img>
            </div>
            <div class="w-36 mr-10 text-center text-lg font-bold h-full">
                <span className='h-full align-middle'>
                    Pabrik CV Indonesia
                </span>
            </div>
            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
                    Etalase
                </button>
            </div>
            <div className='w-20 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
                    Langkah
                </button>
            </div>
            <div className='w-28 hover:bg-red-600 mx-2'>
                <button className='w-full h-full'>
                    Tentang Kami
                </button>
            </div>

        </nav>

        <section class="text-center py-20">
            <h1 class="text-5xl font-bold mb-6">Terima CV Dulu, Bayar Kemudian</h1>
            <div class="flex justify-center"> 
            </div>
        </section>

        <section class="bg-white text-black py-12 text-center">
            <h2 class="text-3xl font-bold mb-4">CV Template</h2>
            <p class="text-lg">Pilih template CV yang sesuai dengan selera anda, disini kami menyediakan beraneka ragam desain CV creative.</p>
        </section>

    </body>
    );
}

export default Homepage;
