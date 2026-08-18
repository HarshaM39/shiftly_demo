function PropertyCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      {/* Image placeholder */}
      <div className="h-40 animate-pulse bg-gray-200" />

      <div className="p-5">
        {/* Title + status */}
        <div className="flex items-start justify-between gap-3">
          <div className="h-6 w-3/5 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-20 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Location */}
        <div className="mt-3 h-4 w-2/5 animate-pulse rounded bg-gray-200" />

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Property details */}
        <div className="mt-5 flex gap-4">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Rent + button */}
        <div className="mt-6 flex items-center justify-between">
          <div className="h-6 w-28 animate-pulse rounded bg-gray-200" />
          <div className="h-9 w-16 animate-pulse rounded-md bg-gray-200" />
        </div>

        {/* Delete button */}
        <div className="mt-3 h-9 w-full animate-pulse rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export default PropertyCardSkeleton;