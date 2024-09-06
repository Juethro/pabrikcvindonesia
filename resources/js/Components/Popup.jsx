const Popup = ({ closePopup }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-11/12 sm:w-2/3 lg:w-1/2 relative">
            {/* Tombol Close */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Gambar Produk */}
              <div className="lg:w-1/2">
                <img src='images/sample1.jpg' alt='' className="w-full" />
              </div>

              {/* Detail Produk */}
              <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-2xl font-bold mb-4 text-black">title</h2>
                <p className="text-sm mb-2 text-black">group</p>
                <p className="text-gray-700 mb-4">long description</p>

                {/* Tombol WhatsApp */}
                <a
                  href={`https://wa.me/?text=Saya tertarik dengan produk`}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
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
