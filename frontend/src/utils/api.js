const API = process.env.REACT_APP_API_URL;

export const fetchPatients = async () => {
  const res = await fetch(`${API}/patients`);
  return res.json();
};

export const addPatient = async (data) => {
  const res = await fetch(`${API}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};