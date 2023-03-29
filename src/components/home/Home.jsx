import React, { useState } from "react";
import "./home.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Transition from "../transition/Transition";
import gsap from "gsap";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const carouselVariants = {
  enter: { opacity: 0, x: 0 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const carouselItems = [
  {
    id: 1,
    content: (
      <div>
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
              <RiDoubleQuotesL color="#ecba5a" /> Anhur Enterprises has exceeded
              my expectations in providing top-notch copyrighting services.
              Their team of expert writers delivered high-quality, engaging
              content tailored to my brand's voice and target audience. They
              consistently met deadlines and demonstrated a deep understanding
              of the nuances of copyright laws. I highly recommend Anhur
              Enterprises for anyone seeking creative and legally sound content.{" "}
              <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </div>
    ),
  },

  {
    id: 2,
    content: (
      <div>
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
              <RiDoubleQuotesL color="#ecba5a" /> I recently consulted Anhur
              Enterprises for assistance with critical business decision-making,
              and I couldn't be happier with the results. Their team of
              experienced professionals provided valuable insights and strategic
              guidance, allowing me to make informed decisions that have
              positively impacted my business's growth. Anhur Enterprises'
              commitment to data-driven analysis and personalized attention sets
              them apart in the industry <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div>
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
              <RiDoubleQuotesL color="#ecba5a" /> The digital marketing services
              provided by Anhur Enterprises have been transformative for my
              business. With a holistic strategy encompassing SEO, social media
              management, and content marketing, they have substantially boosted
              our online reach and yielded remarkable outcomes. The Anhur
              Enterprises team is not only responsive and well-informed but also
              committed to staying abreast of the most recent trends in online
              marketing. I wholeheartedly endorse their services for any
              organization seeking to elevate their online presence and increase
              revenue.
              <RiDoubleQuotesR color="#ecba5a" />
            </h1>
          </div>
          <RiDoubleQuotesL className="p-ab" />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [currentItem, setCurrentItem] = useState(0);
  const [abref, inView] = useInView();

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

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -10000) handleNextItem();
    else swipe > 10000;
    {
      handlePrevItem();
    }
  };

  return (
    <main className="home">
      <section className="main">
        <AnimatePresence>
          <div className="main-title">
            <motion.h1
              initial={{ y: 40, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="main-t"
            >
              <b>Elevate Your Brand </b>With Premium{" "}
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="main-t"
            >
              Services That We Offer.
            </motion.h1>
          </div>
          <div className="main-img-con">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="main-img"
            ></motion.div>
          </div>
        </AnimatePresence>
      </section>
      <section className="about" ref={abref}>
        <h1 className="about-title">About Us</h1>
        <motion.p className="about-p">
          At Anhur Enterprises, we are dedicated to providing top-quality
          services to help our clients succeed. Our team of experts works
          seamlessly to exceed your expectations and meet your evolving needs.
          We are committed to delivering excellence in digital marketing,
          product photography, copywriting, and more. Our mission is to provide
          you with premium services that will help you achieve your business
          objectives and thrive in a competitive environment.
        </motion.p>
      </section>

      <section className="testm">
        <div className="testm-title">
          <h1 className="testm-t">What Others Say </h1>
          <h1 className="testm-t">
            <b>About Us</b>
          </h1>
        </div>
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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
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
