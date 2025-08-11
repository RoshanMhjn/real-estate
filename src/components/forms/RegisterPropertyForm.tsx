import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";

import type { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const baseSchema = z.object({
  title: z.string().min(3),
  address: z.string().min(5),
  phone: z.string().min(7),
  amount: z.number().positive(),
  negotiable: z.boolean(),
  propertyType: z.enum(["house", "land"]),
  purpose: z.enum(["sale", "rent"]),
  useType: z.enum(["residential", "business"]).optional(),
  roadAccess: z.enum(["paved", "gravel", "walking_access"]),
  description: z.string().min(10),
  videoURL: z.string().min(1),
});

const houseSchema = z.object({
  floors: z.number().min(1),
  bedrooms: z.number().min(0),
  kitchens: z.number().min(0),
  livingRooms: z.number().min(0),
  bathrooms: z.number().min(0),
  parkingBike: z.boolean(),
  parkingCar: z.boolean(),
  houseAreaSqFt: z.number().positive(),
  landAreaRopani: z.number().optional(),
  landAreaAana: z.number().optional(),
  furnishingStatus: z.enum(["furnished", "semi-furnished", "unfurnished"]),
  facilities: z.array(z.string()).optional(),
});

const landSchema = z.object({
  landAreaRopani: z.number().optional(),
  landAreaAana: z.number().optional(),
  landAreaPaisa: z.number().optional(),
  landAreaDam: z.number().optional(),
  isAgricultural: z.boolean(),
});

type BaseForm = z.infer<typeof baseSchema>;
type HouseForm = z.infer<typeof houseSchema>;
type LandForm = z.infer<typeof landSchema>;

function calculateProgressBase(data: BaseForm) {
  const keys = [
    "title",
    "address",
    "phone",
    "amount",
    "negotiable",
    "propertyType",
    "purpose",
    "roadAccess",
    "description",
  ] as const;
  let filledCount = 0;
  for (const key of keys) {
    if (key === "negotiable") {
      if (data.negotiable !== undefined && data.negotiable !== null)
        filledCount++;
    } else {
      if (data[key]) filledCount++;
    }
  }
  return (filledCount / keys.length) * 100;
}

function calculateProgressHouse(data: HouseForm) {
  const keys = [
    "floors",
    "bedrooms",
    "kitchens",
    "livingRooms",
    "bathrooms",
    "parkingBike",
    "parkingCar",
    "houseAreaSqFt",
    "furnishingStatus",
  ] as const;
  let filledCount = 0;
  for (const key of keys) {
    if (data[key] !== undefined && data[key] !== null) {
      filledCount++;
    }
  }
  return (filledCount / keys.length) * 100;
}

export function RegisterPropertyForm() {
  const [step, setStep] = useState<"base" | "house" | "land">("base");
  const [baseData, setBaseData] = useState<BaseForm | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<BaseForm>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      negotiable: false,
    },
  });

  const {
    register: registerHouse,
    handleSubmit: handleSubmitHouse,
    formState: { errors: houseErrors },
    watch: watchHouse,
    setValue: setHouseValue,
  } = useForm<HouseForm>({
    resolver: zodResolver(houseSchema),
    defaultValues: {
      parkingBike: false,
      parkingCar: false,
      facilities: [],
    },
  });

  const {
    register: registerLand,
    handleSubmit: handleSubmitLand,
    watch: watchLand,
    setValue: setLandValue,
  } = useForm<LandForm>({
    resolver: zodResolver(landSchema),
    defaultValues: {
      isAgricultural: false,
    },
  });

  const onBaseSubmit = (data: BaseForm) => {
    setBaseData(data);
    if (data.propertyType === "house") {
      setStep("house");
      toast.success("Information Submitted");
    } else {
      setStep("land");
    }
  };

  const onHouseSubmit: SubmitHandler<HouseForm> = (houseData) => {
    const finalData = {
      ...baseData,
      ...houseData,
    };
    console.log("Full House Property Data:", finalData);
    toast.success("Information Submitted");
  };

  const onLandSubmit: SubmitHandler<LandForm> = (landData) => {
    const finalData = {
      ...baseData,
      ...landData,
    };
    console.log("Full Land Property Data:", finalData);
    toast.success("Information Submitted");
  };

  if (step === "house") {
    const houseValues = watchHouse();
    const furnishingStatus = houseValues.furnishingStatus;
    const facilities = houseValues.facilities || [];
    const progress = calculateProgressHouse(houseValues);

    return (
      <form
        onSubmit={handleSubmitHouse(onHouseSubmit)}
        className="space-y-6 max-w-4xl mx-auto p-6 border rounded-xl shadow my-10"
      >
        <h2 className="text-2xl font-bold">House Details</h2>

        <Progress value={progress} className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="floors" className="mb-4">
              Floors
            </Label>
            <Input
              id="floors"
              type="number"
              {...registerHouse("floors", { valueAsNumber: true })}
              min={1}
            />
            {houseErrors.floors && (
              <p className="text-red-500">{houseErrors.floors.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="bedrooms" className="mb-4">
              Bedrooms
            </Label>
            <Input
              id="bedrooms"
              type="number"
              {...registerHouse("bedrooms", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="kitchens" className="mb-4">
              Kitchens
            </Label>
            <Input
              id="kitchens"
              type="number"
              {...registerHouse("kitchens", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="livingRooms" className="mb-4">
              Living Rooms
            </Label>
            <Input
              id="livingRooms"
              type="number"
              {...registerHouse("livingRooms", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="bathrooms" className="mb-4">
              Bathrooms
            </Label>
            <Input
              id="bathrooms"
              type="number"
              {...registerHouse("bathrooms", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div className="flex items-center gap-4">
            <Checkbox
              id="parkingBike"
              checked={!!houseValues.parkingBike}
              onCheckedChange={(val) => setHouseValue("parkingBike", !!val)}
            />
            <Label htmlFor="parkingBike" className="mb-0 cursor-pointer">
              Bike Parking
            </Label>
          </div>

          <div className="flex items-center gap-4">
            <Checkbox
              id="parkingCar"
              checked={!!houseValues.parkingCar}
              onCheckedChange={(val) => setHouseValue("parkingCar", !!val)}
            />
            <Label htmlFor="parkingCar" className="mb-0 cursor-pointer">
              Car Parking
            </Label>
          </div>

          <div>
            <Label htmlFor="houseAreaSqFt" className="mb-4">
              House Area (sq ft)
            </Label>
            <Input
              id="houseAreaSqFt"
              type="number"
              {...registerHouse("houseAreaSqFt", { valueAsNumber: true })}
              min={1}
            />
            {houseErrors.houseAreaSqFt && (
              <p className="text-red-500">
                {houseErrors.houseAreaSqFt.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="landAreaRopani" className="mb-4">
              Land Area (Ropani)
            </Label>
            <Input
              id="landAreaRopani"
              type="number"
              {...registerHouse("landAreaRopani", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="landAreaAana" className="mb-4">
              Land Area (Aana)
            </Label>
            <Input
              id="landAreaAana"
              type="number"
              {...registerHouse("landAreaAana", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div className="col-span-full">
            <Select
              value={furnishingStatus}
              onValueChange={(val) =>
                setHouseValue(
                  "furnishingStatus",
                  val as HouseForm["furnishingStatus"]
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Furnishing Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                <SelectItem value="unfurnished">Unfurnished</SelectItem>
              </SelectContent>
            </Select>
            {houseErrors.furnishingStatus && (
              <p className="text-red-500">
                {houseErrors.furnishingStatus.message}
              </p>
            )}
          </div>

          <div className="col-span-full">
            <p className="font-medium mt-4 mb-2">Facilities</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["garden", "electricity", "water", "telephone", "cable"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={item}
                      onCheckedChange={(checked) => {
                        const current = watchHouse("facilities") || [];
                        if (checked) {
                          setHouseValue("facilities", [...current, item]);
                        } else {
                          setHouseValue(
                            "facilities",
                            current.filter((f) => f !== item)
                          );
                        }
                      }}
                      checked={facilities.includes(item)}
                    />
                    <Label
                      htmlFor={item}
                      className="capitalize cursor-pointer mb-0"
                    >
                      {item}
                    </Label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep("base")}
            className="flex-1"
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Submit Property
          </Button>
        </div>
      </form>
    );
  }

  if (step === "land") {
    const landValues = watchLand();

    return (
      <form
        onSubmit={handleSubmitLand(onLandSubmit)}
        className="space-y-6 max-w-4xl mx-auto p-6 border rounded-xl shadow my-10"
      >
        <h2 className="text-2xl font-bold">Land Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="landAreaRopani" className="mb-4">
              Land Area (Ropani)
            </Label>
            <Input
              id="landAreaRopani"
              type="number"
              {...registerLand("landAreaRopani", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="landAreaAana" className="mb-4">
              Land Area (Aana)
            </Label>
            <Input
              id="landAreaAana"
              type="number"
              {...registerLand("landAreaAana", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="landAreaPaisa" className="mb-4">
              Land Area (Paisa)
            </Label>
            <Input
              id="landAreaPaisa"
              type="number"
              {...registerLand("landAreaPaisa", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div>
            <Label htmlFor="landAreaDam" className="mb-4">
              Land Area (Dam)
            </Label>
            <Input
              id="landAreaDam"
              type="number"
              {...registerLand("landAreaDam", { valueAsNumber: true })}
              min={0}
            />
          </div>

          <div className="flex items-center gap-2 col-span-full">
            <Checkbox
              id="isAgricultural"
              checked={!!landValues.isAgricultural}
              onCheckedChange={(checked) =>
                setLandValue("isAgricultural", !!checked)
              }
            />
            <Label htmlFor="isAgricultural" className="mb-0 cursor-pointer">
              Is Agricultural Land
            </Label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep("base")}
            className="flex-1"
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Submit Property
          </Button>
        </div>
      </form>
    );
  }

  const baseValues = watch();
  const progress = calculateProgressBase(baseValues);
  const propertyType = baseValues.propertyType;
  const purpose = baseValues.purpose;
  const useType = baseValues.useType;
  const roadAccess = baseValues.roadAccess;

  return (
    <form
      onSubmit={handleSubmit(onBaseSubmit)}
      className="space-y-6 max-w-4xl mx-auto p-6 border rounded-xl shadow my-10"
    >
      <h2 className="text-2xl font-bold">Register Property</h2>

      <Progress value={progress} className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="title" className="mb-4">
            Title
          </Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="Property Title"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="address" className="mb-4">
            Address
          </Label>
          <Input
            id="address"
            {...register("address")}
            placeholder="Full address"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="mb-4">
            Phone
          </Label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="Contact number"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="videoURL" className="mb-4">
            Video URL
          </Label>
          <Input
            id="videoURL"
            {...register("videoURL")}
            placeholder="Enter video URL"
          />
          {errors.videoURL && (
            <p className="text-red-500">{errors.videoURL.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="amount" className="mb-4">
            Price Amount
          </Label>
          <Input
            id="amount"
            type="number"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Price in NPR"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="negotiable"
            checked={!!baseValues.negotiable}
            onCheckedChange={(checked) => setValue("negotiable", !!checked)}
          />
          <Label htmlFor="negotiable" className="mb-0 cursor-pointer">
            Negotiable
          </Label>
        </div>

        <div>
          <Label htmlFor="propertyType" className="mb-4">
            Property Type
          </Label>
          <Select
            value={propertyType}
            onValueChange={(val) =>
              setValue("propertyType", val as BaseForm["propertyType"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
          {errors.propertyType && (
            <p className="text-red-500">{errors.propertyType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="purpose" className="mb-4">
            Purpose
          </Label>
          <Select
            value={purpose}
            onValueChange={(val) =>
              setValue("purpose", val as BaseForm["purpose"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="For Sale or Rent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">Sale</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
          {errors.purpose && (
            <p className="text-red-500">{errors.purpose.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="useType" className="mb-4">
            Use Type
          </Label>
          <Select
            value={useType}
            onValueChange={(val) =>
              setValue("useType", val as BaseForm["useType"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Optional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="roadAccess" className="mb-4">
            Road Access
          </Label>
          <Select
            value={roadAccess}
            onValueChange={(val) =>
              setValue("roadAccess", val as BaseForm["roadAccess"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select road type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paved">Paved</SelectItem>
              <SelectItem value="gravel">Gravel</SelectItem>
              <SelectItem value="walking_access">Walking Access</SelectItem>
            </SelectContent>
          </Select>
          {errors.roadAccess && (
            <p className="text-red-500">{errors.roadAccess.message}</p>
          )}
        </div>

        <div className="col-span-full">
          <Label htmlFor="description" className="mb-4">
            Description
          </Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Write about the property..."
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full">
        Next
      </Button>
    </form>
  );
}
