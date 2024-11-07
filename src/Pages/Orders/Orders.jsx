import React, { useContext, useEffect, useState } from "react";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import { CarContextAuth } from "../../../public/UseContext/CarContext";
import Swal from "sweetalert2";
import axios from "axios";

const Orders = () => {
  const { user } = useContext(CarContextAuth);

  const [myServices, setMyServices] = useState([]);
  const [orders, setOrders] = useState([]);

  

  useEffect(() => {
    // fetch(`http://localhost:5000/bookings/${userEmail}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyServices(data));
      axios.get(`http://localhost:5000/bookings/${user?.email}`,{withCredentials:true})
      .then(res=>setMyServices(res.data))
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/order/${user?.email}`,{withCredentials:true})
    .then(res=>setOrders(res.data))
  }, []);

  const handleDeleteService = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/service/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining=myServices.filter(service=>service._id!==id)
              setMyServices(remaining)
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  const handleUpdateStatus=(id)=>{
    console.log(id);
    axios.patch(`http://localhost:5000/service/${id}`,{status:"confirm"})
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        Swal.fire({
          icon: "success",
          title: "Service Confirmed",
          text: "Successfully confirmed service",
          
        });
        const remaining= myServices.filter(service=> service._id!==id)
        const update= myServices.find(service=>service._id===id)
        update.status="confirm"
        const newBooking= [update,...remaining]
        setMyServices (newBooking)
      }
      
    })
  }
  return (
    <div className="space-y-10">
      <TopBanner title={"My Orders"} path={"Home/My-Oredrs"} />
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-semibold lg:text-lg text-[#FF3811]"
          aria-label="My Services"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box md:p-6"
        >
          <div>
            <div className="overflow-x-auto">
              <table className="table table-auto min-w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th className="text-left">Delete</th>
                    <th className="text-left">Image</th>
                    <th className="text-left">Total</th>
                    <th className="text-left">Due</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Status</th>
                    <th></th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="space-y-5">
                  {myServices?.map((booking) => (
                    <tr key={booking?._id} className="border-b">
                      <td>
                        <button
                          onClick={() => handleDeleteService(booking?._id)}
                          className="btn btn-circle btn-outline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                      <td>
                        <div className="flex items-center md:gap-3 gap-1">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 md:w-12 w-8">
                              <img
                                src={booking?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{booking?.title}</div>
                          </div>
                        </div>
                      </td>
                      <td>{booking?.total}</td>
                      <td>{booking?.due}</td>
                      <td>{booking?.date}</td>
                      <td>
                       {
                        booking?.status ?<p className="font-semibold text-green-500">Confirmed</p> : <button onClick=       
                         {()=>handleUpdateStatus(booking._id)} className="btn btn-ghost btn-  
                          xs">
                        Please Confirm
                      </button>
                       }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-semibold lg:text-lg text-[#FF3811]"
          aria-label="My Products"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            <div className="overflow-x-auto">
              <table className="table table-auto min-w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th className="text-left">Image</th>
                    <th className="text-left">Total</th>
                    <th className="text-left">Due</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Action</th>
                    <th></th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="space-y-5">
                  {orders?.map((order) => (
                    <tr key={order?._id} className="border-b">
                      <td>
                        <div className="flex items-center md:gap-3 gap-1">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 md:w-12 w-8">
                              <img
                                src={order?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{order?.product}</div>
                          </div>
                        </div>
                      </td>
                      <td>{order?.total}</td>
                      <td>{order?.due}</td>
                      <td>{order?.date}</td>
                      <td>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
