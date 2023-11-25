import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addcart } from './Cartslice';
import Profile from './Profile';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    function getProfileDataFromLocalStorage() {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        setProfileData(parsedUserData);
      }
    }

    fetchProducts();
    getProfileDataFromLocalStorage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 ">
      {profileData && <Profile profileData={profileData} />}
      <section className="container mx-auto my-8">
        <h3 className="text-3xl font-bold mb-4">All Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 shadow-md rounded-md text-white p-6 transition duration-300 transform hover:scale-105">
              <img className="h-32 object-cover mb-4" src={product.image} alt={product.title} />
              <div className="info">
                <NavLink to={`/singleproduct/${product.id}`} className="text-blue-500 hover:underline">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-400">NRS {product.price}</p>
                </NavLink>
                <button
                  onClick={() => dispatch(Addcart(product))}
                  className="bg-violet-600 text-white rounded-md px-4 py-2 mt-4 transition duration-300 hover:bg-violet-700 focus:outline-none focus:shadow-outline-violet"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
