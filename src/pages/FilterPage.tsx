import { useState, useMemo } from "react";

import { PropertyCard } from "../components/PropertyCard";
import type { Filters } from "../types/filter";
import type { Property } from "../types/property";
import { FilterSidebar } from "../components/FilterSidebar";
import { properties } from "../lib/helper";

export default function FilterPage() {
  const [filters, setFilters] = useState<Filters>({});

  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter((property: Property) => {
      const {
        keyword,
        purpose,
        type,
        minLandArea,
        maxLandArea,
        minHouseArea,
        maxHouseArea,
        maxPrice,
        propertyUse,
        facilities,
      } = filters;

      if (
        keyword &&
        !property.title.toLowerCase().includes(keyword.toLowerCase()) &&
        !property.address.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return false;
      }

      if (purpose && property.purpose !== purpose) return false;

      if (type && property.propertyType !== type) return false;

      if (maxPrice && property.price.amount > maxPrice) return false;

      const totalLand =
        (property.features?.landArea?.ropani ?? 0) * 16 +
        (property.features?.landArea?.aana ?? 0);
      if (minLandArea && totalLand < minLandArea) return false;
      if (maxLandArea && totalLand > maxLandArea) return false;

      const houseArea = property.features?.houseAreaSqFt ?? 0;
      if (minHouseArea && houseArea < minHouseArea) return false;
      if (maxHouseArea && houseArea > maxHouseArea) return false;

      if (propertyUse && property.useType !== propertyUse) return false;

      if (facilities?.length) {
        const available = property.otherFacilities ?? {};
        const hasAll = facilities.every((fac) => available[fac]);
        if (!hasAll) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <main className="flex flex-col md:flex-row gap-6 p-4 max-w-7xl mx-auto">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <section className="flex-1 space-y-4">
        <h2 className="text-xl font-semibold">
          {filteredProperties.length} Properties Found
        </h2>

        {filteredProperties.length === 0 && (
          <p className="text-gray-500">No properties match your filters.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}
