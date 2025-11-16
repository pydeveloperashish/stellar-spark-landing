import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectSkeleton = () => (
  <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/30 rounded-2xl overflow-hidden h-full flex flex-col">
    <CardHeader className="pb-2">
      <Skeleton className="h-96 -mt-6 -mx-6 mb-4 rounded-2xl bg-slate-700/50" />
      <Skeleton className="h-5 w-3/4 bg-slate-700/50 mb-2" />
      <Skeleton className="h-4 w-1/2 bg-slate-700/50" />
    </CardHeader>
    <CardContent className="flex-grow">
      <Skeleton className="h-3 w-full bg-slate-700/50 mb-2" />
      <Skeleton className="h-3 w-5/6 bg-slate-700/50 mb-4" />
      <div className="flex gap-2 mb-4">
        <Skeleton className="h-5 w-12 bg-slate-700/50" />
        <Skeleton className="h-5 w-16 bg-slate-700/50" />
        <Skeleton className="h-5 w-14 bg-slate-700/50" />
      </div>
      <Skeleton className="h-0.5 w-0 bg-slate-700/50 mt-4" />
    </CardContent>
  </Card>
);
