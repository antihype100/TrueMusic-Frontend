import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Tracks from '../pages/author/tracks/Tracks';
import Home from '../pages/Home';
import BaseLayout from './layouts/BaseLayout';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home/>}/>
))


const AppRouter = () => {
  return <RouterProvider router={router}/>
};

export default AppRouter;
