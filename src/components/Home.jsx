
import React, { useState } from 'react';
import { Plus, Star, StarHalf } from 'lucide-react';
import AddProductModal from '../components/AddProductModal';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductDetails from './ProductDetails';



const Home = () => {

    // const [products, setProducts] = useState([
    //     {
    //         id: '1',
    //         title: 'Premium Wireless Headphones',
    //         description: 'High-quality noise-canceling headphones with premium sound quality and comfortable design.',
    //         price: 199.99,
    //         rating: 4.8,
    //         thumbnail: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
    //     },
    //     {
    //         id: '2',
    //         title: 'Ergonomic Office Chair',
    //         description: 'Comfortable office chair with lumbar support and adjustable height.',
    //         price: 299.99,
    //         rating: 4.6,
    //         thumbnail: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
    //     },
    //     {
    //         id: '3',
    //         title: 'Smart Fitness Tracker',
    //         description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    //         price: 149.99,
    //         rating: 4.5,
    //         thumbnail: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop'
    //     }
    // ]);

    const getProducts = async () => {
        const response = await axios.get(`http://localhost:8000/products?_page=1&_per_page=6`)

        return response.data
    }

    const { data: products, isError, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProduct = (newProduct) => {
        const product = {
            ...newProduct,
            id: Date.now().toString()
        };
        // setProducts(prev => [...prev, product]);
        setIsModalOpen(false);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center space-x-1">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
                <span className="text-sm text-gray-600 ml-2">({rating})</span>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="container mx-auto px-4 py-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            <span className="text-blue-600">ProductHub</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Discover our curated collection of premium products
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {products?.data?.length > 0 && products.data.map((product) => (
                            <ProductCard key={product.id} product={product} renderStars={renderStars} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {products?.data?.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                <Plus className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products yet</h3>
                            <p className="text-gray-600 mb-6">Get started by adding your first product</p>
                        </div>
                    )}

                    {/* Floating Add Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50"
                        aria-label="Add new product"
                    >
                        <Plus className="w-6 h-6" />
                    </button>

                    {/* Add Product Modal */}
                    <AddProductModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleAddProduct}
                    />
                    <ProductDetails />
                </div>
            </div>

        </>
    )
}

export default Home
