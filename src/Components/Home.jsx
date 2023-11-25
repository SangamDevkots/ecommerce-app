import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();
  }, []);

  const images = [
    'https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg',
    'https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg',
    'https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <section className='min-h-screen bg-gray-900 text-white py-10'>
        <div className="container mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-4"></h1>
          <div className="slick-slider">
            <Slider {...sliderSettings} className="mx-auto max-w-4xl">
              {images.map((image, index) => (
                <div key={index}>
                  <img className="w-full  " src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <section className='px-4 md:px-12 py-9 '>
          <NavLink to={"/products"}>
            <h1 className='text-right py-10'>Check all products</h1>
          </NavLink>
          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
      </section>
    </>
  );
};

export default Home;
