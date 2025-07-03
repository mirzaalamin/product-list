import React from 'react'

const ProductCard = ({ product, renderStars, handleSelectProduct }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop';
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
                <div className="mb-4">
                    {renderStars(product.rating)}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200" onClick={handleSelectProduct}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard