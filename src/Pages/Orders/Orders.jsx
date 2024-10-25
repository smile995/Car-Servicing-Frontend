import React, { useContext, useEffect, useState } from "react";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import { CarContextAuth } from "../../../public/UseContext/CarContext";

const Orders = () => {
  const { user } = useContext(CarContextAuth);

  const [myServices, setMyServices] = useState([]);
  const [orders, setOrders] = useState([]);
  const userEmail = user?.email;

  
  
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyServices(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/order/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
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
                  {myServices?.map((booking) => (
                    <tr key={booking?.id} className="border-b">
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
