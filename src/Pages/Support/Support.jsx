import React from "react";

const Support = () => {
  return (
    <section className="section section-lg bg-light my-12 lg:mx-32 mx-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-3  max-sm:text-xl">Support</h2>
            <p className="text-xl">Last Updated: April 03, 2024</p>
          </div>
        </div>
        <div className="row">
          <p className=" mb-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            inquiries, our team is here to assist you. <br />
            At Leadesh, we are committed to providing exceptional service and
            support to our users. If you have any questions, concerns, or
            feedback regarding our service or your experience with our platform,
            please don't hesitate to reach out to us.
          </p>
          <p className=" mb-4">
            For any grievances or assistance, please contact us via email at{" "}
            <a
              href="mailto:hello@leadesh.com"
              className="text-blue-600 font-semibold"
            >
              hello@leadesh.com
            </a>
            . Our dedicated support team will promptly address your queries and
            ensure that you receive the assistance you need.
          </p>
          <p className=" mb-4">
            We value your feedback and inquiries, as they help us to continually
            improve our services. Our dedicated support team is committed to
            providing prompt and professional assistance. Feel free to contact
            us anytime, and we'll be happy to help.
          </p>
          <p className="">
            Thank you for choosing Leadesh. We appreciate your trust and look
            forward to assisting you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
