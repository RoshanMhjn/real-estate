import { useParams } from "react-router-dom";
import type { Property } from "../types/property";
import { properties } from "../lib/helper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import {
  Axis3D,
  Bath,
  Bed,
  BikeIcon,
  Building,
  Car,
  CompassIcon,
  ForkKnife,
  GlassWater,
  House,
  LampDesk,
  PanelRightDashed,
  PillBottleIcon,
  Sofa,
  Timer,
} from "lucide-react";

export default function PropertyDetail() {
  const { id } = useParams();
  const property: Property | undefined = properties.find(
    (p) => p.id === Number(id)
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!property) return <div className="p-4">Property not found</div>;

  const {
    title,
    address,
    images,
    price,
    features,
    contact,
    facilitiesDescription,
    otherFacilities,
    description,
    propertyType,
    purpose,
    useType,
    locationDetails,
    builtYear,
    tankCapacityLiters,
    pillarSize,
  } = property;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Swiper
        modules={[Thumbs, Navigation]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-md"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`property-${i}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        className="mt-2"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`thumb-${i}`}
              className="h-20 w-full object-cover rounded-md border"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{address}</p>
        <p className="text-lg font-semibold text-green-700">
          Rs. {price.amount.toLocaleString()}{" "}
          {price.negotiable && "(Negotiable)"} {price.fixed && "(Fixed)"}
        </p>

        <div className="text-sm text-gray-500">
          Type: {propertyType}, Purpose: {purpose}, Use: {useType}
        </div>
      </div>

      {/* Features */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.bedrooms && (
          <p className="flex gap-2">
            <Bed /> Bedrooms: {features.bedrooms}
          </p>
        )}
        {features.bathrooms && (
          <p className="flex gap-2">
            <Bath /> Bathrooms: {features.bathrooms}
          </p>
        )}
        {features.kitchens && (
          <p className="flex gap-2">
            {" "}
            <ForkKnife />
            Kitchens: {features.kitchens}
          </p>
        )}
        {features.livingRooms && (
          <p className="flex gap-2">
            <Sofa /> Living Rooms: {features.livingRooms}
          </p>
        )}
        {features.floors && (
          <p className="flex gap-2">
            <Building /> Floors: {features.floors}
          </p>
        )}
        {features.furnishingStatus && (
          <p className="flex gap-2">
            <LampDesk /> Furnishing: {features.furnishingStatus}
          </p>
        )}
        {features.facingDirection && (
          <p className="flex gap-2">
            <CompassIcon /> Facing: {features.facingDirection}
          </p>
        )}
        {features.parkingCar && (
          <p className="flex gap-2">
            <Car /> Car Parking: Yes
          </p>
        )}
        {features.parkingBike && (
          <p className="flex gap-2">
            {" "}
            <BikeIcon /> Bike Parking: Yes
          </p>
        )}
        <p className="flex gap-2">
          <Axis3D /> Land Area: {features.landArea.ropani ?? 0} Ropani{" "}
          {features.landArea.aana ?? 0} Aana
        </p>
        {features.houseAreaSqFt && (
          <p className="flex gap-2">
            <House /> House Area: {features.houseAreaSqFt} sq ft
          </p>
        )}
        <p className="flex gap-2">
          {" "}
          <PanelRightDashed /> Road Access: {features.roadAccess}
        </p>
      </div>

      <div className="mt-6 space-y-2">
        {pillarSize && (
          <p className="flex gap-2">
            {" "}
            <PillBottleIcon /> Pillar Size: {pillarSize}
          </p>
        )}
        {tankCapacityLiters && (
          <p className="flex gap-2">
            {" "}
            <GlassWater /> Tank Capacity: {tankCapacityLiters} Liters
          </p>
        )}
        {builtYear.bs || builtYear.ad ? (
          <p className="flex gap-2">
            <Timer /> Built Year: {builtYear.bs ?? ""} BS / {builtYear.ad ?? ""}{" "}
            AD
          </p>
        ) : null}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Facilities</h2>
        <p>{facilitiesDescription}</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          {Object.entries(otherFacilities).map(
            ([key, value]) =>
              value && (
                <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</li>
              )
          )}
        </ul>
      </div>

      {locationDetails && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Location & Landmarks</h2>
          {property.locationDetails?.nearbyLandmarks?.length ? (
            <ul className="list-disc list-inside space-y-1">
              {property.locationDetails.nearbyLandmarks.map((landmark, idx) => (
                <li key={idx}>{landmark}</li>
              ))}
            </ul>
          ) : (
            <p>No nearby landmarks provided.</p>
          )}
          <ul className="list-disc list-inside text-sm mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(locationDetails.distanceTo).map(
              ([place, dist]) =>
                dist && (
                  <li key={place}>
                    {place.replace(/([A-Z])/g, " $1")}: {dist}
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Name: {contact.name ?? "N/A"}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    </div>
  );
}
