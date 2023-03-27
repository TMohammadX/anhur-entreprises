import React, { useState, useEffect } from "react";
import "./book.css";
import Transition from "../transition/Transition";
import gsap from "gsap";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import { SiMaildotru } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Book(e) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    const isValid = validateInputs();
    if (!isValid) {
      return;
    }
    setSent(true);
    setSending(true);

    emailjs
      .sendForm(
        "service_jf8nza9",
        "template_stv1zyc",
        e.target,
        "qe_5QnRhPOV92GdYp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, there was an error sending your message. Please try again later."
          );
        }
      );
    setTimeout(() => {
      setSending(false);
      sent(true);
    }, 2000);
  }

  const handleExpired = () => {
    setIsVerified(false);
    // disable submit button
    document.getElementById("submit-btn").Disabled = true;
  };

  function validateInputs() {
    if (!name) {
      alert("Please enter your name");
      return false;
    }

    if (!email) {
      alert("Please enter your email");
      return false;
    }

    if (!message) {
      alert("Please enter your message");
      return false;
    }

    return true;
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastNameChange(e) {
    setName1(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (location.pathname === "/getstarted") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1250);
    }
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      {loading ? (
        <Transition />
      ) : (
        <div className="book">
          <div className="book-info">
            <div className="book-title">
              <h1 className="book-t">Let's Get Started</h1>
              <h1 className="book-t">Tell Us About Your Project.</h1>
            </div>
            <p className="book-p">Let's Make Something Happen Together!</p>
            <div className="book-social">
              <h1 className="book-social-title">Email Us</h1>
              <div className="book-social-con">
                <SiMaildotru size="2vw" />
                <h1
                  className="book-social-text"
                  role="link"
                  href="mailto:info@anhurenterprises.com"
                >
                  info@anhurenterprises.com
                </h1>
              </div>
            </div>
          </div>
          <form className="book-box" onSubmit={sendEmail}>
            <div className="book-inputs-left">
              <input
                name="from_name"
                type="text"
                className="book-input"
                placeholder="First Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                name="from_last_name"
                type="text"
                className="book-input"
                placeholder="Last Name"
                value={name1}
                onChange={handleLastNameChange}
              />
            </div>
            <input
              name="from_email"
              type="email"
              className="book-input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              name="number"
              type="tel"
              className="book-input"
              placeholder="Number"
            />
            <input
              name="services"
              type="text"
              className="book-input"
              placeholder="Subject"
            />
            <input
              name="message"
              type="text"
              className="book-input"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              className="submit"
              id="submit-btn"
              type="submit"
              value="Send"
            >
              {sending ? (
                <span>...</span>
              ) : sent ? (
                <span>&#10004;</span>
              ) : (
                <span>submit</span>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
