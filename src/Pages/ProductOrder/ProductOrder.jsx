import React, { useContext } from "react";
import { CarContextAuth } from "../../../public/UseContext/CarContext";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ProductOrder = () => {
  const { user } = useContext(CarContextAuth);
  const productInfo = useLoaderData();
  const { productName, price, image } = productInfo;


  const handleProductOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const total = form.total.value;
    const email = form.email.value;
    const due = form.due.value;
    const product = form.product.value;
    const date = form.date.value;
    const orderedProduct = {
      name,
      email,
      total,
      due,
      product,
      date,
      image,
    };


    axios.post('http://localhost:5000/purchase', orderedProduct)
    .then(result=>{
       if(result.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order successfully placed",
            showConfirmButton: false,
            timer: 1500
          });
       }
        
    })
  };
  return (
    <div className="card bg-base-100 h-full  max-w-sm lg:max-w-full border-2 md:max-w-screen-md shadow-2xl mx-auto">
      <form onSubmit={handleProductOrder} className="card-body">
        <div className="form-control">
          <h1 className="text-5xl font-bold text-center">
            Please, Fill the Order form
          </h1>
        </div>
        <div className="md:flex justify-between md:gap-10 items-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your name here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Total Price</span>
            </label>
            <input
              type="text"
              name="total"
              defaultValue={price}
              placeholder="Total Price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex justify-between gap-10 items-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="Your email here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              placeholder="Due amount here"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex justify-between gap-10 items-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="product"
              defaultValue={productName}
              placeholder="Service title here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-error text-white font-semibold"
            type="submit"
            value="Order Confirmed"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductOrder;
