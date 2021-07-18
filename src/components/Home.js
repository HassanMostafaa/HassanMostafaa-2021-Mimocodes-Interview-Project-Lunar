import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const [showImg, setshowImg] = useState(true);
  return (
    <div className="Home">
      <div className="body">
        <nav>
          <Link to="/" className="logo">
            <img src="./Assets/Component 4 – 4.png" alt="" />
          </Link>
          <div className="menu">
            <Link to="/pricing">Pricing</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <div className="hero">
          <div className="content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="content-text"
              style={{ textAlign: !showImg ? "center" : "" }}
            >
              <p className="title">LUNAR ROBOTICS</p>
              <h1>
                BOLDLY GO WHERE NO <br /> ROBOT HAS GONE BEFORE
              </h1>
              <p>
                We build the world’s best robot development platforms.
                Developing autonomous robots has never been easier.
              </p>
              <button className="EXPLORE">EXPLORE OUR ROBOTS</button>
              <button className="TALK">TALK TO A HUMAN</button> <br />
              <div className="arrows">
                <button onClick={() => setshowImg(!showImg)}>
                  {MdKeyboardArrowLeft()}
                </button>
                <button onClick={() => setshowImg(!showImg)}>
                  {MdKeyboardArrowRight()}
                </button>
              </div>
            </motion.div>
            {showImg ? <img src="./Assets/503.png" alt="503Model" /> : ""}
          </div>
        </div>

        <div className="mediaIcons">
          <div
            className="youtube"
            onClick={() => (window.location.href = "https://www.youtube.com")}
          >
            {AiFillYoutube()}
          </div>
          <div
            className="facebook"
            onClick={() => (window.location.href = "https://www.facebook.com")}
          >
            {FaFacebookF()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
