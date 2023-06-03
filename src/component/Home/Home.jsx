import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Form from '../Form/Form';

const Home = () => {
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProductData(data.products));
  }, []);

  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const filteredProducts = productData.filter(prod =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (sortDirection === 'asc') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by toy name"
        className="input input-bordered"
      />
      <button onClick={()=>setSortDirection('asc')} className="my-2 px-4 py-2 bg-blue-500 text-white rounded">
        Sort by Price Ascending
      </button>
      <button onClick={()=>setSortDirection('desc')} className="my-2 px-4 py-2 bg-blue-500 text-white rounded">
        Sort by Price Descending
      </button>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 mx-6 gap-3">
          {sortedProducts.map(product => (
            <SingleCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-0 w-3/4">
          <h2 className="text-4xl font-bold text-center">Add new product</h2>
          <Form className="mt-0" />
        </div>
      </div>
    </>
  );
};

export default Home;
