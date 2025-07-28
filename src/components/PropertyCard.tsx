import { Heart } from "lucide-react";
import type { Property } from "../types/property";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="overflow-hidden p-0 gap-2">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4 ">
        <div className=" font-semibold">
          <span className="text-2xl text-orange-600">{property.price}</span>
          /month
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.address}</p>
          </div>

          <div>
            <button
              className="text-orange-600 hover:scale-110 transition-transform border-orange-600 border-2 rounded-full p-3"
              aria-label="Toggle favorite"
            >
              <Heart
                className="w-5 h-5  
                "
              />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {property.features.map((feature, i) => (
            <Badge key={i} className="text-xs bg-orange-500 mt-4">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
