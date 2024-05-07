import React from "react";

const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <div className="sub-feature-card">
      <img src={imageUrl} loading="lazy" alt={title} className="w-full" />
      <p className="sub-feature-card-title font-bold text-2xl mt-10">{title}</p>
      <p className="sub-feature-card-description mt-5 text-lg">{description}</p>
    </div>
  );
};

const WhatsAppCRM = () => {
  return (
    <div className="sub-feature-card-container" id="features">
      <div className="homepage-container sub-feature lg:mx-32 mx-8 ">
        <div className="w-container homepage-container mt-12">
          <h2 className="feature-heading text-3xl lg:text-5xl  mb-6">
            <span className="text-blue-500 lg:inline-block lg:w-full">
              Key Features
            </span>
          </h2>
          <p className="feature-description text-xl  w-full ">
            In simple terms, Leadesh is your personal assistant that listens out
            for the words and phrases that matter most to you. It saves you the
            hassle of manually checking every conversation, and ensures you're
            always in the loop when it comes to the topics and discussions that
            are truly important.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-12">
          <FeatureCard
            imageUrl="https://assets-global.website-files.com/62396affb4902ba54e57a971/64ae7f2cc9e27e1eff005209_Sync%20to%20CRM.png"
            title="Track the Words that Matter to You"
            description="With Leadesh, you can create your own custom list of keywords or phrases that are important to you or your business. It could be product names, industry terms, brand mentions, or any other words you want to keep an eye on."
          />
          <FeatureCard
            imageUrl="https://assets-global.website-files.com/62396affb4902ba54e57a971/64ae7f3a2275a2d6250856dc_Communicate%20at%20Scale.png"
            title="Get Notified Right Away"
            description="Leadesh constantly scans your WhatsApp conversations in the background. Whenever it spots one of your chosen keywords in a message, it'll send you a notification immediately. No more missing out on important discussions!"
          />
          <FeatureCard
            imageUrl="https://assets-global.website-files.com/62396affb4902ba54e57a971/64ae7f432f0e418432459378_Organize%20your%20Inbox.png"
            title="Customize It to Suit Your Needs"
            description="Leadesh puts you in control. You can easily adjust the notification settings to your liking – whether you want sound alerts, or vibrations. And if you ever need to update your keyword list, you can do that with just a few taps."
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppCRM;
