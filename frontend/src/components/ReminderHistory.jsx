// ReminderHistory.jsx
import React from 'react';

const ReminderHistory = ({ reminders }) => (
  <ul className="space-y-2">
    {reminders.map(reminder => (
      <li key={reminder.id} className="bg-gray-100 p-3 rounded">
        <p><strong>Type:</strong> {reminder.type}</p>
        <p><strong>Sent At:</strong> {new Date(reminder.sentAt).toLocaleString()}</p>
        <p><strong>Status:</strong> {reminder.status}</p>
        {reminder.response && <p><strong>Response:</strong> {reminder.response}</p>}
      </li>
    ))}
  </ul>
);

export default ReminderHistory;