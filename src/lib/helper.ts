import type { Property } from "../types/property";

export const mobileSections = [
  { title: "Home", items: [] },
  {
    title: "Listings",
    items: [],
  },
  {
    title: "Property",
    items: ["Components", "Documentation", "Blog"],
  },
  {
    title: "Pages",
    items: ["Components", "Documentation", "Blog"],
  },
];

export const locationOptions = [
  { value: "kathmandu", label: "Kathmandu, Nepal" },
  { value: "lalitpur", label: "Lalitpur, Nepal" },
  { value: "pokhara", label: "Pokhara, Nepal" },
  { value: "biratnagar", label: "Biratnagar, Nepal" },
];

export const propertyTypeOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "villa", label: "Villa" },
];

export const cities = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg",
    title: "Kathmandu",
    listings: "300 Listings",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/14095456/pexels-photo-14095456.jpeg",
    title: "Lalitpur",
    listings: "200 Listings",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1588134/pexels-photo-1588134.jpeg",
    title: "Pokhara",
    listings: "30 Listings",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/27488567/pexels-photo-27488567.jpeg",
    title: "Biratnagar",
    listings: "50 Listings",
  },
];

export const testimonials = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    name: "John Doe",
    message:
      "Buying my first home was a breeze thanks to this team. They were professional, responsive, and truly cared about my needs.",
    address: "Arlington, Virginia",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
    name: "Jane Smith",
    message:
      "As a seller, I appreciated how quickly they listed and sold my property. Their market knowledge is unmatched.",
    address: "Austin, Texas",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/30450841/pexels-photo-30450841.jpeg",
    name: "Rahul Kumar",
    message:
      "We found our dream home in just 2 weeks! The process was smooth and well-handled from start to finish.",
    address: "San Jose, California",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    name: "Lisa Tanaka",
    message:
      "Their attention to detail and negotiation skills saved us thousands. Highly recommend!",
    address: "Seattle, Washington",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
    name: "Omar Ali",
    message:
      "I relocated from abroad, and their team helped me settle into the perfect home with ease and professionalism.",
    address: "Jersey City, New Jersey",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Top 10 Tips for First-Time Homebuyers",
    description:
      "Buying your first home can be overwhelming. Discover practical tips to guide your purchase journey.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    tags: ["Real Estate", "Home Buying"],
    readCount: 128,
    time: "2 days ago",
  },
  {
    id: 2,
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Learn the secrets of home staging to attract potential buyers and sell your home faster.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    tags: ["Selling", "Staging"],
    readCount: 204,
    time: "1 week ago",
  },
  {
    id: 3,
    title: "Rental Property Maintenance Checklist",
    description:
      "Keep your rental properties in top shape with this essential seasonal maintenance checklist.",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    tags: ["Renting", "Property Management"],
    readCount: 95,
    time: "5 days ago",
  },
];

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern 3-Storey Family House",
    address: "Harisiddhi, Lalitpur",
    images: [
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
    ],
    price: {
      amount: 28000000,
      negotiable: true,
    },
    features: {
      floors: 3,
      bedrooms: 4,
      kitchens: 1,
      livingRooms: 2,
      bathrooms: 3,
      parkingCar: true,
      parkingBike: true,
      landArea: {
        ropani: 0,
        aana: 6,
      },
      houseAreaSqFt: 1800,
      furnishingStatus: "semi-furnished",
      facingDirection: "South-East",
      roadAccess: "paved",
    },
    contact: {
      name: "Ram Rai",
      phone: "9800000001",
    },
    facilitiesDescription:
      "Well ventilated house with basic utilities and security.",
    otherFacilities: {
      garden: true,
      electricity: true,
      water: true,
      internet: true,
    },
    description:
      "Beautiful family home located in a quiet neighborhood. Great for families looking for comfort and accessibility.",
    builtYear: {
      bs: "2074",
      ad: 2017,
    },
    pillarSize: "12x12",
    tankCapacityLiters: 1000,
    propertyType: "house",
    purpose: "sale",
    useType: "residential",
    locationDetails: {
      nearbyLandmarks: ["Harisiddhi Temple", "Lalitpur Engineering College"],
      distanceTo: {
        hospital: "500m",
        school: "300m",
        publicTransport: "100m",
        atm: "200m",
        wardOffice: "100m",
      },
    },
  },
  {
    id: 2,
    title: "Commercial Land Plot Near Ring Road",
    address: "Kalanki, Kathmandu",
    images: [
      "https://images.pexels.com/photos/27062931/pexels-photo-27062931.jpeg",
    ],
    price: {
      amount: 15000000,
      negotiable: false,
      fixed: true,
    },
    features: {
      landArea: {
        ropani: 1,
        aana: 4,
      },
      roadAccess: "gravel",
    },
    contact: {
      name: "Maya Karki",
      phone: "9812345678",
    },
    facilitiesDescription: "Ideal for commercial building or warehouse setup.",
    otherFacilities: {
      electricity: true,
      water: true,
      telephone: true,
    },
    description:
      "Strategic location close to the highway. Suitable for warehouse, retail, or other commercial purpose.",
    builtYear: {},
    propertyType: "land",
    purpose: "sale",
    useType: "business",
    locationDetails: {
      distanceTo: {
        departmentStore: "200m",
        publicTransport: "50m",
        atm: "100m",
      },
    },
  },
  {
    id: 3,
    title: "Small Land for Rent – Budget Friendly",
    address: "Biratnagar, Biratnagar",
    images: [
      "https://images.pexels.com/photos/19200806/pexels-photo-19200806.jpeg",
    ],
    price: {
      amount: 10000,
      negotiable: true,
    },
    features: {
      landArea: {
        ropani: 0,
        aana: 10,
      },
      roadAccess: "walking_access",
    },
    contact: {
      phone: "9808765432",
    },
    facilitiesDescription: "Peaceful area, perfect for farming or storage.",
    otherFacilities: {
      water: true,
    },
    description:
      "Affordable land for rent. Great for temporary shed, farming or small warehouse.",
    builtYear: {},
    propertyType: "land",
    purpose: "rent",
    useType: "residential",
    locationDetails: {
      distanceTo: {
        hospital: "2km",
        publicTransport: "1.5km",
      },
    },
  },
  {
    id: 4,
    title: "Fully Furnished Bungalow with Garden",
    address: "Lakeside, Pokhara",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
      "https://images.pexels.com/photos/17613793/pexels-photo-17613793.jpeg",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    ],
    price: {
      amount: 50000,
      negotiable: true,
    },
    features: {
      floors: 2,
      bedrooms: 3,
      kitchens: 2,
      livingRooms: 1,
      bathrooms: 2,
      parkingBike: true,
      landArea: {
        ropani: 0,
        aana: 12,
      },
      houseAreaSqFt: 1400,
      furnishingStatus: "furnished",
      facingDirection: "North",
      roadAccess: "paved",
    },
    contact: {
      name: "Rabin Shrestha",
      phone: "9845123456",
    },
    facilitiesDescription:
      "Modern bungalow perfect for families or vacation rental.",
    otherFacilities: {
      garden: true,
      electricity: true,
      water: true,
      internet: true,
      cable: true,
    },
    description:
      "Enjoy mountain views, fully furnished interiors and nearby access to Phewa Lake.",
    builtYear: {
      bs: "2068",
      ad: 2011,
    },
    tankCapacityLiters: 2000,
    propertyType: "house",
    purpose: "rent",
    useType: "residential",
    locationDetails: {
      nearbyLandmarks: ["Phewa Lake", "Lakeside Market"],
      distanceTo: {
        pharmacy: "150m",
        publicTransport: "100m",
        restaurant: "50m",
        hotel: "100m",
      },
    },
  },
];
