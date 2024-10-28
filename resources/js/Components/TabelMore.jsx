import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const TabelMore = () => {
  const [placeholderPhoneNumber, setPlaceholderPhoneNumber] = useState("Masukkan Nomor Telepon");
  const [phoneNumber, setPhoneNumber] = useState("Masukkan Nomor Telepon");
  const [changes, setChanges] = useState(false);
  const [groups, setGroups] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [groupData, setGroupData] = useState({ name: '' });

  // for toast notification
  const numberSaved = () => toast.success("Number Saved!");
  const numberFailSaved = (response) => toast.warn("Error: " + response);
  
  console.log('PhoneNumber: ' + phoneNumber);

  useEffect(() => {
      fetch('/api/number_information')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.wa_number) {
            setPlaceholderPhoneNumber(data.wa_number);
          }
        })
        .catch(error => {
          console.error("Error fetching phone number:", error);
          // Tetap gunakan nilai default jika terjadi kesalahan
          setPlaceholderPhoneNumber("Masukkan Nomor Telepon");
        });
    }, []);

  // Hanya Simpan Nomor
  function saveChanges() {
    fetch("/api/save_number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({wa_number: phoneNumber}),
    })
      .then((response) => {
        if (!response.ok) {
          // Respon error dari validasi dikirim ke toast notification
          return response.json().then((errorData) => {
            numberFailSaved(errorData.error.wa_number[0]); // Notify with error message
            throw new Error("Failed to save phone number");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setChanges(false);
        numberSaved();
      })
      .catch((error) => {
        console.error("Error saving phone number:", error);
      });
  }

    useEffect(() => {
      fetchGroups();
  }, []);

  const fetchGroups = async () => {
      const response = await axios.get('/api/groups');
      setGroups(response.data);
  };

  const handleEdit = (group) => {
      setEditMode(group.id);
      setGroupData({ name: group.name });
  };

  const handleCancel = () => {
      setEditMode(null);
      setGroupData({ name: '' });
  };

  const handleChange = (e) => {
      setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
      await axios.put(`/api/groups/${id}`, groupData);
      fetchGroups();
      handleCancel();
  };


  return (
    <div>
      <div>
        <ToastContainer />
        <div className="h-10 mt-6 pl-10 ">
          <div className="w-96 text-2xl font-black border-solid border-b-2 border-black">
            More Settings 
          </div>
        </div> 
        
        <div className="mt-4 ml-10">
            <label htmlFor="cellNumber" className="block text-m font-medium text-gray-700">
                Nomor Telepon Untuk Dihubungkan Dengan Whatsapp (Max: 14 Digit)
            </label>
            <p className="text-sm font-medium text-gray-400">
                Contoh: 0812-2531-3309 menjadi 81225313309
            </p>
            <div className="mt-1">
                <input
                    type="number"
                    id="cellNumber"
                    name="cellNumber"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholderPhoneNumber}
                    onChange={e => {
                      setChanges(true); // Menandai perubahan
                      const inputValue = e.target.value;
                      setPhoneNumber(inputValue);
                    }}
                />
            </div>
            {changes && (
                <div className='flex flex-col gap-y-1'>
                    <div className="text-gray-500 mt-2">
                        Simpan Nomor Telepon?
                    </div>
                    <div className='flex gap-x-4'>
                        <button onClick={()=>saveChanges()} className='w-24 px-auto py-2 bg-green-500 hover:bg-green-300 text-white rounded-md'>
                            Save
                        </button>
                        {/* <button onClick={()=>cancelChanges()} className='w-24 px-auto py-2 bg-red-500 hover:bg-red-300 text-white rounded-md'>
                            Cancel
                        </button> */}
                    </div>
                </div>  
            )}
        </div>
      </div>
      <div className="mt-4 p-10">
            <h2 className="w-96 text-2xl font-black border-solid border-b-2 border-black mb-4">Group Management</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left w-1/12">ID</th>
                        <th className="py-2 px-4 border-b text-left w-8/12">Group Name</th>
                        <th className="py-2 px-4 border-b text-center w-3/12">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {groups.map((group) => (
                        <tr key={group.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b text-center">{group.id}</td>
                            <td className="py-2 px-4 border-b">
                                {editMode === group.id ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={groupData.name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                    />
                                ) : (
                                    group.name
                                )}
                            </td>

                            <td className="py-2 px-4 border-b text-center">
                                {editMode === group.id ? (
                                    <>
                                        <button
                                            onClick={() => handleSave(group.id)}
                                            className="bg-blue-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600 transition"
                                        >
                                            Save
                                        </button>
                                        
                                        <button
                                            onClick={handleCancel}
                                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(group)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default TabelMore;
