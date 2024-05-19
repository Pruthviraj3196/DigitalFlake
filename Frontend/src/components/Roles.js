import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { CgArrowsScrollV, CgDanger } from "react-icons/cg";
import { FaEdit, FaHandHolding } from "react-icons/fa";

const Roles = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTodo = () => {
    navigate('/addrole');
  };

  const handleEditClick = () => {
    navigate('/editrole');
  };

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleDeleteConfirm = () => {
    // Implement delete functionality here
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full h-screen p-4">
      <div className="mb-4 w-full flex items-center">
        <div className="mr-[10px] ml-[30px]">
          <FaHandHolding />
        </div>
        <label className="mr-4 font-extrabold">Roles</label>
        <input
          type="text"
          className="border p-1 w-[400px] ml-[10px] rounded-[10px] mr-4"
        />
        <button
          className="text-white px-4 py-1 ml-[240px] rounded hover:bg-red-600 bg-[rgb(124,69,133)]"
          onClick={handleAddTodo}
        >
          Add Now
        </button>
      </div>

      <ul className="mt-4 w-full">
        <li className="bg-[rgb(255,248,183)] mb-4 p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <p>Id</p>
              <CgArrowsScrollV />
            </div>
            <div className="flex items-center gap-2">
              <p>Real Name</p>
              <CgArrowsScrollV />
            </div>
            <div className="flex items-center gap-2">
              <p>Status</p>
              <CgArrowsScrollV />
            </div>
            <div className="flex items-center gap-2">
              <p>Action</p>
              <CgArrowsScrollV />
            </div>
          </div>
        </li>
        {[123, 124, 125, 126].map(id => (
          <li key={id} className="mb-4 p-4 bg-[#F2F2F2]">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <p>{id}</p>
              </div>
              <div className="flex items-center gap-2">
                <p>{id === 123 ? 'Admin' : id === 124 ? 'Superadmin' : id === 125 ? 'Caller' : 'Account'}</p>
              </div>
              <div className="flex items-center gap-2">
                <p>{id === 123 || id === 126 ? 'Active' : 'Inactive'}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEdit onClick={handleEditClick} />
                <button className="border-2 border-black" onClick={handleDeleteClick}>
                  <MdDelete />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CgDanger /> Delete
            </h2>
            <p className="mb-4">Are you sure you want to delete this?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-[rgb(124,69,133)] text-white rounded"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
