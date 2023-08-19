import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Singleproduct from './Singleproduct';
import Cartslice from './Cartslice';
import { Addcart, RemoveAllcart  } from './Cartslice';
import { useDispatch } from 'react-redux';
import Profile from './Profile';
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

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

    fetchProducts();
  }, []);


  return (
    <>
<Profile></Profile>
      <section className=' px-9 py-1 '>
     
        <h3 className=' font-bold '>All Products</h3>
        <div className="products grid md:grid-cols-3 gap-10 ">


          {
            products.map((product, index) => <div className=' bg-white shadow-md p-5 rounded-md '>
              <div key={index} className="">
                <img className='h-32' src={product.image} alt="" />
              </div>
              <div className="info">
                <NavLink to={`/singleproduct/${product.id}`}>
                  <h3>{product.title}</h3>
                  <p> NRS {product.price}</p>
                </NavLink>
                  <button onClick={() => dispatch(Addcart(product))} className=' bg-violet-500 text-white rounded-md px-5 py-3 '>Add to cart</button>
              


              </div>
            </div>)
          }
        </div>


      </section>


    </>

  )
}

export default Products
