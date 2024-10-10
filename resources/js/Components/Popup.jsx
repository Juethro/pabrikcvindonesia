const Popup = ({ closePopup, item }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white rounded-lg p-8 w-11/12 sm:w-2/3 lg:w-1/2 relative">
        {/* Tombol Close */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 hover:text-gray-200"
        >
          <span className="p-2 font-montserrat font-black">
            X
          </span>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Gambar Produk */}
          <div className="lg:w-1/2">
            <img src={item.image} alt={item.title} className="w-full" />
          </div>

          {/* Detail Produk */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl font-bold mb-4 text-black">{item.title}</h2>
            <p className="text-sm mb-2 text-black">{item.group}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-black mb-4">{item.long_description}</p>

            {/* Tombol WhatsApp */}
            <a
              href={'https://wa.me/'+ item.wa_number +'?text=Halo%2C%20saya%20ingin%20memesan%20template%20desain%20dengan%20detail%20sebagai%20berikut%3A%0A-%20Kode%20Desain%3A%20*' + item.kode + '*%0A%0ATerimakasih'}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              target="blank"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
