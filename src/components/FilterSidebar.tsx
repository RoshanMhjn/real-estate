import React from "react";

import {
  propertyTypes,
  purposeOptions,
  sortOptions,
  useTypeOptions,
  roadTypeOptions,
  facilityOptions,
} from "../lib/filters";

import type { Filters } from "../types/filter";
import type { FacilityType } from "../lib/filters";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
}) => {
  const handleCheckboxChange = (facility: FacilityType, checked: boolean) => {
    setFilters((prev) => {
      const currentFacilities = prev.facilities || [];
      if (checked) {
        if (!currentFacilities.includes(facility)) {
          return { ...prev, facilities: [...currentFacilities, facility] };
        }
      } else {
        return {
          ...prev,
          facilities: currentFacilities.filter((f) => f !== facility),
        };
      }
      return prev;
    });
  };

  return (
    <aside className="w-full max-w-sm bg-white p-4 rounded-xl shadow space-y-4">
      <div>
        <label className="font-medium text-sm mb-1 block">Purpose</label>
        <Select
          value={filters.purpose}
          onValueChange={(val) =>
            setFilters((prev) => ({
              ...prev,
              purpose: val as Filters["purpose"],
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Purpose" />
          </SelectTrigger>
          <SelectContent>
            {purposeOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="font-medium text-sm mb-1 block">Property Type</label>
        <Select
          value={filters.type}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, type: val as Filters["type"] }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="font-medium text-sm mb-1 block">Use Type</label>
        <Select
          value={filters.propertyUse}
          onValueChange={(val) =>
            setFilters((prev) => ({
              ...prev,
              propertyUse: val as Filters["propertyUse"],
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Use Type" />
          </SelectTrigger>
          <SelectContent>
            {useTypeOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Road Type */}
      <div>
        <label className="font-medium text-sm mb-1 block">Road Access</label>
        <Select
          value={filters.roadType}
          onValueChange={(val) =>
            setFilters((prev) => ({
              ...prev,
              roadType: val as Filters["roadType"],
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Road Type" />
          </SelectTrigger>
          <SelectContent>
            {roadTypeOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxPrice: Number(e.target.value) || undefined,
            }))
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          placeholder="Min Land (aana)"
          value={filters.minLandArea ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minLandArea: Number(e.target.value) || undefined,
            }))
          }
        />
        <Input
          type="number"
          placeholder="Max Land (aana)"
          value={filters.maxLandArea ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxLandArea: Number(e.target.value) || undefined,
            }))
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          placeholder="Min House Area (sqft)"
          value={filters.minHouseArea ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minHouseArea: Number(e.target.value) || undefined,
            }))
          }
        />
        <Input
          type="number"
          placeholder="Max House Area (sqft)"
          value={filters.maxHouseArea ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxHouseArea: Number(e.target.value) || undefined,
            }))
          }
        />
      </div>
      <Input
        placeholder="Built Year (BS)"
        value={filters.builtYear ?? ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            builtYear: e.target.value || undefined,
          }))
        }
      />

      <div className="space-y-1">
        <label className="font-medium text-sm mb-1 block">Facilities</label>
        {facilityOptions.map((facility) => (
          <div key={facility.value} className="flex items-center space-x-2">
            <Checkbox
              id={facility.value}
              checked={filters.facilities?.includes(facility.value)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(
                  facility.value as FacilityType,
                  checked === true
                )
              }
            />
            <label htmlFor={facility.value} className="text-sm">
              {facility.label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <label className="font-medium text-sm mb-1 block">Sort</label>
        <Select
          value={filters.sort}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, sort: val as Filters["sort"] }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-full mt-4"
        onClick={() => {
          console.log("Applied Filters", filters);
        }}
      >
        Apply Filters
      </Button>
    </aside>
  );
};
