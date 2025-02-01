const API_URL = import.meta.env.VITE_API_URL;

export async function refreshAccessToken() {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include", // Send HTTP-only cookie
    });
  
    if (!res.ok) return null; // Refresh token expired
  
    const data = await res.json();
    localStorage.setItem("access_token", data.access_token);
    return data.access_token;
  }
