import TopBanner from "../../Components/Top_Banner/TopBanner";
import UseDataFetch from "../../Hooks/UseDataFetch";

const Blog = () => {
  const carBlogs = UseDataFetch("/blogs.json");
  console.log(carBlogs);

  return (
    <div>
      <TopBanner title={"Our Blogs"} path={"Home/Blogs"} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
        {carBlogs?.map((data) => (
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img src={data?.imageUrl} alt="Shoes" />
            </figure>
            <div className="flex items-center gap-5 mt-3 p-5 border-b-2">
              <div>
                <img
                  src={data?.authorImageUrl}
                  className="rounded-full w-12 h-12"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl font-bold">{data?.author}</p>
                <p className="text-[#737373] font-semibold">{data?.date}</p>
              </div>
            </div>
            <div className=" p-5 border-b-2">
              <p className="text-xl font-bold">{data?.title}</p>
              <p className="text-[#737373] font-semibold">{data?.content}</p>
            </div>

            <div className="card-body">
              <h2 className="card-title">{data?.carModel}</h2>
              <p>{data?.summary}</p>
              <div className="card-actions ">
                {data.tags.map((tag) => (
                  <div className="badge badge-outline">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
