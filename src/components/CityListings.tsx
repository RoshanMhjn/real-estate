import { ArrowUpRight } from "lucide-react";
import { cities } from "../lib/helper";
import { CityCard } from "./CityCard";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export const CityListings = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 py-10 lg:px-40">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">{t("exploreByCities")}</h2>

        <Button
          className="border-orange-400 border-3 text-orange-500 hover:text-orange-600 rounded-4xl"
          variant="outline"
        >
          Show All
          <ArrowUpRight />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 ">
        <div className="lg:col-span-3 ">
          <CityCard city={cities[0]} />
        </div>

        <div className="lg:col-span-2">
          <CityCard city={cities[1]} />
        </div>

        <div className="lg:col-span-2">
          <CityCard city={cities[2]} />
        </div>

        <div className="lg:col-span-3">
          <CityCard city={cities[3]} />
        </div>
      </div>
    </div>
  );
};
