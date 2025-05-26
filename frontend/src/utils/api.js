const API = process.env.REACT_APP_API_URL;

export const fetchPatients = async () => {
  const res = await fetch(`${API}/patients`, {
    method: 'GET',
    credentials: 'include', // ✅ allow cookies/session
  });
  return res.json();
};

export const addPatient = async (data) => {
  const res = await fetch(`${API}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include', // ✅ allow session
  });
  return res.json();
};