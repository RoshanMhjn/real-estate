export const propertyTypes = [
  { label: "House", value: "house" },
  { label: "Land", value: "land" },
] as const;

export const purposeOptions = [
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
] as const;

export const sortOptions = [
  { label: "Price (Low to High)", value: "priceAsc" },
  { label: "Price (High to Low)", value: "priceDesc" },
  { label: "Newest", value: "newest" },
] as const;

export const useTypeOptions = [
  { label: "Residential", value: "residential" },
  { label: "Business", value: "business" },
] as const;

export const roadTypeOptions = [
  { label: "Paved", value: "paved" },
  { label: "Gravel", value: "gravel" },
  { label: "Walking Access", value: "walking_access" },
] as const;

export const facilityOptions = [
  { label: "Garden", value: "garden" },
  { label: "Electricity", value: "electricity" },
  { label: "Water", value: "water" },
  { label: "Telephone", value: "telephone" },
  { label: "Internet", value: "internet" },
  { label: "Cable", value: "cable" },
] as const;

export type FacilityType = (typeof facilityOptions)[number]["value"];
