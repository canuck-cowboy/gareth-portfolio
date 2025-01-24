import { useEffect, useState, useRef, useMemo } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar";
import StarfieldAnimation from "react-starfield-animation";

const StarfieldBackground = () => {
  return (
    <StarfieldAnimation
      numParticles={500}
      lineWidth={2.0}
      depth={800}
      alphaFactor={0.2}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();
  const contactArray = "Contact Me".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_garethnassar",
        "template_oirmjnm",
        form.current,
        "SpFz7H94lfpVEoNMW"
      )
      .then(
        () => {
          toast.success("Message successfully sent!", {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed to send the message, please try again", {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  // Memoizing the starfield to prevent unnecessary re-renders
  const starfield = useMemo(() => <StarfieldBackground />, []);

  return (
    <div className="contact-main">
      <Sidebar />
      {starfield}
      <div className="contact-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="contact-map-info-div">
          <div className="content-div">
            <div className="text-content">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={contactArray}
                  idx={15}
                />
              </h1>
              <p>
                I’m lookin’ to work with folks who ain’t afraid to take a leap and push the limits of
                what’s possible. If you’re as passionate about AI and Algorithms as I am, we can build 
                somethin’ great together. I’m all ears for fresh ideas, so if you need a hand, just give
                a holler—I’m only a message away!
              </p>
            </div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      value={formState.email}
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
                <ToastContainer className="toast-position" />
              </form>
            </div>
          </div>
          <div className="info-map">
            Gareth A. Nassar
            <br />
            1520 Queen St. E, P6A 2G4 <br />
            Sault Ste. Marie, Ontario <br />
            Canada
            <br />
          </div>
          <div className="map-wrap">
            <MapContainer center={[46.502421, -84.287392]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[46.502421, -84.287392]}>
                <Popup>
                  Here’s my homestead. The door’s always open, so come on in!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <span>
          <span className="tags-top body-tag">&lt;/body&gt;</span>
          <br />
          <span className="tags-bottom html-tag">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Contact;
