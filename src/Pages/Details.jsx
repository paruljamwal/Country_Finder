import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { countryDetails } from '../Redux/CountryData/action';

export const Details = () => {
    let name = useParams();
    let dispatch = useDispatch();

    // let countryData = useSelector(store=>store.Country.countryData);
    // console.log(countryData);
    useEffect(()=>{
     dispatch(countryDetails(name));
    },[]);

  return (
    <div className='country' >
   
    </div>
  )
}
