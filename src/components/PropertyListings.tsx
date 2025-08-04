import { ArrowRight, ArrowUpRight } from "lucide-react";
import { properties } from "../lib/helper";
import { PropertyCard } from "./PropertyCard";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export const PropertyListings = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 py-10 lg:px-40">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">{t("popularListings")}</h2>
        <Button
          className="border-orange-400 border-3 text-orange-500 hover:text-orange-600 rounded-4xl"
          variant="outline"
        >
          Explore All
          <ArrowUpRight />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {properties.slice(0, 6).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          className="border-orange-400 border-3 text-orange-500 hover:text-orange-600 rounded-4xl"
          variant="outline"
        >
          Show More
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};
