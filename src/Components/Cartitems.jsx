
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Addcart, Removecart, RemoveAllcart, quantity } from './Cartslice';
import { NavLink } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.user.cart);
  const totalPrice = useSelector((state) => state.user.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Your Cart</h1>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((product) => (
              <div key={product.id} className="bg-white rounded-md shadow-md p-4">
                <img src={product.image} alt={product.title} className="h-24 w-24 object-cover mx-auto" />
                <NavLink to={`/singleproduct/${product.id}`}>
                  <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                  <p className="text-gray-500">${product.price}</p>
                </NavLink>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(Addcart(product))}
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 mr-2"
                  >
                    +
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() => dispatch(Removecart(product.id))}
                    className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 ml-2"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => dispatch(Removecart(product.id))}
                  className="mt-4 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ${totalPrice}</p>
            <div>
              {cart.length > 0 ? (
                <button
                  onClick={() => dispatch(RemoveAllcart())}
                  className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700"
                >
                  Clear Cart
                </button>
              ) : (
                <h1>Cart is empty</h1>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
