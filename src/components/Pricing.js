import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";
const Pricing = () => {
  const [showDeveloper, setshowDeveloper] = useState(true);
  const [showExplorer, setshowExplorer] = useState(false);
  const [showVision, setshowVision] = useState(false);
  const data = {
    developerPack: {
      title: "DEVELOPER PACKAGE",
      body: "We’ve partnered with NVIDIA to offer a `Lander5` built around the Jetson AGX Xavier: a fast, efficient computing device, ideal for robotics development. The JETSON developer package takes advantage of NVIDIA’s standard hardware interfaces and graphics processing capabilities. Built around a powerful and compact GPU, the Jetson is the preferred computing platform for VSLAM, 3D imaging and machine learning applications.",
      price: "19.999",
      // currency: "EGP",
      img: "./Assets/trex wireframe.png",
    },
    explorerPack: {
      title: "EXPLORER PACKAGE",
      body: "The Lander5 Explorer Package is designed for basic autonomous operation in both indoor and outdoor environments. Applications range from GPS waypoint navigation with laser-based collision avoidance, to indoor mapping and path planning. A powerful Mini-ITX computer system comes pre-installed with Linux and ROS; all component ROS drivers are installed and pre-configured.",
      price: "24.999",
      // currency: "EGP",
      img: "./Assets/503Small.png",
    },
    visionPack: {
      title: "VISION PACKAGE",
      body: "The Lander5 Vision Package includes two front-facing FLIR Blackfly cameras for stereo vision, an upgraded GPU graphics card and a high performance computer. This package comes with a pre-installed CUDA toolkit, and is fully supported with ROS, RViz (visualization), and Gazebo (simulator).",
      price: "29.999",
      // currency: "EGP",
      img: "./Assets/602.png",
    },
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="./Assets/Component 4 – 2.png" alt="logo" />
          <img
            src="./Assets/logoTxt.png"
            alt="logoTxt"
            style={{ paddingBottom: "5px", marginLeft: "-5px" }}
          />
        </Link>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <motion.div className="pricing-content">
        <h1 style={{ color: "#c50000", margin: "20px 0" }}>Pricing</h1>
        <p>
          The preconfigured packages offer everything needed to get started
          quickly. <br /> Don’t see what you’re looking for? Visit our
          <span style={{ color: "#c50000" }}>
            sensors and components store{" "}
          </span>
          or <span style={{ color: "#c50000" }}>contact us.</span>
        </p>

        <motion.button
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ opacity: 1 }}
          className={showDeveloper ? "opened" : "EXPLORE"}
          onClick={() => {
            setshowDeveloper(true);
            setshowExplorer(false);
            setshowVision(false);
          }}
        >
          {showDeveloper ? AiFillCaretDown() : AiFillCaretRight()}DEVELOPER
          PACKAGE
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={showExplorer ? "opened" : "EXPLORE"}
          onClick={() => {
            setshowDeveloper(false);
            setshowExplorer(true);
            setshowVision(false);
          }}
        >
          {showExplorer ? AiFillCaretDown() : AiFillCaretRight()}EXPLORER
          PACKAGE
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          animate={{ opacity: 1 }}
          className={showVision ? "opened" : "EXPLORE"}
          onClick={() => {
            setshowDeveloper(false);
            setshowExplorer(false);
            setshowVision(true);
          }}
        >
          {showVision ? AiFillCaretDown() : AiFillCaretRight()}VISION PACKAGE
        </motion.button>

        <motion.div
          className="packages "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="package-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h3 className="title">
              {showDeveloper && data.developerPack.title}
              {showExplorer && data.explorerPack.title}
              {showVision && data.visionPack.title}
            </h3>
            <p className="packBody">
              {showDeveloper && data.developerPack.body}
              {showExplorer && data.explorerPack.body}
              {showVision && data.visionPack.body}
            </p>
            <h1 className="price">
              {showDeveloper && data.developerPack.price}
              {showExplorer && data.explorerPack.price}
              {showVision && data.visionPack.price}
            </h1>
            <button
              style={{
                background: "white",
                color: "red",
                border: "1px solid red",
                padding: "15px 60px",
                marginTop: "50px",
              }}
            >
              PURCHASE
            </button>
          </motion.div>
          {showDeveloper && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={data.developerPack.img}
              width="530px"
              alt=""
            />
          )}
          {showExplorer && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={data.explorerPack.img}
              width="530px"
              alt=""
            />
          )}
          {showVision && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={data.visionPack.img}
              width="530px"
              alt=""
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Pricing;
