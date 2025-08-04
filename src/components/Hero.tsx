import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import {
  Bath,
  BedDouble,
  CircleDollarSign,
  Home,
  MapPin,
  Ruler,
} from "lucide-react";

import { locationOptions, propertyTypeOptions } from "../lib/helper";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative min-h-[100vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full px-6 lg:px-40 py-12 text-white gap-10">
        {/* Text */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("hero.headline")}
          </h1>
          <p className="text-lg lg:text-xl mb-6">{t("hero.subtext")}</p>
          <Button
            size="lg"
            className="border-orange-500 border-3 rounded-full px-8 py-6"
          >
            <span className="text-white text-xl">{t("hero.searchButton")}</span>
          </Button>
        </div>

        {/* Filter Form */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-md p-6 w-full max-w-md text-white shadow-xl space-y-5">
          <h2 className="text-xl font-bold">Find your Best Property</h2>
          <p className="text-md">What do you want!</p>

          {/* Location */}
          <div className="space-y-2 w-full">
            <label className="text-sm font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white text-black">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div className="space-y-2 w-full">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Home className="w-4 h-4" />
              Property Type
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white text-black">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center justify-center gap-1 bg-white text-black rounded-full px-3 py-2 text-sm shadow">
              <BedDouble className="w-4 h-4" />
              option
            </div>
            <div className="flex items-center justify-center gap-1 bg-white text-black rounded-full px-3 py-2 text-sm shadow">
              <Bath className="w-4 h-4" />
              option
            </div>
            <div className="flex items-center justify-center gap-1 bg-white text-black rounded-full px-3 py-2 text-sm shadow">
              <Ruler className="w-4 h-4" />
              option
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2 w-full">
            <label className="text-sm font-semibold flex items-center gap-2">
              <CircleDollarSign className="w-4 h-4" />
              Price Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                className="bg-white text-black"
                placeholder="Min Price"
                type="number"
              />
              <Input
                className="bg-white text-black"
                placeholder="Max Price"
                type="number"
              />
            </div>
          </div>

          {/* Search Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 w-full text-white rounded-full text-base">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
