// AddPatientModal.jsx
import React from 'react';

const AddPatientModal = ({ newPatient, setNewPatient, onAdd, onClose }) => {
  const isDisabled = !newPatient.name || !newPatient.phone || !newPatient.email;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Patient</h2>
        <input className="w-full border mb-2 p-2" placeholder="Name" value={newPatient.name} onChange={e => setNewPatient({ ...newPatient, name: e.target.value })} />
        <input className="w-full border mb-2 p-2" placeholder="Phone" value={newPatient.phone} onChange={e => setNewPatient({ ...newPatient, phone: e.target.value })} />
        <input className="w-full border mb-2 p-2" placeholder="Email" value={newPatient.email} onChange={e => setNewPatient({ ...newPatient, email: e.target.value })} />
        <div className="flex justify-between mt-4">
          <button onClick={onAdd} disabled={isDisabled} className={`px-4 py-2 rounded text-white ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}>
            Add
          </button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;