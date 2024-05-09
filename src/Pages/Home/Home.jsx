import React from "react";
import whatsapplogo from "../../assets/whatsapp.svg";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import WhatsAppCRM from "../../components/WhatsAppCRM/WhatsappCRM";
import HowitWorks from "../../components/HowitWorks/HowitWorks";
import Pricing from "../../components/Pricing/Pricing";
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="bg-black flex items-center justify-center font-sans text-white">
        <div className="text-center">
          <div className="lg:text-7xl lg:mb-12 lg:mt-24 text-4xl max-sm:text-2xl mb-8 mt-14 fontstyle">
            <div className="flex items-center justify-center flex-wrap mb-5">
              <div className="mr-2">Never miss a sales</div>
              <img
                src="https://assets-global.website-files.com/62396affb4902ba54e57a971/64ad03ac6315d89f74e77ff6_Cursor.svg"
                alt="home"
                className="h-16 max-sm:h-8"
              />
              <div className="ml-2">opportunity</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mr-4">on WhatsApp</div>
              <span>
                <img
                  src={whatsapplogo}
                  alt="whatsapplogo"
                  className="h-16 max-sm:h-8"
                />
              </span>{" "}
              <div className="ml-4">ever again</div>
            </div>
            <div>
              <span className="rounded-anim-two ping absolute left-[68%] lg:mt-0 mt-33 max-sm:mt-1"></span>
            </div>
          </div>
          <div className="my-12 text-xl w-3/4 mx-auto">
            Leadesh empowers you to select keywords that matter to your business
            or interests, and instantly alerts you when those words appear in
            your WhatsApp conversations. Stay connected, engage with the right
            people, and turn every chat into a potential sales opportunity.
          </div>
          <div className="my-8">
            <div className="mt-5 flex items-center justify-center mb-5">
              <Button
                style={{
                  fontSize: "20px",
                }}
                className="text-light px-4 py-3 me-3 bg-[#3c4dff]"
              >
                <a
                  // href="https://play.google.com/"
                  // target="_blank"
                  href="/app-release.apk"
                  download 
                  className="hover:underline hover:bg-[#3c4dff]"
                >
                  Download Android App{" "}
                </a>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="d-none d-sm-inline ms-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppCRM />
      <HowitWorks />
      <Pricing />
    </>
  );
};

export default Home;
