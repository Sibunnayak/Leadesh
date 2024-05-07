import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white py-16" id="pricing">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Pricing
        </h1>
        <p className="text-lg text-center max-w-screen-lg mx-auto mb-10">
          Choose the package that fits your needs. No hidden fees, no credit
          card required during the trial. We're here to make staying connected
          hassle-free and affordable.
        </p>
        <div className="flex lg:flex-row flex-col ">
          <div className="border border-gray-200 rounded-lg mb-8 p-6 lg:mr-4 lg:ml-auto max-lg:mx-auto">
            <div className="flex flex-row justify-between m-6">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Basic
              </h2>
              <p className="text-3xl font-bold text-primary mb-4">₹199</p>
            </div>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>5 Keywords</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free 7-day trial</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Billed monthly</span>
              </li>
            </ul>
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Start free trial
            </button>
            <p className="text-sm text-center mt-6">
              Use a friend's code for 50% off your first month
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg mb-8 p-6 lg:ml-4 lg:mr-auto max-lg:mx-auto">
            <div className="flex flex-row justify-between m-6">
              <h2 className="text-3xl font-semibold text-primary mb-4">Pro</h2>
              <p className="text-3xl font-bold text-primary mb-4">₹299</p>
            </div>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>10 Keywords</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free 7-day trial</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Billed monthly</span>
              </li>
            </ul>
            <button className="bg-black w-full hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Start free trial
            </button>

            <p className="text-sm text-center mt-6">
              Use a friend's code for 50% off your first month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
