//! Example of Lifting The State Up
/* eslint-disable react/prop-types */
import { useState } from "react";

//! Here each Section has its own control over all the Hide and Show Functionality.
const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="p-2 m-2 font-bold border border-black rounded-sm">
        <h3>{title}</h3>
        {/* Hide and show button functionality  */}
        {isVisible ? (
          <button
            className="border border-red-700 rounded-md cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="border border-red-700 rounded-md cursor-pointer"
            onClick={() => setIsVisible(true)}
          >
            Show
          </button>
        )}

        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

// Here we are giving power to About Section to control the "SHOW" and "HIDE" state of the About Section

const About = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showContact: false,
    showJoin: false,
  });
  return (
    <>
      <h1 className="p-2 m-2 text-3xl font-bold">About Us</h1>
      {/* <Section /> */}
      <Section
        title={"About Us"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showContact: false,
            showJoin: false,
          })
        }
      />
      <Section
        title={"Contact Us"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition"
        }
        isVisible={sectionConfig.showContact}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showContact: true,
            showJoin: false,
          })
        }
      />
      <Section
        title={"Join Us"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition"
        }
        isVisible={sectionConfig.showJoin}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showContact: false,
            showJoin: true,
          })
        }
      />
    </>
  );
};

export default About;
