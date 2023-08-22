import React from "react";

export default function Discover() {
  return (
    <section className="text-blue-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className=" flex flex-wrap">
          <div className=" mr-5 bg-blue-300 hover:bg-blue-600 transition duration-300 ease-in-out group">
            <img
              className="lg:h-48 md:h-46 w-full object-cover object-center"
              src="https://dummyimage.com/722x402"
              alt="blog"
            />

            <h3 className="tracking-widest text-indigo-900 text-xs font-medium title-font opacity-0 group-hover:opacity-100 transition-opacity">
              Uploaded by:
            </h3>
            <h2 className="text-lg text-indigo-900 font-medium title-font mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              Description
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
