export const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5000/api";

export const fetchNotes = async () => {
  const response = await fetch(`${API_URL}/notes`);
  const data = await response.json();
  return data;
};
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Login response:', data); // Log the response data
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null; // Return null or handle the error appropriately
  }
};
export const fetchSignup = async () => {
  const response = await fetch(`${API_URL}/auth/Signup`);
  const data = await response.json();
  return data;
};
