// Centralized yacht data for all destinations

export interface Yacht {
  id: string;
  name: string;
  model: string;
  image: string;
  price: string;
  priceNote?: string;
  capacity?: string;
  guests?: string;
  cabins?: string;
  crew: string;
  length: string;
  speed: string;
  year: string;
  refit?: string;
  location: string;
  destination: string;
  type?: string;
  enginePower?: string;
  fuelConsumption?: string;
  features?: string[];
}

export const yachtsData: Yacht[] = [
  // Albania Yachts
  {
    id: "sunseeker-56-albania",
    name: "Sunseeker 56",
    model: "Sunseeker 56",
    image: "/sunseeker56.jpeg",
    price: "2,500",
    priceNote: "/day",
    guests: "6 | 10 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "56ft | 17m",
    speed: "15 knots",
    year: "2003 | 2024",
    location: "Himarë",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 435 HP",
    fuelConsumption: "220 lt/hr"
  },
  {
    id: "dyna-45-albania",
    name: "Dyna 45",
    model: "Dyna 45",
    image: "/dyna45.jpeg",
    price: "1,500",
    priceNote: "/day (fuel included)",
    guests: "6 | 12 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "45ft | 13.8m",
    speed: "20 knots",
    year: "1994 | 2024",
    location: "Porto Palermo",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 370 HP",
    fuelConsumption: "120 lt/hr"
  },
  {
    id: "dus-zamani-albania",
    name: "Dus Zamani",
    model: "Custom Gulet",
    image: "/dus zamani.jpeg",
    price: "9,500",
    priceNote: "/week (fuel included)",
    guests: "16 Guests",
    cabins: "8 Cabins",
    crew: "5",
    length: "79ft | 24m",
    speed: "10 knots",
    year: "2010",
    location: "Albania & Greece",
    destination: "albania",
    type: "Gulet",
    enginePower: "1 x 315 HP",
    fuelConsumption: "25 lt/hr"
  },
  {
    id: "brigitte-albania",
    name: "Brigitte (Diano 25S)",
    model: "Diano 25S",
    image: "/diano-s.jpeg",
    price: "26,000",
    priceNote: "/week (fuel excluded)",
    guests: "10 Guests",
    cabins: "5 Cabins",
    crew: "4",
    length: "82ft | 25m",
    speed: "14 knots",
    year: "2006",
    location: "Multi-destination",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "160 lt/hr"
  },
  {
    id: "ferretti-39-albania",
    name: "Ferretti 39",
    model: "Ferretti 39",
    image: "/ferreti39.jpeg",
    price: "1,500",
    priceNote: "/day",
    guests: "4 | 12 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "39ft | 12m",
    speed: "22 knots",
    year: "1992 | 2024",
    location: "Orikum",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 315 HP",
    fuelConsumption: "120 lt/hr"
  },
  {
    id: "azimut-46-albania",
    name: "Azimut 46",
    model: "Azimut 46",
    image: "/placeholder.svg",
    price: "2,000",
    priceNote: "/day",
    guests: "8 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "46ft | 14m",
    speed: "25 knots",
    year: "2018",
    location: "Sarandë",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 435 HP",
    fuelConsumption: "140 lt/hr"
  },
  {
    id: "azimut-68-albania",
    name: "Azimut 68",
    model: "Azimut 68",
    image: "/placeholder.svg",
    price: "3,800",
    priceNote: "/day",
    guests: "10 Guests",
    cabins: "4 Cabins",
    crew: "3",
    length: "68ft | 21m",
    speed: "28 knots",
    year: "2020",
    location: "Vlora",
    destination: "albania",
    type: "Luxury Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "250 lt/hr"
  },
  {
    id: "cranchi-48-albania",
    name: "Cranchi 48",
    model: "Cranchi 48",
    image: "/placeholder.svg",
    price: "1,600",
    priceNote: "/day",
    guests: "8 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "48ft | 14.8m",
    speed: "26 knots",
    year: "2019",
    location: "Durrës",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 435 HP",
    fuelConsumption: "150 lt/hr"
  },
  {
    id: "fiart-47-albania",
    name: "Fiart 47",
    model: "Fiart 47",
    image: "/placeholder.svg",
    price: "3,800",
    priceNote: "/day",
    guests: "12 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "47ft | 14.65m",
    speed: "30 knots",
    year: "2022",
    location: "Himarë",
    destination: "albania",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "180 lt/hr"
  },
  {
    id: "mazarin-72-albania",
    name: "Mazarin 72",
    model: "Mazarin 72",
    image: "/placeholder.svg",
    price: "4,600",
    priceNote: "/day",
    guests: "12 Guests",
    cabins: "4 Cabins",
    crew: "4",
    length: "72ft | 21.96m",
    speed: "24 knots",
    year: "2017",
    location: "Sarandë",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "280 lt/hr"
  },
  {
    id: "verve-43-albania",
    name: "Verve 43 Colombo",
    model: "Verve 43 Colombo",
    image: "/placeholder.svg",
    price: "1,000",
    priceNote: "/day (day only)",
    guests: "12 Guests",
    cabins: "—",
    crew: "2",
    length: "43ft | 13m",
    speed: "35 knots",
    year: "2020",
    location: "Vlora",
    destination: "albania",
    type: "Day Cruiser",
    enginePower: "2 x 350 HP",
    fuelConsumption: "160 lt/hr"
  },
  {
    id: "astondoa-102-albania",
    name: "Astondoa 102 GLX",
    model: "Astondoa 102 GLX",
    image: "/placeholder.svg",
    price: "60,900",
    priceNote: "/week",
    guests: "10 Guests",
    cabins: "5 Cabins",
    crew: "6",
    length: "102ft | 31.45m",
    speed: "26 knots",
    year: "2016",
    location: "Multi-destination",
    destination: "albania",
    type: "Mega Yacht",
    enginePower: "2 x 2,000 HP",
    fuelConsumption: "400 lt/hr"
  },
  {
    id: "sunseeker-58-albania",
    name: "Sunseeker 58",
    model: "Sunseeker 58",
    image: "/placeholder.svg",
    price: "2,500",
    priceNote: "/day",
    guests: "8 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "58ft | 17.6m",
    speed: "32 knots",
    year: "2014",
    location: "Sarandë",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "200 lt/hr"
  },
  {
    id: "ghibli-22-albania",
    name: "Ghibli 22",
    model: "Ghibli 22",
    image: "/placeholder.svg",
    price: "On request",
    guests: "8 Guests",
    cabins: "4 Cabins",
    crew: "3",
    length: "72ft | 22.3m",
    speed: "30 knots",
    year: "2015",
    location: "Durrës",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "N/A"
  },
  {
    id: "gulet-25-albania",
    name: "Gulet 25",
    model: "Traditional Gulet",
    image: "/placeholder.svg",
    price: "500",
    priceNote: "/day (30 pax)",
    guests: "30 Guests",
    cabins: "10 Cabins",
    crew: "4",
    length: "82ft | 25m",
    speed: "8 knots",
    year: "2008",
    location: "Albania Coast",
    destination: "albania",
    type: "Gulet",
    enginePower: "1 x 240 HP",
    fuelConsumption: "20 lt/hr"
  },
  {
    id: "aicon-52-albania",
    name: "Aicon 52",
    model: "Aicon 52",
    image: "/placeholder.svg",
    price: "2,000",
    priceNote: "/day",
    guests: "10 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "52ft | 15.8m",
    speed: "28 knots",
    year: "2016",
    location: "Himarë",
    destination: "albania",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "180 lt/hr"
  },
  {
    id: "sea-witch-albania",
    name: "Sea Witch",
    model: "Hanse 548",
    image: "/seawitch.jpg",
    price: "On request",
    guests: "Up to 8 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "56ft | 17.2m",
    speed: "8 knots",
    year: "2017",
    location: "Marina Orikum, Vlorë",
    destination: "albania",
    type: "Sailing Yacht",
    enginePower: "150 HP Diesel",
    fuelConsumption: "8 lt/hr",
    features: [
      "1 Master Cabin with en-suite, queen-size island bed, shower, premium bedding, air conditioning, USB ports",
      "2 Double Guest Cabins, each with en-suite, shower, storage, lighting, air conditioning, sea view portlight, USB charging",
      "Spacious outdoor deck with sunbathing and dining area",
      "Ambient deck lighting & integrated sound system",
      "Large swim platform with easy access to the sea",
      "Fully equipped kitchen with induction stove, oven, fridge, freezer, coffee machine, microwave, dishwasher",
      "Ideal for day cruises along Albanian Riviera",
      "Perfect for multi-day charters for families or small groups",
      "Suitable for private events (sunset dinners, celebrations, parties)"
    ]
  },

  // Montenegro Yachts
  {
    id: "nauti-cat-montenegro",
    name: "NAUTI CAT (Lagoon 50)",
    model: "Lagoon 50",
    image: "/placeholder.svg",
    price: "1,500",
    priceNote: "/day or €5,000/week",
    guests: "10 Guests",
    cabins: "6 Cabins",
    crew: "2",
    length: "50ft | 15.24m",
    speed: "9 knots",
    year: "2021",
    location: "Tivat",
    destination: "montenegro",
    type: "Catamaran",
    enginePower: "2 x 57 HP",
    fuelConsumption: "12 lt/hr"
  },
  {
    id: "sadri-usta-montenegro",
    name: "SADRI USTA 1",
    model: "Traditional Gulet",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "16 Guests",
    cabins: "8 Cabins",
    crew: "5",
    length: "105ft | 32m",
    speed: "10 knots",
    year: "2010",
    location: "Budva",
    destination: "montenegro",
    type: "Gulet",
    enginePower: "1 x 420 HP",
    fuelConsumption: "30 lt/hr"
  },
  {
    id: "kaptan-sevket-montenegro",
    name: "KAPTAN SEVKET",
    model: "Traditional Gulet",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "16 Guests",
    cabins: "8 Cabins",
    crew: "5",
    length: "105ft | 32m",
    speed: "10 knots",
    year: "2012",
    location: "Kotor",
    destination: "montenegro",
    type: "Gulet",
    enginePower: "1 x 420 HP",
    fuelConsumption: "30 lt/hr"
  },
  {
    id: "riana-montenegro",
    name: "RIANA",
    model: "Custom Motor Sailor",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "18 Guests",
    cabins: "9 Cabins",
    crew: "6",
    length: "138ft | 42m",
    speed: "12 knots",
    year: "2008",
    location: "Bar",
    destination: "montenegro",
    type: "Motor Sailor",
    enginePower: "1 x 500 HP",
    fuelConsumption: "35 lt/hr"
  },
  {
    id: "aquariva-montenegro",
    name: "AQUARIVA",
    model: "Riva Aquariva Super",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "8 Guests",
    cabins: "—",
    crew: "1",
    length: "33ft | 10m",
    speed: "40 knots",
    year: "2020",
    location: "Porto Montenegro",
    destination: "montenegro",
    type: "Day Cruiser",
    enginePower: "2 x 350 HP",
    fuelConsumption: "120 lt/hr"
  },
  {
    id: "fjord-44-montenegro",
    name: "FJORD 44",
    model: "Fjord 44 Open",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "12 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "44ft | 13.45m",
    speed: "35 knots",
    year: "2019",
    location: "Herceg Novi",
    destination: "montenegro",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "150 lt/hr"
  },
  {
    id: "sanlorenzo-sd92-montenegro",
    name: "Sanlorenzo SD92",
    model: "Sanlorenzo SD92",
    image: "/placeholder.svg",
    price: "76,800",
    priceNote: "/week",
    guests: "10 Guests",
    cabins: "5 Cabins",
    crew: "5",
    length: "92ft | 27.6m",
    speed: "28 knots",
    year: "2019",
    location: "Porto Montenegro",
    destination: "montenegro",
    type: "Mega Yacht",
    enginePower: "2 x 2,000 HP",
    fuelConsumption: "350 lt/hr"
  },
  {
    id: "numarine-78-montenegro",
    name: "Numarine 78 Fly",
    model: "Numarine 78 Fly",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "8 Guests",
    cabins: "4 Cabins",
    crew: "4",
    length: "78ft | 23.98m",
    speed: "26 knots",
    year: "2021",
    location: "Tivat",
    destination: "montenegro",
    type: "Flybridge",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "280 lt/hr"
  },

  // Croatia Yacht
  {
    id: "alessandro-croatia",
    name: "Alessandro",
    model: "Custom Motor Sailor",
    image: "/placeholder.svg",
    price: "Price on request",
    guests: "10 Guests",
    cabins: "5 Cabins",
    crew: "6",
    length: "131ft | 40m",
    speed: "12 knots",
    year: "2018",
    location: "Split",
    destination: "croatia",
    type: "Motor Sailor",
    enginePower: "1 x 715 HP",
    fuelConsumption: "40 lt/hr"
  },

  // Greece Yachts
  {
    id: "alfamarine-50-greece",
    name: "ALFAMARINE 50",
    model: "Alfamarine 50",
    image: "/alfamarine50.jpeg",
    price: "1,400",
    priceNote: "/half day • €1,700/full day",
    guests: "10 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "50ft | 15.24m",
    speed: "32 knots",
    year: "2015",
    location: "Athens",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "180 lt/hr"
  },
  {
    id: "astondoa-53-greece",
    name: "ASTONDOA 53",
    model: "Astondoa 53",
    image: "/astondoa53.jpeg",
    price: "1,900",
    priceNote: "/half day • €2,200/full day",
    guests: "10 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "53ft | 16.15m",
    speed: "28 knots",
    year: "2017",
    location: "Mykonos",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "190 lt/hr"
  },
  {
    id: "cranchi-38-greece",
    name: "CRANCHI 38",
    model: "Cranchi 38",
    image: "/cranchi38.jpeg",
    price: "800",
    priceNote: "/half day • €1,100/full day",
    guests: "8 Guests",
    cabins: "2 Cabins",
    crew: "1",
    length: "38ft | 11.58m",
    speed: "30 knots",
    year: "2018",
    location: "Santorini",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 350 HP",
    fuelConsumption: "120 lt/hr"
  },
  {
    id: "fairline-43-greece",
    name: "FAIRLINE 43",
    model: "Fairline 43",
    image: "/placeholder.svg",
    price: "900",
    priceNote: "/half day • €1,200/full day",
    guests: "8 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "43ft | 13.11m",
    speed: "26 knots",
    year: "2016",
    location: "Corfu",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 435 HP",
    fuelConsumption: "140 lt/hr"
  },
  {
    id: "ferretti-620-greece",
    name: "FERRETTI 620",
    model: "Ferretti 620",
    image: "/ferreti620.jpeg",
    price: "2,300",
    priceNote: "/half day • €2,800/full day",
    guests: "12 Guests",
    cabins: "3 Cabins",
    crew: "3",
    length: "62ft | 18.9m",
    speed: "30 knots",
    year: "2014",
    location: "Rhodes",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "280 lt/hr"
  },
  {
    id: "fiart-43-greece",
    name: "FIART 43",
    model: "Fiart 43",
    image: "/fiart43.jpeg",
    price: "2,000",
    priceNote: "/half day • €2,500/full day",
    guests: "10 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "43ft | 13.11m",
    speed: "35 knots",
    year: "2020",
    location: "Zakynthos",
    destination: "greece",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "160 lt/hr"
  },
  {
    id: "fjord-43-greece",
    name: "FJORD 43",
    model: "Fjord 43",
    image: "/fjord43.jpeg",
    price: "1,200",
    priceNote: "/half day • €1,500/full day",
    guests: "10 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "43ft | 13.11m",
    speed: "32 knots",
    year: "2019",
    location: "Crete",
    destination: "greece",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "150 lt/hr"
  },
  {
    id: "galeon-53-greece",
    name: "GALEON 53",
    model: "Galeon 53",
    image: "/GALEON53.jpeg",
    price: "1,800",
    priceNote: "/half day • €2,100/full day",
    guests: "10 Guests",
    cabins: "3 Cabins",
    crew: "2",
    length: "53ft | 16.15m",
    speed: "28 knots",
    year: "2018",
    location: "Paros",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 715 HP",
    fuelConsumption: "200 lt/hr"
  },
  {
    id: "om-68-greece",
    name: "OM 68",
    model: "OM 68",
    image: "/OM68.jpeg",
    price: "3,800",
    priceNote: "/half day • €4,500/full day",
    guests: "12 Guests",
    cabins: "4 Cabins",
    crew: "3",
    length: "68ft | 20.73m",
    speed: "26 knots",
    year: "2016",
    location: "Naxos",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "300 lt/hr"
  },
  {
    id: "pardo-43-greece",
    name: "PARDO 43",
    model: "Pardo 43",
    image: "/PARDO43.jpeg",
    price: "2,500",
    priceNote: "/half day • €3,000/full day",
    guests: "12 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "43ft | 13.11m",
    speed: "40 knots",
    year: "2021",
    location: "Ios",
    destination: "greece",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "180 lt/hr"
  },
  {
    id: "pershing-70-greece",
    name: "PERSHING 70",
    model: "Pershing 70",
    image: "/pershing70.jpeg",
    price: "Contact for pricing",
    guests: "10 Guests",
    cabins: "3 Cabins",
    crew: "3",
    length: "70ft | 21.34m",
    speed: "45 knots",
    year: "2019",
    location: "Milos",
    destination: "greece",
    type: "Performance Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "400 lt/hr"
  },
  {
    id: "posillipo-64f-greece",
    name: "POSILLIPO 64F",
    model: "Posillipo 64F",
    image: "/posillipo 64f.jpeg",
    price: "2,400",
    priceNote: "/half day • €2,900/full day",
    guests: "10 Guests",
    cabins: "3 Cabins",
    crew: "3",
    length: "64ft | 19.51m",
    speed: "28 knots",
    year: "2015",
    location: "Syros",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,000 HP",
    fuelConsumption: "250 lt/hr"
  },
  {
    id: "sunseeker-65-greece",
    name: "SUNSEEKER 65",
    model: "Sunseeker 65",
    image: "/sunseeker65.jpeg",
    price: "2,800",
    priceNote: "/half day • €3,400/full day",
    guests: "12 Guests",
    cabins: "3 Cabins",
    crew: "3",
    length: "65ft | 19.81m",
    speed: "32 knots",
    year: "2017",
    location: "Kos",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,200 HP",
    fuelConsumption: "300 lt/hr"
  },
  {
    id: "technema-80-greece",
    name: "TECHNEMA 80",
    model: "Technema 80",
    image: "/technema80.jpeg",
    price: "4,800",
    priceNote: "/half day • €5,400/full day",
    guests: "12 Guests",
    cabins: "4 Cabins",
    crew: "4",
    length: "80ft | 24.38m",
    speed: "30 knots",
    year: "2018",
    location: "Patmos",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,800 HP",
    fuelConsumption: "380 lt/hr"
  },
  {
    id: "tesoro-41-greece",
    name: "TESORO 41",
    model: "Tesoro 41",
    image: "/tesoro41.jpeg",
    price: "2,500",
    priceNote: "/half day • €3,000/full day",
    guests: "10 Guests",
    cabins: "2 Cabins",
    crew: "2",
    length: "41ft | 12.5m",
    speed: "38 knots",
    year: "2020",
    location: "Samos",
    destination: "greece",
    type: "Day Cruiser",
    enginePower: "2 x 435 HP",
    fuelConsumption: "170 lt/hr"
  },
  {
    id: "versil-90-greece",
    name: "VERSIL 90",
    model: "Versil 90",
    image: "/versil90.jpeg",
    price: "4,500",
    priceNote: "/half day • €5,200/full day",
    guests: "12 Guests",
    cabins: "4 Cabins",
    crew: "4",
    length: "90ft | 27.43m",
    speed: "26 knots",
    year: "2016",
    location: "Chios",
    destination: "greece",
    type: "Motor Yacht",
    enginePower: "2 x 1,800 HP",
    fuelConsumption: "360 lt/hr"
  }
];

// Helper functions
export const getYachtsByDestination = (destination: string): Yacht[] => {
  return yachtsData.filter(yacht => yacht.destination === destination);
};

export const getYachtById = (id: string): Yacht | undefined => {
  return yachtsData.find(yacht => yacht.id === id);
};

export const getAllYachts = (): Yacht[] => {
  return yachtsData;
};