export const BASE_URL = 'https://delicate-moon-8929.fly.dev/api';

export const fetchReports = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reports`, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()
    return result;
  } catch (error) {
    console.error(error)
  }
}