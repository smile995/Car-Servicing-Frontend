import React from "react";
import TopBanner from "../../Components/Top_Banner/TopBanner";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const serviceProvider = form.server.value;
    const description = form.description.value;
    const service = {
      serviceName,
      price,
      image,
      serviceProvider,
      description,
    };

    console.log(service);
  };
  return (
    <div className="space-y-20">
      <TopBanner title={"Add Service"} path={"Home/Service"} />
      <div className="card bg-base-100 h-full  max-w-sm lg:max-w-full border-2 md:max-w-screen-md shadow-2xl mx-auto">
        <form onSubmit={handleAddService} className="card-body">
          <div className="form-control">
            <h1 className="text-5xl font-bold text-center">
              Add Your Service Here
            </h1>
          </div>
          <div className="md:flex justify-between md:gap-10 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Service Name</span>
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
                <span className="label-text">Service Provider</span>
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
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full min-h-40"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
