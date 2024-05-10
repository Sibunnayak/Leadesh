import React from "react";

const Faqs = () => {
  return (
    <section className="section section-lg bg-light my-12 lg:mx-28 mx-8">
      <div className="container">
        <div className="justify-content-center w-full row">
          <div className="text-center ">
          <h2 className="text-3xl font-bold mb-6  max-sm:text-xl">
          Frequently Asked Questions (FAQs)
        </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: What is Leadesh?</b>
              <p className="">A: It's simple. Choose words you care about, and Leadesh will notify you when these words come up in your WhatsApp chats.</p>
            </div>
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: Is Leadesh available for download on both iOS and Android?</b>
              <p className="">A: Leadesh is available for download on the Google Play Store for Android devices only.</p>
            </div>
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: How much does Leadesh cost?</b>
              <p className="">A: We offer two packages - Rs 100 for 10 keywords and Rs 200 for 25 keywords. The first 7 days are free, and you don't need to provide any credit card details during the trial.</p>
            </div>
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: Can I cancel my subscription at any time?</b>
              <p className="">A: Yes, you can cancel your subscription at any time. Leadesh believes in giving you the flexibility you need.</p>
            </div>
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: Is my data secure with Leadesh?</b>
              <p className="">A: Absolutely. We take user privacy seriously. Your data is securely handled, and we don't compromise on your privacy.</p>
            </div>
            <div className="mb-6">
              <b className="block text-lg mb-1">Q: How do I get started with Leadesh?</b>
              <p className="">A: Simply download the app, sign up, and choose your keywords. Leadesh will start alerting you when those keywords appear in your WhatsApp conversations. It's that easy!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;