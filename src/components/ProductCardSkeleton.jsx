import React from "react";

const ProductCardSkeleton = () => (
    <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden animate-pulse">
        {/* Image placeholder */}
        <div className="relative h-48 bg-gray-200 dark:bg-dark-600" />

        {/* Info placeholder */}
        <div className="p-6 space-y-4">
            {/* Title */}
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-dark-600 rounded" />

            {/* Description lines */}
            <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-dark-600 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-dark-600 rounded" />
            </div>

            {/* Rating stars */}
            <div className="h-4 w-28 bg-gray-200 dark:bg-dark-600 rounded" />

            {/* Price & button */}
            <div className="flex items-center justify-between">
                <div className="h-6 w-20 bg-gray-200 dark:bg-dark-600 rounded" />
                <div className="h-10 w-28 bg-gray-200 dark:bg-dark-600 rounded-lg" />
            </div>
        </div>
    </div>
);

export default ProductCardSkeleton;
