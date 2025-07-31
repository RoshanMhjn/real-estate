import type { City } from "../types/city";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export const CityCard = ({ city }: { city: City }) => {
  return (
    <Card className="relative overflow-hidden rounded-xl shadow-md group p-0 cursor-pointer">
      <img
        src={city.image}
        alt={city.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      <CardContent className="absolute bottom-4 left-4 z-20 text-white p-0">
        <div className="flex items-center justify-center gap-2">
          <Badge className="text-sm bg-orange-500">{city.title}</Badge>
          <Badge className="text-sm bg-orange-500">{city.listings}</Badge>
        </div>
      </CardContent>

      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">Explore Listings</p>
      </div>
    </Card>
  );
};
