import React from "react";
import aboutImg from "../../assets/aboutImg.png";

const AboutUs = () => {
  return (
    <div className="lg:mx-32 mx-8 my-12">
      <div className="flex flex-col justify-center mb-8 items-start max-sm:mx-auto">
        <h2 className="text-6xl font-bold mb-6  max-sm:text-5xl">
          About Leadesh
        </h2>
        <p className="text-lg mb-2">
          Do you ever feel like you're missing out on important conversations or
          potential business opportunities? With so much communication happening
          over WhatsApp these days, it's easy to overlook messages that could be
          valuable to you.
        </p>
        <p className="text-lg">
          That's where Leadesh comes in. It's a simple app that helps you stay
          on top of your WhatsApp conversations by monitoring them for keywords
          that are important to you or your business.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="max-lg:mb-6">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        {/* <div>
          <h2 className="text-2xl font-bold mb-4 max-sm:text-xl">
            Here's how it works:
          </h2>
          <p className="text-lg mb-4">
            1. You tell Leadesh what words or phrases you want to keep an eye
            out for, like product names, industry terms, or anything else that's
            relevant to you.
          </p>
          <p className="text-lg mb-4">
            2. Leadesh quietly scans your WhatsApp messages and lets you know
            whenever it spots one of your chosen keywords.
          </p>
          <p className="text-lg mb-4">
            3. You get a notification right away, so you can quickly jump into
            that conversation and engage with it.
          </p>
          <p className="text-lg mb-6">
            It's that straightforward! Leadesh doesn't overcomplicate things –
            it just gives you a hassle-free way to ensure you never miss out on
            the WhatsApp conversations that really matter.
          </p>
          <p className="text-lg">
            So why struggle to keep up with everything manually? Let Leadesh do
            the hard work for you. With just a few taps on your phone or through
            our web app, you can stay informed and engaged, without any fuss.
          </p>
        </div> */}
        <div>
          <h2 className="text-2xl font-bold mb-4 max-sm:text-xl">
            Here's how it works:
          </h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="text-lg mb-2">
              You tell Leadesh what words or phrases you want to keep an eye out
              for, like product names, industry terms, or anything else that's
              relevant to you.
            </li>
            <li className="text-lg mb-2">
              Leadesh quietly scans your WhatsApp messages and lets you know
              whenever it spots one of your chosen keywords.
            </li>
            <li className="text-lg mb-2">
              You get a notification right away, so you can quickly jump into
              that conversation and engage with it.
            </li>
          </ol>
          <p className="text-lg mb-4">
            It's that straightforward! Leadesh doesn't overcomplicate things –
            it just gives you a hassle-free way to ensure you never miss out on
            the WhatsApp conversations that really matter.
          </p>
          <p className="text-lg">
            So why struggle to keep up with everything manually? Let Leadesh do
            the hard work for you. With just a few taps on your phone or through
            our web app, you can stay informed and engaged, without any fuss.
          </p>
        </div>
      </div>
      <p className="text-lg text-center w-[80%] my-6 mx-auto">
        Give Leadesh a try and see how easy it can be to stay in the loop!
      </p>
    </div>
  );
};

export default AboutUs;
