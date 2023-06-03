import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Form from '../Form/Form';

const Home = () => {
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductData(data.products));
    }, [])
   
    const [productData, setProductData] = useState([])
    const [searchTerm,setSearchTerm] = useState('');
   
    const filteredProducts = productData.filter((prod) => {
        console.log(prod);
        return prod.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    const handleSearch=(event) => {
       setSearchTerm(event.target.value);
    }

    console.log(productData);
    return (
      <>
     <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by toy name"
          className="input input-bordered"
        />
        <div className='flex justify-center '>
            <div className='grid grid-cols-2 mx-6 gap-3'>
                {
                     filteredProducts.map(product => <SingleCard key={product.id} product={product}></SingleCard>)
                }
            </div>

            <div className='mt-0 w-3/4'>
                <h2 className='text-4xl font-bold text-center'>Add new product</h2>
            <Form className="mt-0"></Form>
            </div>
        </div>
        </>
    );
};

export default Home;