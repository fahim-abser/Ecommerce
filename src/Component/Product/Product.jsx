import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Product = () => {

    const [isLoading, setIsLoading]= useState(true)
    const [loadedProducts, setLoadedProducts]= useState([]);


    useEffect(()=>{
        setIsLoading(true)
        fetch('https://e-commerce-6bf4b-default-rtdb.firebaseio.com/newProducts.json')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const products=[];

        for(const key in data){
            const product ={
                id:key,
                ...data[key]
            };
            products.push(product)
        }
        setIsLoading(false);
        setLoadedProducts(products);
    });
    },[]);

    
    if (isLoading){
        return <div>
            <p>Loading...</p>
        </div>
    }
    return (
        <div >
            <h1 className='text-4xl text-center font-bold text-white my-10'>All Product</h1>
         <ProductList items={loadedProducts} ></ProductList>
        </div>
    );
};

export default Product;








