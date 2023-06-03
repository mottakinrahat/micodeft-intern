import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ product }) => {
    console.log(product);
    const{title,description,price,rating,category,discountPercentage,id}=product;


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={product.images[0]} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><span className='font-bold'>Price:</span>{price}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/productDetails/${id}`}> <button  className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;