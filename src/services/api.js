import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5021/api'
})

// Auth APIs
export const registerUser = (data) => API.post('/auth/register', data)
export const loginUser = (data) => API.post('/auth/login', data)
export const updateProfile = (id, data) => API.put(`/auth/update/${id}`, data)
export const changePassword = (id, data) => API.put(`/auth/change-password/${id}`, data)

// Train APIs
export const searchTrains = (from, to) => API.get(`/train/search?from=${from}&to=${to}`)
export const addTrain = (data) => API.post('/train', data)

// Booking APIs
export const bookTicket = (data) => API.post('/booking', data)
export const getUserBookings = (userId) => API.get(`/booking/user/${userId}`)
export const cancelBooking = (id) => API.put(`/booking/cancel/${id}`)