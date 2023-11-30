import React from 'react';
import AddProductForm from './AddProductForm'

const AddProduct = () => {
    
    function addDataHandler(productData){
        fetch(
            'https://e-commerce-6bf4b-default-rtdb.firebaseio.com/newProducts.json',
        {
            method: "POST",
            body: JSON.stringify(productData),
            headers:{
                "Content-Type": 'application.json'
            }
        }
        
        );
        

    } 
    return (
        <div>
            <h2 className='text-3xl text-center my-10 text-white font-bold'>Add New Product</h2>
            <AddProductForm onAddProductData={addDataHandler}></AddProductForm>
        </div>
    );
};

export default AddProduct;