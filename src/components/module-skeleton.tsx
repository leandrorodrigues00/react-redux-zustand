import { Skeleton } from "./ui/skeleton";

export default function ModuleSkeleton() {
  return (
    <div>
      <div className="flex animate-pulse items-center gap-3 bg-zinc-800 p-4">
        <div className="aspect-square h-10 w-10 rounded-full bg-zinc-950"></div>
        <Skeleton className="h-3 w-full bg-zinc-700" />
      </div>
      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          <Skeleton className="h-3 w-full bg-zinc-800" />
          <Skeleton className="h-3 w-full bg-zinc-800" />
          <Skeleton className="h-3 w-full bg-zinc-800" />
          <Skeleton className="h-3 w-full bg-zinc-800" />
        </nav>
      </div>
    </div>
  );
}
