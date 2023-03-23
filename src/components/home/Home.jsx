import React, { useState } from "react";
import "./home.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Transition from "../transition/Transition";
import gsap from "gsap";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const carouselVariants = {
  enter: { opacity: 0, x: 0 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const carouselItems = [
  {
    id: 1,
    content: (
      <>
        <div>
          <div className="p-con">
            <div className="p-img"></div>
            <div className="p-name-in">
              <h1 className="p-name">Mitch Dan</h1>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="p-text">
            <h1 className="p-text-title">
              <RiDoubleQuotesL color="#ecba5a" /> I recently used a copyrighting
              service for my business and was blown away by the results. The
              team was extremely professional and easy to work with, and they
              were able to deliver high-quality copyrighting that perfectly
              captured the voice and tone of my brand. Their attention to detail
              was exceptional, and they made sure that every word was carefully
              crafted to effectively communicate my message to my target
              audience. <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </>
    ),
  },

  {
    id: 2,
    content: (
      <>
        <div>
          <div className="p-con">
            <div className="p-img1"></div>
            <div className="p-name-in">
              <h1 className="p-name">Alen Trinon</h1>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="p-text">
            <h1 className="p-text-title">
              <RiDoubleQuotesL color="#ecba5a" /> I recently had the pleasure of
              working with Anhur Enterprises for a consultation on my small
              business. Their team was incredibly knowledgeable and provided me
              with valuable insights and recommendations that have helped me to
              improve my operations and increase my profits. What I appreciated
              most about working with Anhur Enterprises was their personalized
              approach. They took the time to understand my unique business
              needs and goals, and tailored their recommendations accordingly.
              audience. <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <div>
          <div className="p-con">
            <div className="p-img2"></div>
            <div className="p-name-in">
              <h1 className="p-name">Jamie Fahre</h1>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="p-text">
            <h1 className="p-text-title">
              <RiDoubleQuotesL color="#ecba5a" /> I recently used a copyrighting
              service for my business and was blown away by the results. The
              team was extremely professional and easy to work with, and they
              were able to deliver high-quality copyrighting that perfectly
              captured the voice and tone of my brand. Their attention to detail
              was exceptional, and they made sure that every word was carefully
              crafted to effectively communicate my message to my target
              audience. <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </>
    ),
  },
];

export default function Home() {
  const [currentItem, setCurrentItem] = useState(0);

  const handleNextItem = () => {
    setCurrentItem(
      currentItem === carouselItems.length - 1 ? 0 : currentItem + 1
    );
  };

  const handlePrevItem = () => {
    setCurrentItem(
      currentItem === 0 ? carouselItems.length - 1 : currentItem - 1
    );
  };

  return (
    <main className="home">
      <section className="main">
        <motion.h1 className="main-title">
          <motion.span
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            <b>Elevate Your Brand </b>With Premium{" "}
          </motion.span>
          <br />
          <span>Services That We Offer.</span>
        </motion.h1>
        <div className="main-img-con">
          <div className="main-img"></div>
        </div>
      </section>
      <section className="about">
        <h1 className="about-title">- About</h1>
        <p className="about-p">
          At Anhur Enterprises, we are dedicated to providing top-quality
          services to help our clients succeed. Our team of experts works
          seamlessly to exceed your expectations and meet your evolving needs.
          We are committed to delivering excellence in digital marketing,
          product photography, copywriting, and more. Our mission is to provide
          you with premium services that will help you achieve your business
          objectives and thrive in a competitive environment.
        </p>
      </section>
      <section className="testm">
        <h1 className="testm-title">Testemonials</h1>
        <div className="testm-in">
          <div className="testm-back" onClick={handlePrevItem}>
            <BsArrowLeftShort />
          </div>
          <div className="testm-test">
            <AnimatePresence wait initial={false}>
              <motion.div
                key={carouselItems[currentItem].id}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {carouselItems[currentItem].content}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="testm-front" onClick={handleNextItem}>
            <BsArrowRightShort />
          </div>
        </div>
      </section>
    </main>
  );
}
