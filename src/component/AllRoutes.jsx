import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Details } from '../Pages/Details'
import CountrySkeleton from './CountrySkeleton';
import {Country} from "../Pages/Country"

export const AllRoutes = () => {
  return (
    <div>
         
        <Routes>
        
              <Route path="/" element={<Country/>} ></Route>
           
            <Route path="/details/:name" element={<Details/>} ></Route>

        </Routes>
    </div>
  )
}
