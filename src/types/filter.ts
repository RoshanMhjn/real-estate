import type {
  PropertyPurpose,
  PropertyType,
  UseType,
  RoadType,
} from "./property";

import type { FacilityType } from "../lib/filters";

export type Filters = {
  keyword?: string;
  purpose?: PropertyPurpose;
  type?: PropertyType;
  sort?: "priceAsc" | "priceDesc" | "newest";
  maxPrice?: number;
  minLandArea?: number;
  maxLandArea?: number;
  minHouseArea?: number;
  maxHouseArea?: number;
  builtYear?: string;
  roadType?: RoadType;
  propertyUse?: UseType;
  facilities?: FacilityType[];
};
