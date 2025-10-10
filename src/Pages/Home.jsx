import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/ui/assets/hero.png'
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import useApps from '../Components/Hooks/useApps';

const Home = () => {
    const {apps,loading,error}=useApps()
  const featuredApps=apps.slice(0,8)
    

    return (
<div>
    <div className='text-center font-bold text-5xl'>
        <h1>We Build<br/>
        <span className='text'>Productive</span>Apps</h1>
    </div>
    <p className='text-sm s-text text-center mt-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

<div className='text-sm font-bold gap-4 flex justify-center mt-4'>
<div><button className='border-1 flex'><FaGooglePlay />Google Play</button></div>
<div><button className='border-1 flex'><FaAppStoreIos />App Store</button></div>
</div>
<div><img className='justify-center w-90 h-90' src={hero}/></div>
<div className='bg-color'>
    <div className='pt-10'>
    <h1 className='text-center font-bold text-3xl n-text '>Trusted by Millions, Built for You</h1>
</div>
<div className='flex gap-30 justify-center mt-6'>
    <div className='text-sm '>
    
    <p className='n-text'>Total Downloads</p>
    <h1 className='font-bold text-5xl n-text  mt-3'>29.6M</h1>
    <p className='n-text mt-3'>21% more than last month</p>
    </div>
    <div className='text-sm '>
    <p className='n-text'>Total Reviews</p>
    <h1 className='font-bold text-5xl n-text  mt-3'>906K</h1>
    <p className='n-text  mt-3'>46% more than last month</p>
    </div>
    <div className='text-sm mb-14'>
    <p className='n-text'>Active Apps</p>
    <h1 className='font-bold text-5xl n-text  mt-3'>132+</h1>
    <p className='n-text  mt-3'>31 more will Launch</p>
    </div>
</div>
</div>
<div className='text-center mt-6'>
    <h1 className='font-bold text-3xl'>Trending Apps</h1>

    <p className='text-sm s-text mt-3'>Explore All Trending Apps on the Market developed by us</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>
    {featuredApps.map((app,index)=>(
     <Card key={index} app={app}> </Card>  
    ))
    }
</div>
<button className=' justify-center btn-color border p-1 '>Show All</button>
   </div>



)}

export default Home;