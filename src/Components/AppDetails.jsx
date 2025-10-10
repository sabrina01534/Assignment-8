import React from 'react';
import { useParams } from 'react-router';
import useApps from './Hooks/useApps';

const AppDetails = () => {
    const {id}=useParams()
  const {apps}=useApps()
    return (
        <div>
           <h1>appdetails</h1> 
        </div>
    );
};

export default AppDetails;