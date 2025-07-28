import { properties } from "../lib/helper";
import { PropertyCard } from "./PropertyCard";
import { Button } from "./ui/button";

export const PropertyListings = () => {
  return (
    <section className="py-12 px-6 lg:px-40 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">Popular Listings</h2>
        <Button className="bg-orange-500">Explore All</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, 6).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="text-sm font-medium border-orange-500 text-orange-600 hover:underline"
        >
          Show More
        </Button>
      </div>
    </section>
  );
};
