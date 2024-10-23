import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='bg-cyan-50 h-screen grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center text-7xl font-thin bg-transparent rounded-xl p-4'>
          See Your Best Childhood Memory with Your Favorite Cartoon
        </div>
        <div className="flex items-center justify-center">
          <Carousel autoplay={true} autoplayDelay={4000} loop={true} className="rounded-xl bg-transparent">
            <img
              src="https://m.media-amazon.com/images/I/81jwmhvU3TL.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.firstpost.com/uploads/2023/02/tomandherry.jpg?im=FitAndFill=(1200,675)"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images8.alphacoders.com/126/1265937.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className='col-span-2 flex justify-center mt-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-3xl'>
            <p className='hover:text-light-green-700'><NavLink to="#">Ben10</NavLink></p>
            <p className='hover:text-cyan-600'><NavLink to="#">Doraemon</NavLink></p>
            <p className='hover:text-deep-orange-700'><NavLink to="#">Naruto</NavLink></p>
            <p className='hover:text-orange-600'><NavLink to="#">Tom & Jerry</NavLink></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
