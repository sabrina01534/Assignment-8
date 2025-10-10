import React, { useEffect, useState } from 'react';
import downloadsImg from '../assets/ui/assets/icon-downloads.png'
import ratingsImg from '../assets/ui/assets/icon-ratings.png'

const Application = (app) => {
  const {title,description,downloads,ratings,image,id}=app
  console.log(app)

  const[wishlist,setWishList]=useState([])
  useEffect(()=>{
    const existingList=JSON.parse(localStorage.getItem('installation'))
    if(existingList) setWishList(existingList)
  },[]

  
)
    return (
        <div className='space-y-6'>
          <div className="flex justify-between mt-5">
        <h3 className="font-bold"><span>({wishlist.length})</span>Apps Found</h3>
      
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
 <button>Sort</button>

      </div>
      <div className='space-y-3'>
       {wishlist.map(app=>(
        <div key={app.id} className="card card-side bg-base-100 border shadow-sm">
  <figure>
    <img className='w-40 h-30 object-cover'
      src={app.image}
      alt={app.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{app.name}</h2>
    <p>{app.description}</p>
   <div className='flex gap-3'> 
    <div className="badge badge-outline"><img className='h-5 w-5' src={downloadsImg}/>{app.downloads}</div>
          <div className="badge badge-outline"><img className='h-5 w-5' src={ratingsImg}/> ratings </div></div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Uninstall</button>
    </div>
  </div>
</div>
       ))
       }  
      </div>
        </div>
    );
};

export default Application;