export const trains = [
  // RAJDHANI EXPRESS
  {
    id: 1, name: 'Mumbai Rajdhani Express', number: '12951',
    from: 'Delhi', to: 'Mumbai',
    departure: '16:55', arrival: '08:35',
    categories: [
      { name: '1AC', price: 4585, totalSeats: 24 },
      { name: '2AC', price: 2650, totalSeats: 54 },
      { name: '3AC', price: 1800, totalSeats: 72 },
    ]
  },
  {
    id: 2, name: 'Mumbai Rajdhani Express', number: '12952',
    from: 'Mumbai', to: 'Delhi',
    departure: '17:00', arrival: '08:35',
    categories: [
      { name: '1AC', price: 4585, totalSeats: 24 },
      { name: '2AC', price: 2650, totalSeats: 54 },
      { name: '3AC', price: 1800, totalSeats: 72 },
    ]
  },
  {
    id: 3, name: 'August Kranti Rajdhani Express', number: '12953',
    from: 'Delhi', to: 'Mumbai',
    departure: '17:40', arrival: '10:55',
    categories: [
      { name: '1AC', price: 4585, totalSeats: 24 },
      { name: '2AC', price: 2650, totalSeats: 54 },
      { name: '3AC', price: 1800, totalSeats: 72 },
    ]
  },
  {
    id: 4, name: 'Howrah Rajdhani Express', number: '12301',
    from: 'Delhi', to: 'Kolkata',
    departure: '16:55', arrival: '09:55',
    categories: [
      { name: '1AC', price: 4235, totalSeats: 24 },
      { name: '2AC', price: 2450, totalSeats: 54 },
      { name: '3AC', price: 1650, totalSeats: 72 },
    ]
  },
  {
    id: 5, name: 'Howrah Rajdhani Express', number: '12302',
    from: 'Kolkata', to: 'Delhi',
    departure: '14:05', arrival: '09:55',
    categories: [
      { name: '1AC', price: 4235, totalSeats: 24 },
      { name: '2AC', price: 2450, totalSeats: 54 },
      { name: '3AC', price: 1650, totalSeats: 72 },
    ]
  },
  {
    id: 6, name: 'Bengaluru Rajdhani Express', number: '22691',
    from: 'Delhi', to: 'Bangalore',
    departure: '20:00', arrival: '05:00',
    categories: [
      { name: '1AC', price: 5200, totalSeats: 24 },
      { name: '2AC', price: 3100, totalSeats: 54 },
      { name: '3AC', price: 2100, totalSeats: 72 },
    ]
  },
  {
    id: 7, name: 'Bengaluru Rajdhani Express', number: '22692',
    from: 'Bangalore', to: 'Delhi',
    departure: '20:30', arrival: '05:30',
    categories: [
      { name: '1AC', price: 5200, totalSeats: 24 },
      { name: '2AC', price: 3100, totalSeats: 54 },
      { name: '3AC', price: 2100, totalSeats: 72 },
    ]
  },
  {
    id: 8, name: 'Trivandrum Rajdhani Express', number: '12431',
    from: 'Delhi', to: 'Trivandrum',
    departure: '11:00', arrival: '19:30',
    categories: [
      { name: '1AC', price: 6100, totalSeats: 24 },
      { name: '2AC', price: 3600, totalSeats: 54 },
      { name: '3AC', price: 2400, totalSeats: 72 },
    ]
  },
  {
    id: 9, name: 'Swarna Jayanti Rajdhani Express', number: '12957',
    from: 'Delhi', to: 'Ahmedabad',
    departure: '19:40', arrival: '11:05',
    categories: [
      { name: '1AC', price: 3800, totalSeats: 24 },
      { name: '2AC', price: 2200, totalSeats: 54 },
      { name: '3AC', price: 1500, totalSeats: 72 },
    ]
  },
  {
    id: 10, name: 'Ranchi Rajdhani Express', number: '12454',
    from: 'Delhi', to: 'Ranchi',
    departure: '22:45', arrival: '17:45',
    categories: [
      { name: '1AC', price: 3600, totalSeats: 24 },
      { name: '2AC', price: 2100, totalSeats: 54 },
      { name: '3AC', price: 1400, totalSeats: 72 },
    ]
  },

  // DURONTO EXPRESS
  {
    id: 11, name: 'Mumbai Duronto Express', number: '12261',
    from: 'Delhi', to: 'Mumbai',
    departure: '23:00', arrival: '17:00',
    categories: [
      { name: '1AC', price: 4200, totalSeats: 20 },
      { name: '2AC', price: 2400, totalSeats: 40 },
      { name: '3AC', price: 1600, totalSeats: 80 },
      { name: 'Sleeper', price: 700, totalSeats: 200 },
    ]
  },
  {
    id: 12, name: 'Mumbai Duronto Express', number: '12262',
    from: 'Mumbai', to: 'Delhi',
    departure: '06:00', arrival: '23:55',
    categories: [
      { name: '1AC', price: 4200, totalSeats: 20 },
      { name: '2AC', price: 2400, totalSeats: 40 },
      { name: '3AC', price: 1600, totalSeats: 80 },
      { name: 'Sleeper', price: 700, totalSeats: 200 },
    ]
  },
  {
    id: 13, name: 'Sealdah Duronto Express', number: '12259',
    from: 'Delhi', to: 'Kolkata',
    departure: '08:30', arrival: '05:30',
    categories: [
      { name: '2AC', price: 2200, totalSeats: 40 },
      { name: '3AC', price: 1500, totalSeats: 80 },
      { name: 'Sleeper', price: 650, totalSeats: 200 },
    ]
  },
  {
    id: 14, name: 'Secunderabad Duronto Express', number: '12285',
    from: 'Delhi', to: 'Hyderabad',
    departure: '16:35', arrival: '17:00',
    categories: [
      { name: '2AC', price: 2800, totalSeats: 40 },
      { name: '3AC', price: 1900, totalSeats: 80 },
      { name: 'Sleeper', price: 800, totalSeats: 200 },
    ]
  },
  {
    id: 15, name: 'Jaipur Duronto Express', number: '12239',
    from: 'Delhi', to: 'Jaipur',
    departure: '06:00', arrival: '10:30',
    categories: [
      { name: '2AC', price: 1200, totalSeats: 40 },
      { name: '3AC', price: 800, totalSeats: 80 },
      { name: 'Sleeper', price: 350, totalSeats: 200 },
    ]
  },

  // SHATABDI EXPRESS
  {
    id: 16, name: 'Bhopal Shatabdi Express', number: '12002',
    from: 'Delhi', to: 'Bhopal',
    departure: '06:00', arrival: '13:55',
    categories: [
      { name: '1AC', price: 2200, totalSeats: 24 },
      { name: '2AC', price: 1300, totalSeats: 54 },
    ]
  },
  {
    id: 17, name: 'Lucknow Shatabdi Express', number: '12004',
    from: 'Delhi', to: 'Lucknow',
    departure: '06:10', arrival: '12:30',
    categories: [
      { name: '1AC', price: 1800, totalSeats: 24 },
      { name: '2AC', price: 1100, totalSeats: 54 },
    ]
  },
  {
    id: 18, name: 'Ahmedabad Shatabdi Express', number: '12010',
    from: 'Delhi', to: 'Ahmedabad',
    departure: '06:15', arrival: '20:35',
    categories: [
      { name: '1AC', price: 3200, totalSeats: 24 },
      { name: '2AC', price: 1900, totalSeats: 54 },
    ]
  },
  {
    id: 19, name: 'Ajmer Shatabdi Express', number: '12024',
    from: 'Delhi', to: 'Ajmer',
    departure: '06:05', arrival: '12:50',
    categories: [
      { name: '1AC', price: 1600, totalSeats: 24 },
      { name: '2AC', price: 980, totalSeats: 54 },
    ]
  },
  {
    id: 20, name: 'Chandigarh Shatabdi Express', number: '12046',
    from: 'Delhi', to: 'Chandigarh',
    departure: '07:40', arrival: '11:05',
    categories: [
      { name: '1AC', price: 1200, totalSeats: 24 },
      { name: '2AC', price: 750, totalSeats: 54 },
    ]
  },

  // VANDE BHARAT EXPRESS
  {
    id: 21, name: 'Vande Bharat Express', number: '22436',
    from: 'Delhi', to: 'Varanasi',
    departure: '06:00', arrival: '14:00',
    categories: [
      { name: '1AC', price: 2800, totalSeats: 24 },
      { name: '2AC', price: 1800, totalSeats: 54 },
    ]
  },
  {
    id: 22, name: 'Vande Bharat Express', number: '22439',
    from: 'Delhi', to: 'Jammu',
    departure: '06:00', arrival: '14:30',
    categories: [
      { name: '1AC', price: 2400, totalSeats: 24 },
      { name: '2AC', price: 1500, totalSeats: 54 },
    ]
  },
  {
    id: 23, name: 'Vande Bharat Express', number: '22449',
    from: 'Delhi', to: 'Ahmedabad',
    departure: '06:10', arrival: '18:30',
    categories: [
      { name: '1AC', price: 3200, totalSeats: 24 },
      { name: '2AC', price: 2000, totalSeats: 54 },
    ]
  },

  // GARIB RATH
  {
    id: 24, name: 'Nagpur Garib Rath Express', number: '22113',
    from: 'Delhi', to: 'Nagpur',
    departure: '22:00', arrival: '15:00',
    categories: [
      { name: '3AC', price: 950, totalSeats: 80 },
    ]
  },
  {
    id: 25, name: 'Garib Rath Express', number: '12203',
    from: 'Delhi', to: 'Patna',
    departure: '22:30', arrival: '10:30',
    categories: [
      { name: '3AC', price: 750, totalSeats: 80 },
    ]
  },

  // MAIL / EXPRESS
  {
    id: 26, name: 'Punjab Mail', number: '12137',
    from: 'Mumbai', to: 'Delhi',
    departure: '19:00', arrival: '22:30',
    categories: [
      { name: '1AC', price: 3800, totalSeats: 20 },
      { name: '2AC', price: 2200, totalSeats: 40 },
      { name: '3AC', price: 1500, totalSeats: 80 },
      { name: 'Sleeper', price: 600, totalSeats: 300 },
      { name: 'General', price: 250, totalSeats: 500 },
    ]
  },
  {
    id: 27, name: 'Karnataka Express', number: '12627',
    from: 'Delhi', to: 'Bangalore',
    departure: '22:30', arrival: '07:00',
    categories: [
      { name: '2AC', price: 2800, totalSeats: 40 },
      { name: '3AC', price: 1900, totalSeats: 80 },
      { name: 'Sleeper', price: 750, totalSeats: 300 },
      { name: 'General', price: 300, totalSeats: 500 },
    ]
  },
  {
    id: 28, name: 'Tamil Nadu Express', number: '12621',
    from: 'Delhi', to: 'Chennai',
    departure: '22:30', arrival: '07:10',
    categories: [
      { name: '2AC', price: 3100, totalSeats: 40 },
      { name: '3AC', price: 2100, totalSeats: 80 },
      { name: 'Sleeper', price: 820, totalSeats: 300 },
      { name: 'General', price: 320, totalSeats: 500 },
    ]
  },
  {
    id: 29, name: 'Kerala Express', number: '12625',
    from: 'Delhi', to: 'Trivandrum',
    departure: '11:00', arrival: '19:00',
    categories: [
      { name: '2AC', price: 3600, totalSeats: 40 },
      { name: '3AC', price: 2400, totalSeats: 80 },
      { name: 'Sleeper', price: 950, totalSeats: 300 },
      { name: 'General', price: 380, totalSeats: 500 },
    ]
  },
  {
    id: 30, name: 'Coromandel Express', number: '12841',
    from: 'Kolkata', to: 'Chennai',
    departure: '14:45', arrival: '17:15',
    categories: [
      { name: '2AC', price: 2400, totalSeats: 40 },
      { name: '3AC', price: 1600, totalSeats: 80 },
      { name: 'Sleeper', price: 650, totalSeats: 300 },
      { name: 'General', price: 260, totalSeats: 500 },
    ]
  },
  {
    id: 31, name: 'Gitanjali Express', number: '12859',
    from: 'Mumbai', to: 'Kolkata',
    departure: '06:05', arrival: '12:35',
    categories: [
      { name: '2AC', price: 2600, totalSeats: 40 },
      { name: '3AC', price: 1750, totalSeats: 80 },
      { name: 'Sleeper', price: 700, totalSeats: 300 },
      { name: 'General', price: 280, totalSeats: 500 },
    ]
  },
  {
    id: 32, name: 'Telangana Express', number: '12723',
    from: 'Delhi', to: 'Hyderabad',
    departure: '06:25', arrival: '15:05',
    categories: [
      { name: '2AC', price: 2700, totalSeats: 40 },
      { name: '3AC', price: 1800, totalSeats: 80 },
      { name: 'Sleeper', price: 720, totalSeats: 300 },
      { name: 'General', price: 290, totalSeats: 500 },
    ]
  },
  {
    id: 33, name: 'Goa Express', number: '12779',
    from: 'Delhi', to: 'Goa',
    departure: '15:00', arrival: '23:50',
    categories: [
      { name: '2AC', price: 3200, totalSeats: 40 },
      { name: '3AC', price: 2100, totalSeats: 80 },
      { name: 'Sleeper', price: 840, totalSeats: 300 },
      { name: 'General', price: 340, totalSeats: 500 },
    ]
  },
  {
    id: 34, name: 'Purushottam Express', number: '12801',
    from: 'Delhi', to: 'Puri',
    departure: '22:25', arrival: '05:50',
    categories: [
      { name: '2AC', price: 2500, totalSeats: 40 },
      { name: '3AC', price: 1700, totalSeats: 80 },
      { name: 'Sleeper', price: 680, totalSeats: 300 },
      { name: 'General', price: 270, totalSeats: 500 },
    ]
  },
  {
    id: 35, name: 'Andhra Pradesh Express', number: '12707',
    from: 'Delhi', to: 'Hyderabad',
    departure: '07:05', arrival: '17:15',
    categories: [
      { name: '2AC', price: 2700, totalSeats: 40 },
      { name: '3AC', price: 1800, totalSeats: 80 },
      { name: 'Sleeper', price: 720, totalSeats: 300 },
      { name: 'General', price: 290, totalSeats: 500 },
    ]
  },
  {
    id: 36, name: 'Grand Trunk Express', number: '12615',
    from: 'Delhi', to: 'Chennai',
    departure: '18:40', arrival: '11:00',
    categories: [
      { name: '2AC', price: 3000, totalSeats: 40 },
      { name: '3AC', price: 2000, totalSeats: 80 },
      { name: 'Sleeper', price: 800, totalSeats: 300 },
      { name: 'General', price: 310, totalSeats: 500 },
    ]
  },
  {
    id: 37, name: 'Poorva Express', number: '12303',
    from: 'Delhi', to: 'Kolkata',
    departure: '22:00', arrival: '18:55',
    categories: [
      { name: '2AC', price: 2200, totalSeats: 40 },
      { name: '3AC', price: 1500, totalSeats: 80 },
      { name: 'Sleeper', price: 600, totalSeats: 300 },
      { name: 'General', price: 240, totalSeats: 500 },
    ]
  },
  {
    id: 38, name: 'Mangala Lakshadweep Express', number: '12617',
    from: 'Delhi', to: 'Kochi',
    departure: '21:00', arrival: '21:30',
    categories: [
      { name: '2AC', price: 3800, totalSeats: 40 },
      { name: '3AC', price: 2500, totalSeats: 80 },
      { name: 'Sleeper', price: 1000, totalSeats: 300 },
      { name: 'General', price: 400, totalSeats: 500 },
    ]
  },
  {
    id: 39, name: 'Bihar Sampark Kranti Express', number: '12565',
    from: 'Delhi', to: 'Patna',
    departure: '15:35', arrival: '05:30',
    categories: [
      { name: '2AC', price: 1800, totalSeats: 40 },
      { name: '3AC', price: 1200, totalSeats: 80 },
      { name: 'Sleeper', price: 480, totalSeats: 300 },
      { name: 'General', price: 190, totalSeats: 500 },
    ]
  },
  {
    id: 40, name: 'Sanghamitra Express', number: '12295',
    from: 'Patna', to: 'Bangalore',
    departure: '13:15', arrival: '21:30',
    categories: [
      { name: '2AC', price: 3200, totalSeats: 40 },
      { name: '3AC', price: 2100, totalSeats: 80 },
      { name: 'Sleeper', price: 840, totalSeats: 300 },
      { name: 'General', price: 340, totalSeats: 500 },
    ]
  },
  // ADDITIONAL ROUTES
  {
    id: 41, name: 'Bangalore Mail', number: '12627',
    from: 'Bangalore', to: 'Chennai',
    departure: '22:30', arrival: '05:30',
    categories: [
      { name: '2AC', price: 1200, totalSeats: 40 },
      { name: '3AC', price: 800, totalSeats: 80 },
      { name: 'Sleeper', price: 320, totalSeats: 300 },
      { name: 'General', price: 130, totalSeats: 500 },
    ]
  },
  {
    id: 42, name: 'Mumbai Nagpur Express', number: '12139',
    from: 'Mumbai', to: 'Nagpur',
    departure: '21:20', arrival: '13:00',
    categories: [
      { name: '2AC', price: 1400, totalSeats: 40 },
      { name: '3AC', price: 950, totalSeats: 80 },
      { name: 'Sleeper', price: 380, totalSeats: 300 },
      { name: 'General', price: 150, totalSeats: 500 },
    ]
  },
  {
    id: 43, name: 'Nagpur Mumbai Express', number: '12140',
    from: 'Nagpur', to: 'Mumbai',
    departure: '15:00', arrival: '07:30',
    categories: [
      { name: '2AC', price: 1400, totalSeats: 40 },
      { name: '3AC', price: 950, totalSeats: 80 },
      { name: 'Sleeper', price: 380, totalSeats: 300 },
      { name: 'General', price: 150, totalSeats: 500 },
    ]
  },
  {
    id: 44, name: 'Hyderabad Express', number: '12701',
    from: 'Hyderabad', to: 'Mumbai',
    departure: '14:30', arrival: '08:00',
    categories: [
      { name: '2AC', price: 1800, totalSeats: 40 },
      { name: '3AC', price: 1200, totalSeats: 80 },
      { name: 'Sleeper', price: 480, totalSeats: 300 },
      { name: 'General', price: 190, totalSeats: 500 },
    ]
  },
  {
    id: 45, name: 'Chennai Express', number: '12163',
    from: 'Mumbai', to: 'Chennai',
    departure: '23:59', arrival: '15:45',
    categories: [
      { name: '2AC', price: 2200, totalSeats: 40 },
      { name: '3AC', price: 1500, totalSeats: 80 },
      { name: 'Sleeper', price: 600, totalSeats: 300 },
      { name: 'General', price: 240, totalSeats: 500 },
    ]
  },
  {
    id: 46, name: 'Kolkata Chennai Express', number: '12841',
    from: 'Kolkata', to: 'Chennai',
    departure: '14:45', arrival: '17:15',
    categories: [
      { name: '2AC', price: 2400, totalSeats: 40 },
      { name: '3AC', price: 1600, totalSeats: 80 },
      { name: 'Sleeper', price: 650, totalSeats: 300 },
      { name: 'General', price: 260, totalSeats: 500 },
    ]
  },
  {
    id: 47, name: 'Hyderabad Chennai Express', number: '12759',
    from: 'Hyderabad', to: 'Chennai',
    departure: '06:00', arrival: '14:00',
    categories: [
      { name: '2AC', price: 1400, totalSeats: 40 },
      { name: '3AC', price: 950, totalSeats: 80 },
      { name: 'Sleeper', price: 380, totalSeats: 300 },
      { name: 'General', price: 150, totalSeats: 500 },
    ]
  },
  {
    id: 48, name: 'Bangalore Hyderabad Express', number: '12785',
    from: 'Bangalore', to: 'Hyderabad',
    departure: '22:00', arrival: '08:00',
    categories: [
      { name: '2AC', price: 1200, totalSeats: 40 },
      { name: '3AC', price: 800, totalSeats: 80 },
      { name: 'Sleeper', price: 320, totalSeats: 300 },
      { name: 'General', price: 130, totalSeats: 500 },
    ]
  },
  {
    id: 49, name: 'Pune Express', number: '11007',
    from: 'Mumbai', to: 'Pune',
    departure: '07:15', arrival: '10:30',
    categories: [
      { name: '2AC', price: 600, totalSeats: 40 },
      { name: '3AC', price: 400, totalSeats: 80 },
      { name: 'Sleeper', price: 160, totalSeats: 300 },
      { name: 'General', price: 65, totalSeats: 500 },
    ]
  },
  {
    id: 50, name: 'Ahmedabad Express', number: '12833',
    from: 'Mumbai', to: 'Ahmedabad',
    departure: '08:05', arrival: '14:20',
    categories: [
      { name: '2AC', price: 1100, totalSeats: 40 },
      { name: '3AC', price: 750, totalSeats: 80 },
      { name: 'Sleeper', price: 300, totalSeats: 300 },
      { name: 'General', price: 120, totalSeats: 500 },
    ]
  },
]

// All cities list
export const cities = [
  'Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore',
  'Hyderabad', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Patna',
  'Bhopal', 'Nagpur', 'Chandigarh', 'Varanasi', 'Puri',
  'Goa', 'Kochi', 'Trivandrum', 'Ranchi', 'Jammu',
  'Ajmer', 'Surat', 'Pune'
]

// Search by train number
export const searchByNumber = (number) => {
  return trains.filter(t => t.number.includes(number))
}

// Search by city
export const searchByCity = (from, to) => {
  return trains.filter(t =>
    t.from.toLowerCase() === from.toLowerCase() &&
    t.to.toLowerCase() === to.toLowerCase()
  )
}