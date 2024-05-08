import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const HowitWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image
  const [openAccordion, setOpenAccordion] = useState(1); // State to track the open accordion, default to first accordion

  // Function to handle accordion selection
  const handleAccordionSelect = (image, accordionIndex) => {
    setSelectedImage(image); // Update selected image when accordion is clicked
    setOpenAccordion(accordionIndex); // Update open accordion state
  };

  // Data for images corresponding to each accordion
  const accordionImages = {
    1: image1,
    2: image2,
    3: image3,
  };

  // Effect to set the initial selected image to the image of the first accordion
  useEffect(() => {
    setSelectedImage(accordionImages[1]);
  }, []);
  return (
    <div className="how-it-works bg-gray-100" id="Howitworks">
      <div className="homepage-container lg:mx-32 mx-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
          <div className="flex flex-col justify-center items-start max-sm:mx-auto">
            <h2 className="text-6xl font-bold mb-4 md:mb-2 max-sm:text-5xl">
              How Leadesh Works
            </h2>
            <p className="text-lg mb-6">
              Using Leadesh is as simple as 1-2-3! Here's how it helps you stay
              on top of your important WhatsApp conversations:
            </p>
          </div>
        </div>
        {/* accordion */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="w-full lg:w-1/2 mb-6 md:mb-0">
            <Accordion
              expanded={openAccordion === 1}
              onChange={() => setOpenAccordion(1)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                onClick={() => handleAccordionSelect(image1, 1)}
              >
                <Typography>Choose Your Keywords</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Want to keep an eye out for mentions of your business,
                  products, or services? Or maybe there are certain topics or
                  interests you want to track? With Leadesh, you can create a
                  custom list of the words and phrases that matter most to you.
                </Typography>
                <Typography>
                  Just open the app (or the web version), and enter the keywords
                  you want to monitor. It's that easy!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={openAccordion === 2}
              onChange={() => setOpenAccordion(2)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                onClick={() => handleAccordionSelect(image2, 2)}
              >
                <Typography>Get Instant Notifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Once you've set up your keyword list, Leadesh gets to work
                  behind the scenes. It continuously scans your WhatsApp
                  messages, looking out for any instances of your chosen
                  keywords.
                </Typography>
                <Typography>
                  Whenever a relevant message pops up, Leadesh immediately sends
                  you a notification – right to your phone or computer. That
                  way, you're always in the loop and can quickly jump into the
                  conversation.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={openAccordion === 3}
              onChange={() => setOpenAccordion(3)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                onClick={() => handleAccordionSelect(image3, 3)}
              >
                <Typography>Stay Engaged</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  With Leadesh keeping you informed about the WhatsApp
                  discussions that are truly important to you, you'll never miss
                  out on valuable opportunities or relevant conversations again.
                </Typography>
                <Typography>
                  Whether it's potential business leads, industry updates, or
                  just topics you're passionate about, you can stay engaged and
                  be a part of the conversations that really matter.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full lg:w-1/2">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full"
              />
            )}
          </div>
        </div>
        <p className="text-lg text-center w-[80%] my-6 mx-auto">
          It's that simple! No complicated setup, no fuss – just an easy way to
          ensure you're always in the loop and ready to engage with the WhatsApp
          messages that are most relevant to you.
        </p>
      </div>
    </div>
  );
};

export default HowitWorks;
