import React from 'react'

const CountrySkeleton = () => {
  return (
    <div className='skeleton' >
             <div className='skeleton_box' >
                   <img  className='skeleton_img' src='' alt="country_images" />
                   <h3 className='skeleton_name'></h3>
                   <p className='skeleton_text'></p>
                   <p className='skeleton_text'></p>
                   <p className='skeleton_text'></p>
                   <button className='skeleton_btn'>More Details</button>
                </div>
    </div>
  )
}

export default CountrySkeleton;