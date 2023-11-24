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
            setProducts(data.slice(0,3));
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
  const images = [
    'https://marketing-interactive-assets.b-cdn.net/images/sg/content-images/cristiano-ronaldo-for-9.9-super-shopping-day-1.jpg?auto_optimize=medium',
    'data:image/jpeg;base64,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',
    'https://example.com/image3.jpg',
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
<div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Hello, welcome to the homepage</h1>
      <div className="slick-slider">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className="w-full" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
     
      </div>
    </div>

    <section className='px-12 py-9 '>


<NavLink to ={"/products"}>  <h1 className='  text-right py-10  '>check all products </h1></NavLink>
<div className="products grid md:grid-cols-3 gap-10 ">
{products.map((product, index) => (
            <div className='bg-white shadow-md p-5 rounded-md' key={index}>
              <div className="">
                <img className='h-32' src={product.image} alt="" />
              </div>
              <div className="info">
                <NavLink to={`/singleproduct/${product.id}`}>
                  <h3>{product.title}</h3>
                  <p>NRS {product.price}</p>
                </NavLink>
              
              </div>
            </div>
        
          ))}
    
</div>
</section>

</>
    
  );
};

export default Home;
