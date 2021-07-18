import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Dashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  return (
    <div>
      <div
        className="sidebarOpenerOnSmallScreen"
        onClick={() => setsidebarOpen(!sidebarOpen)}
      >
        {!sidebarOpen ? BiMenuAltLeft() : GrClose()}
      </div>
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
          <Link to="/pricing">Pricing</Link>
        </div>
      </nav>

      <div className="container">
        <div className={sidebarOpen ? "sidebar sidebarOpener" : "sidebar"}>
          <div className="smallScreenOnly" style={{ textAlign: "center" }}>
            <img src="./Assets/Component 4 – 2.png" alt="logo" />
          </div>
          <ul>
            <li>Dashboard</li>
            <li>Develop</li>
            <li>Upgrade</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="dashboard-content">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="card">
            <img
              src="./Assets/trex wireframe.png"
              width="200px"
              alt="transImg"
            />
            <div className="cardTxt">
              <h2>Connected</h2>
              <p>Model: LANDER5</p>
              <p>Serial: L3S5G-D8</p>
              <p>Duration: 3 hours</p>
            </div>
          </div>
          <div className="splitter">
            <div className="imgCard">
              <img src="./Assets/Group 33.png" alt="group33" />
            </div>
            <div className="sCard">
              <div className="sCard-title">Readings</div>
              <div className="sCard-Details">
                <div className="splitterr">
                  <p>Battery :</p>
                  <span className="det">55%</span>
                </div>
                <div className="splitterr">
                  <p>Voltage :</p>
                  <span className="det">48.6 V</span>
                </div>
                <div className="splitterr">
                  <p>Speed :</p>
                  <span className="det">3 m/s</span>
                </div>
                <div className="splitterr">
                  <p>Location :</p>
                  <span className="det">Cairo</span>
                </div>
                <div className="splitterr">
                  <p>Signal strength :</p>
                  <span className="det">77%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
