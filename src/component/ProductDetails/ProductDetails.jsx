import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const specificDetailsData = useLoaderData();
    const { title, description, price, rating, category, discountPercentage, id } = specificDetailsData;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={specificDetailsData.images[0]} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='bg-gray-500 text-white p-6 rounded-xl'>
                        <h1 className="text-5xl text-yellow-400 font-bold">{title}</h1>
                        <p className="py-6 font-semibold"><span className='text-xl font-semibold'>Price:</span>{price}</p>
                        <p className="py-6 font-semibold"><span className='text-xl font-semibold'>Rating:</span>{rating}</p>
                        <p className="py-6 font-semibold"><span className='text-xl font-semibold'>Category:</span> {category}</p>
                        <p className="py-6 font-semibold"><span className='text-xl font-semibold'>discountPercentage:</span> {discountPercentage}</p>
                        <p className="py-6 font-semibold"><span className='text-xl font-semibold'>Product Description:</span> {description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;