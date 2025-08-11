import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const PropertyCardSkeleton = () => {
  return (
    <Card className="overflow-hidden p-0 rounded-sm">
      <Skeleton className="w-full h-48" />

      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>

        <div className="space-y-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <div className="flex gap-2 flex-wrap mt-2">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-6 w-24 rounded-md" />
        </div>

        <div className="flex gap-2 flex-wrap mt-2">
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};
