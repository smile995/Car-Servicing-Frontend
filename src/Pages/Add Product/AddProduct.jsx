import React from 'react'
import TopBanner from '../../Components/Top_Banner/TopBanner'

const AddProduct = () => {
  const handleAddProduct=()=>{
    console.log("product on the way");
    
  }
  return (
    <div className='space-y-20'>
        <TopBanner title={'Add New Product'} path={"Home/Product"}/>
        <div className="card bg-base-100 h-full  max-w-sm lg:max-w-full border-2 md:max-w-screen-md shadow-2xl mx-auto">
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <h1 className="text-5xl font-bold text-center">
              Add Your Product Here
            </h1>
          </div>
          <div className="md:flex justify-between md:gap-10 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Sevice Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex justify-between gap-10 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image url"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Provider</span>
              </label>
              <input
                type="text"
                name="server"
                placeholder="Server Provider"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              type="text"
              name="server"
              placeholder="Server Description"
              className="input input-bordered w-full min-h-40"
              required
              
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct