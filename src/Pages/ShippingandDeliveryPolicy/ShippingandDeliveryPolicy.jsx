import React from "react";

const ShippingandDeliveryPolicy = () => {
  return (
    <section className="section section-lg bg-light my-12 lg:mx-32 mx-8">
      <div className="container">
        <div className="justify-content-center row mb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3  max-sm:text-xl">
              Shipping and Delivery Policy
            </h2>
            <p className="text-xl">Last Updated: April 04, 2024</p>
          </div>
        </div>
        <div className="row text-lg max-sm:text-base">
          <h6 className="text-center mt-5 font-semibold text-lg mb-3">
            Shipping is not applicable for business.
          </h6>
          <p>
            For any grievances or assistance, please contact us via email at{" "}
            <a
              href="mailto:hello@leadesh.com"
              style={{ color: "blue", fontWeight: 600 }}
            >
              hello@leadesh.com
            </a>
            . Our dedicated support team will promptly address your queries and
            ensure that you receive the assistance you need.
          </p>
          <p className="mt-5">
            Thank you for choosing Leadesh. We appreciate your trust and look
            forward to assisting you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingandDeliveryPolicy;
