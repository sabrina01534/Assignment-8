import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           <Navbar></Navbar>
            <div className='max-w-screen-xl w-full mx-auto px-4 md:px-8 lg:px-12  py-4 md:py-8 lg:py-12flex-1'>
                <Outlet></Outlet> 
            </div>
            <Footer>
                
            </Footer>
        </div>
    );
};

export default RootLayout;