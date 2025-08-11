export type PropertyType = "house" | "land";
export type PropertyPurpose = "sale" | "rent";
export type UseType = "residential" | "business";
export type RoadType = "paved" | "gravel" | "walking_access";

export interface Property {
  id: number;
  title: string;
  address: string;

  images: string[];
  price: {
    amount: number;
    negotiable: boolean;
    fixed?: boolean;
  };
  featuredVideo: string;
  locationMap: string;
  features: {
    floors?: number;
    bedrooms?: number;
    kitchens?: number;
    livingRooms?: number;
    bathrooms?: number;
    parkingBike?: boolean;
    parkingCar?: boolean;
    landArea: {
      ropani?: number;
      aana?: number;
    };
    houseAreaSqFt?: number;
    furnishingStatus?: "furnished" | "semi-furnished" | "unfurnished";
    facingDirection?: string;
    roadAccess: RoadType;
  };

  contact: {
    name?: string;
    phone: string;
  };

  facilitiesDescription: string;
  otherFacilities: {
    garden?: boolean;
    electricity?: boolean;
    water?: boolean;
    telephone?: boolean;
    internet?: boolean;
    cable?: boolean;
  };

  description: string;
  pillarSize?: string;
  tankCapacityLiters?: number;

  builtYear: {
    bs?: string;
    ad?: number;
  };

  propertyType: PropertyType;
  purpose: PropertyPurpose;
  useType?: UseType;

  locationDetails?: {
    nearbyLandmarks?: string[];
    distanceTo: {
      hospital?: string;
      airport?: string;
      pharmacy?: string;
      departmentStore?: string;
      school?: string;
      college?: string;
      gym?: string;
      publicTransport?: string;
      policeStation?: string;
      atm?: string;
      hotel?: string;
      restaurant?: string;
      wardOffice?: string;
    };
  };
}
