import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';


const Singleproduct = () => {
  const { id } = useParams();
  const [items, setItems] = useState({})
  const dispatch = useDispatch();

  const fetchSingleProductData = () => {

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => setItems(json))

  } 


  useEffect(() => {
    fetchSingleProductData()

  }, [])

  console.log(items)



  return (
    <div className=" min-h-screen bg-gray-900 text-white py-10">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-white ">Men</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-white">Clothing</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li className="text-sm">
            <a href="#" aria-current="page" className="font-medium text-white hover:text-white">Basic Tee 6-Pack</a>
          </li>
        </ol>
      </nav>
  

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img src={items.image} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center"/>
        </div>
        <div className=" lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src={items.image} alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center"/>
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src={items.image} alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center"/>
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          
        </div>
      </div>
  

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{items.title}</h1>
        </div>
  

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-white ">{items.price}</p>
  

          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
         
                <svg className="text-white h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg className="text-white h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg className="text-white h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg className="text-white h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
                <svg className="text-white h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
              </div>
              <p className="sr-only">4 out of 5 stars</p>
              <a href="#" className="ml-3 text-sm font-medium text-whitehover:text-indigo-500">117 reviews</a>
            </div>
          </div>
  
          <form className="mt-10">
  
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
  
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
       
                 
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                    <span id="color-choice-1-label" className="sr-only">Gray</span>
                    <span aria-hidden="true" className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                  </label>
       
             
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                    <span id="color-choice-2-label text-white" className="sr-only">Black</span>
                    <span aria-hidden="true" className="h-8 w-8 text-black rounded-full border border-red border-opacity-10"></span>
                  </label>
                </div>
              </fieldset>
            </div>
  
     
           
  
            <button  onClick={() => dispatch(Addcart(product))} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag </button>

          </form>
        </div>
  
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

          <div>
            <h3 className="sr-only">Description</h3>
  
            <div className="space-y-6">
              <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
            </div>
          </div>
  
          <div className="mt-10">
            <h3 className="text-sm font-medium text-white">Highlights</h3>
  
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-white"><span className="text-white">Hand cut and sewn locally</span></li>
                <li className="text-white"><span className="text-white">Dyed with our proprietary colors</span></li>
                <li className="text-white"><span className="text-white">Pre-washed &amp; pre-shrunk</span></li>
                <li className="text-white"><span className="text-white">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-10">
            <h2 className="text-sm font-medium text-white">Details</h2>
  
            <div className="mt-4 space-y-6">
              <p className="text-sm text-white">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Singleproduct;
