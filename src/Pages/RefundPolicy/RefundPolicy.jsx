import React from "react";

const RefundPolicy = () => {
  return (
    <section className="section section-lg bg-light my-12 lg:mx-32 mx-8">
      <div className="container">
        <div className="justify-content-center row">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3  max-sm:text-xl">
              Refund Policy
            </h2>
            <p className="text-xl">Last Updated: December 13 2023</p>
          </div>
        </div>
        <div className="row">
          <p className="mb-3">
            At Leadesh, we strive to provide our users with the best possible
            experience. If, for any reason, you are not completely satisfied
            with our service, we offer a refund policy to ensure your
            satisfaction.
          </p>
          <div className="mb-3 text-lg font-bold">
            Cancellation and Refund Process:
          </div>
          <ol className=" ml-6 max-sm:ml-0">
            <li className="mb-3">
              <b className="mb-1">1. Cancellation During Subscription Period:</b>
              <ul className="list-disc list-inside ml-6">
                <li>
                  If you decide to cancel your subscription during the active
                  subscription period, you can do so from within the app. Your
                  subscription will remain active until the end of the current
                  billing cycle, and you will not be charged for any additional
                  periods.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <b className="mb-1">2. Refund Eligibility:</b>
              <ul className="list-disc list-inside ml-6">
                <li>
                  Refunds are only available for cancellations made during the
                  active subscription period. No refunds will be issued for
                  partial periods or after the subscription period has ended.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <b className="mb-1">3. No Obligations Beyond Subscription Period:</b>
              <ul className="list-disc list-inside ml-6">
                <li>
                  Once the subscription period ends, you will no longer be
                  billed, and your access to our services will be discontinued.
                  There are no further obligations or commitments beyond the
                  subscription period.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <b className="mb-1">4. Contact Us:</b>
              <ul className="list-disc list-inside ml-5">
                <li>
                  If you have any questions or concerns regarding our refund
                  policy or the cancellation process, please don't hesitate to
                  contact us at hello@leadesh.com. Our support team is here to
                  assist you and ensure that your experience with Leadesh is
                  positive and hassle-free.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
