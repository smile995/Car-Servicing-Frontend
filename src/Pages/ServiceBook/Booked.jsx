import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CarContextAuth } from "../../../public/UseContext/CarContext";
import axios from "axios";
import Swal from "sweetalert2";

const Booked = () => {
  const orderData = useLoaderData();
  const { user, } = useContext(CarContextAuth);
  console.log(user);
  
  const { image,price,serviceName } = orderData;
  const handleOrderIntoDB = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const total = form.total.value;
    const due = form.due.value;
    const email = form.email.value;
    const date = form.date.value;
    const title = form.title.value;
    const order = {
      name,
      email,
      total,
      due,
      date,
      title,
      image,
    };
   axios.post('http://localhost:5000/order',order)
   .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Booked a Service Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset()
        }
    
   }).catch(error=>{
    console.log(error)
    
   })
  };

  return (
    <div className="card bg-base-100 h-full  max-w-sm lg:max-w-full border-2 md:max-w-screen-md shadow-2xl mx-auto">
      <form onSubmit={handleOrderIntoDB} className="card-body">
        <div className="form-control">
          <h1 className="text-5xl font-bold text-center">
            Please, Fill the Order form
          </h1>
        </div>
        <div className="md:flex justify-between md:gap-10 items-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">Service Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={serviceName}
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

export default Booked;
