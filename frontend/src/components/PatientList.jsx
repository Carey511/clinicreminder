// PatientList.jsx
import React from 'react';

const PatientList = ({ patients, onSendReminder }) => (
  <table className="w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Condition</th>
        <th>Doctor</th>
        <th>Next Follow-Up</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {patients.map(patient => (
        <tr key={patient._id} className="border-b">
          <td>{patient.name}</td>
          <td>{patient.email}</td>
          <td>{patient.phone}</td>
          <td>{patient.condition}</td>
          <td>{patient.doctor}</td>
          <td>{patient.nextFollowUp}</td>
          <td>
            <button
              onClick={() => onSendReminder(patient._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Remind
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PatientList;