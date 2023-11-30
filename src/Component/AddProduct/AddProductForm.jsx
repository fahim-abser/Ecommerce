import React, { useRef } from "react";

const AddProductForm = (props) => {
  const titleInput = useRef();
  const inputIimage = useRef();
  const inputDetails= useRef();

  function handelSubmit(event) {
    
    event.preventDefault();
    const form = event.target;
    const entiredName = titleInput.current.value;
    const entiredImage = inputIimage.current.value;
    const entiredDetails = inputDetails.current.value;
    form.reset()
   

    const productData={
        name: entiredName,
        image:entiredImage,
        details: entiredDetails,
    };
    console.log(productData)
    
    props.onAddProductData(productData)
  }
  function popup(){
    alert('Adding Successfull')
  }
  

  return (
    <div className="text-center">
      <form onSubmit={handelSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="px-4 text-xl">
            {" "}
            Name
          </label>
          <input
            type="text"
            placeholder=" Name"
            required
            id="name"
            className="input input-bordered input-info w-full max-w-xs"
            ref={titleInput}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="px-4 text-xl">
            {" "}
            Image
          </label>
          <input
            type="url"
            placeholder=" URL of image"
            required
            id="image"
            className="input input-bordered input-info w-full max-w-xs"
            ref={inputIimage}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="details" className="px-4 text-xl">
            {" "}
            Details
          </label>
          <input
            type="text"
            placeholder="Enter details here..."
            required
            id="details"
            className="input input-bordered input-info w-full max-w-xs"
            ref={inputDetails}
          />
        </div>
        <button className="ms-72 btn btn-outline btn-primary" onClick={popup}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
