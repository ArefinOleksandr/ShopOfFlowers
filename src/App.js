import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Shared/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Category } from './pages/Category/Category';
import { Product } from './pages/Product/Product';
import getAllDataFromDatabase from './components/Shared/databaseFunctions';
import { Cart } from './containers/Cart/Cart';
import { SubscriptionPage } from './pages/Subscription/Subscription';
import { Footer } from './components/Shared/Footer/Footer';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { Loader } from './components/Shared/Loader/Loader';

function App() {
  const [data, setData] = useState(() => {
    const cachedData = localStorage.getItem('data');
    return cachedData ? JSON.parse(cachedData) : null;
  });
  const [isLoading, setIsLoading] = useState(!data);

  const [addedItemsToCart, setAddedItemsToCart] = useState(() => {
    const savedItems = localStorage.getItem('addedItemsToCart');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        try {
          const data = await getAllDataFromDatabase();
          setData(data);
          console.log('Connect to DB')
          localStorage.setItem('data', JSON.stringify(data));
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('addedItemsToCart', JSON.stringify(addedItemsToCart));
  }, [addedItemsToCart]);

  const handleAddItemsToCart = (item) => {
    setAddedItemsToCart((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItemsFromCart = (item) => {
    setAddedItemsToCart((prevItems) => prevItems.filter((thisItem) => thisItem !== item));
  };

  const router = createBrowserRouter(
    [
      { path: '/', element: <Home data={data}/> },
      { path: '/category', element: <Category data={data} /> },
      { path: '/item', element: <Product data={data} handleAddItemsToCart={handleAddItemsToCart} /> },
      { path: '/subscription', element: <SubscriptionPage /> },
      { path: '/payment', element: <PaymentPage addedItemsToCart={addedItemsToCart} /> },
    ],
    { basename: '/FlowerShop' }
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <React.StrictMode>
      <Navbar handleRemoveItemsFromCart={handleRemoveItemsFromCart} addedItemsToCart={addedItemsToCart} router={router} />
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
