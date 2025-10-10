
 import Card from '../Components/Card';
import useApps from '../Components/Hooks/useApps';
import { useState } from "react";


const TrendingApp = () => {
  const {apps}=useApps()

  const [search,setsearch]=useState('')
   const term=search.trim().toLocaleLowerCase()
   const searchApps=term?
   apps.filter(apps=>apps.name.toLocaleLowerCase().
   includes(term)):apps
  console.log(searchApps)

  return (
  
    <div>
      
      <h1 className='text-center font-bold text-3xl '>Our All Applications</h1>
  <p className='s-text text-center mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
  
  <div className="flex justify-between mt-5">
        <h3 className="font-bold"><span>({apps.length})</span>Apps Found</h3>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setsearch(e.target.value)} type="search " required placeholder="Search App" />
</label>
      </div>
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>
    {searchApps.map((app,index)=>(
     <Card key={index} app={app}> </Card>  
    ))
    }
</div>
    
    </div>

  );
};

export default TrendingApp;