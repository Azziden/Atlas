import React from "react";

export default function Discover() {
  return (
    <section className="text-purple-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="xl:w-1/4 md:w-1/2 p-2">
          <div className="bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out group">
            <img
              className="lg:h-48 md:h-46 w-full object-cover object-center"
              src="https://dummyimage.com/722x402"
              alt="blog"
            />

            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font opacity-0 group-hover:opacity-100 transition-opacity">
              Uploaded by:
            </h3>
            <h2 className="text-lg text-purple-900 font-medium title-font mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              Description
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
