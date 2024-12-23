import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: "https://prod.thebibleodyssey.com/api/send-email",
  headers: {
    "Content-Type": "application/json",
  },
});

export const subscribeTonewsLetter = async (email: string) => {
  const response = await axiosInstance.post('', {
    email,
  })
  return response.data
} 