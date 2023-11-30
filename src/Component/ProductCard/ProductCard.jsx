import React from 'react';

const ProductCard = (props) => {
    return (
        <div className='mx-20 flex mb-10 border rounded-md'>
           
            <img className='h-60 w-64 p-6'  src={props.image} alt={props.name} />
            <div className='ps-14 pt-6'>
            <h2 className='text-3xl text-white pb-6 font-bold'>{props.name}</h2>
            <h4 className='text-xl'>{props.details}</h4>
            <button className='btn btn-outline mt-16 ml-60 '>Add Favorite</button>
            </div>
            
        </div>
    );
};

export default ProductCard;