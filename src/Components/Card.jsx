import React from 'react';
import downloadsImg from '../assets/ui/assets/icon-downloads.png'
import ratingsImg from '../assets/ui/assets/icon-ratings.png'
import { Link } from 'react-router';
// import images from '../../public/images'
const Card = ({app}) => {
     const {title,description,downloads,ratings,image,id}=app
    console.log(app)
    return (
        <div>
          
           <div className="card bg-base-100 border hover:scale-105 shadow-sm">
  <figure className='h-45 overflow-hidden '>
    <img className='w-full object-cover'
      src={app?.image }
      alt="no image show" />
  </figure >
  <div className="card-body">
    <div className='flex gap-5'>
    <h6 className="card-title mb-5">
      { app?.title}</h6>
      <p className="s-text text-sm mt-5">:{ app?.description}</p>
    </div>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline"><img className='h-5 w-5' src={downloadsImg}/>{ app?.downloads}</div>
      <div className="badge badge-outline"><img className='h-5 w-5' src={ratingsImg}/> ratings </div>
    
        {/* <div><img src={ratingsImg}/>
        {ratings.map((ratings,index)=>
          (<Card key={index} ratings={ratigs}></Card>)
        )
        
        }
        </div> */}
        <Link to={`/apps/${id}`} className='btn-color'>View Details</Link>
    </div>
  </div>
  
</div> 

        

        </div>
        
    );
};

export default Card;