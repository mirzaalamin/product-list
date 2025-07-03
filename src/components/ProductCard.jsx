import React from 'react';

const ProductCard = ({ product, renderStars, handleSelectProduct }) => {
    return (
        <div
            className="
        relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white/60 shadow-md
        backdrop-blur-sm transition-transform duration-300 ease-out
        hover:-translate-y-3 hover:shadow-2xl
        group
      "
        >
            {/* — Top animated gradient bar (pure décor) — */}
            <span
                className="
          pointer-events-none absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
            />

            {/* Product image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110 group-hover:rotate-1
          "
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop';
                    }}
                />

                {/* Subtle darkening on hover for legibility */}
                <div
                    className="
            absolute inset-0 bg-black/30
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
                />

                {/* Corner badge (e.g. “New”) — remove if not needed */}
                <span
                    className="
            absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold
            text-gray-800 shadow
          "
                >
                    New
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-6">
                <h3
                    className="
            line-clamp-2 text-lg font-semibold text-gray-900
            transition-colors duration-200 group-hover:text-indigo-600
          "
                >
                    {product.title}
                </h3>

                <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {product.description}
                </p>

                {renderStars && (
                    <div className="-mt-1">{renderStars(product.rating)}</div>
                )}

                {/* Price + action */}
                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-indigo-600">
                        ${product.price.toFixed(2)}
                    </span>

                    <button
                        onClick={handleSelectProduct}
                        className="
              relative overflow-hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white
              shadow-inner transition-all duration-200
              before:absolute before:inset-0 before:-z-10
              before:translate-x-[-100%] before:bg-indigo-500
              before:transition-transform before:duration-300
              hover:bg-indigo-700 hover:before:translate-x-0
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            "
                    >
                        View&nbsp;Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
