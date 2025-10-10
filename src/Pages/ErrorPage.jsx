import React from 'react';
import Error from '../assets/ui/assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='justify-item-center'>
            <div className='justify-center'><img  src={Error}/></div>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Oops, page not found!</h1>
            <p className='s-text text-sm'>The page you are looking for is not available.</p>
            <button className='btn-color px-3 hover mt-2'>Go Back!</button>
            </div>
        </div>
    );
};

export default ErrorPage;