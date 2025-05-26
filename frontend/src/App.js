import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PatientList from './components/PatientList';
import AddPatientModal from './components/AddPatientModal';
import ReminderHistory from './components/ReminderHistory';
import { fetchPatients, addPatient } from './utils/api';

function App() {
  const [patients, setPatients] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    fetchPatients().then(setPatients);
  }, []);

  const handleAdd = async () => {
    try {
      const patientData = {
        ...newPatient,
        lastVisit: new Date().toISOString().split('T')[0],
        nextFollowUp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        condition: 'General Checkup',
        doctor: 'Dr. Sarah',
        priority: 'medium',
        status: 'pending',
        preferredContact: 'email'
      };

      console.log('Submitting:', patientData);

      const patient = await addPatient(patientData);
      console.log('Response from backend:', patient);

      setPatients(prev => [...prev, patient]);
      setNewPatient({ name: '', phone: '', email: '' });
      setShowModal(false);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const handleReminder = (id) => {
    const patient = patients.find(p => p._id === id);
    const reminder = {
      id: reminders.length + 1,
      type: patient.preferredContact || 'email',
      sentAt: new Date().toISOString(),
      status: 'sent',
      response: null,
    };
    setReminders(prev => [...prev, reminder]);
  };

  const analytics = {
    totalPatients: patients.length,
    pendingFollowUps: patients.length, // Placeholder
    completedToday: 0, // Placeholder
    responseRate: 75, // Placeholder
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      <Header />
      <Dashboard analytics={analytics} />

      <div className="flex justify-end">
        <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Patient
        </button>
      </div>

      <PatientList patients={patients} onSendReminder={handleReminder} />
      <ReminderHistory reminders={reminders} />

      {showModal && (
        <AddPatientModal
          newPatient={newPatient}
          setNewPatient={setNewPatient}
          onAdd={handleAdd}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;