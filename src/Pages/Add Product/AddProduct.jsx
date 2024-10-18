import React from "react";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const stock = form.stock.value;
    const rating = form.stock.value;
    const product = {
      productName,
      price,
      image,
      category,
      description,
      stock,
      rating,
    };
    fetch('http://localhost:5000/add-product',{
      method:'POST',
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify(product)
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.acknowledged===true){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        
        form.reset()
      }
    }
    )
  };
  return (
    <div className="space-y-20">
      <TopBanner title={"Add New Product"} path={"Home/Product"} />
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
                <span className="label-text">Product Photo</span>
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
                <span className="label-text">Product Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Product Category"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex justify-between gap-10 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Stock</span>
              </label>
              <input
                type="text"
                name="stock"
                placeholder="Product Stock"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Rating</span>
              </label>
              <input
                type="text"
                name="rating"
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
              name="description"
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
  );
};

export default AddProduct;
