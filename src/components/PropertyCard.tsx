import { BathIcon, BedDoubleIcon, LucideCompass, Scale3D } from "lucide-react";
import type { Property } from "../types/property";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

export const PropertyCard = ({ property }: { property: Property }) => {
  const { features, price, images, title, address, purpose, propertyType } =
    property;

  const mainImage = images?.[0];

  const formatLand = () => {
    if (!features?.landArea) return null;
    const { ropani = 0, aana = 0 } = features.landArea;
    return `${ropani} ropani ${aana} aana`;
  };

  const formatPriceTag = () => {
    const tag = price.negotiable ? "Negotiable" : price.fixed ? "Fixed" : "";
    return tag && <Badge className="bg-gray-100 text-gray-700">{tag}</Badge>;
  };

  return (
    <Link to={`/property/${property.id}`} className="block">
      <Card className="overflow-hidden p-0 gap-2 rounded-sm min-h-full">
        <img src={mainImage} alt={title} className="w-full h-48 object-cover" />
        <CardContent className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">
              Rs. {price.amount.toLocaleString()}
            </span>
            {formatPriceTag()}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <Badge className="bg-blue-100 text-blue-800">{propertyType}</Badge>
            <Badge className="bg-green-100 text-green-800">{purpose}</Badge>
            {features?.furnishingStatus && (
              <Badge className="bg-purple-100 text-purple-800">
                {features.furnishingStatus}
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {propertyType === "house" && (
              <>
                {features?.bedrooms !== undefined && (
                  <Badge variant="secondary">
                    <BedDoubleIcon />
                    {features.bedrooms}
                  </Badge>
                )}
                {features?.bathrooms !== undefined && (
                  <Badge variant="secondary">
                    <BathIcon /> {features.bathrooms}
                  </Badge>
                )}
                {features?.houseAreaSqFt && (
                  <Badge variant="secondary">
                    {" "}
                    <Scale3D /> {features.houseAreaSqFt}
                  </Badge>
                )}
              </>
            )}
            {formatLand() && <Badge variant="secondary">{formatLand()}</Badge>}
            {features?.facingDirection && (
              <Badge variant="destructive">
                <LucideCompass /> {features.facingDirection}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
