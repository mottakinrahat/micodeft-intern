import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Form from '../Form/Form';

const Home = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductData(data.products));
    }, [])

    console.log(productData);
    return (
        <div className='flex justify-center '>
            <div className='grid grid-cols-2 mx-6 gap-3'>
                {
                    productData.map(product => <SingleCard key={product.id} product={product}></SingleCard>)
                }
            </div>

            <div className='mt-0 w-3/4'>
                <h2 className='text-4xl font-bold text-center'>Add new product</h2>
            <Form className="mt-0"></Form>
            </div>
        </div>
    );
};

export default Home;