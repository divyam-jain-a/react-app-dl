import React, { useState } from "react";
import "../style/DashboardWithContent.css";
import Settings from './Settings'

const DashboardWithContent = () => {
  const [settings, setSettings] = useState(false);

  const settingsHandler = () => {
    setSettings(true);
  };

  return (
    <>
      <div className="main-content">
        <div className="dashboard">
          <div className="dash-btngrp">
            <button className="dash-btn">Products</button>
            <button className="dash-btn">Demo Script</button>
            <button className="dash-btn">Customers</button>
            <button className="dash-btn">Sales Team</button>
            <button className="dash-btn">Demos</button>
            <button
              onClick={settingsHandler}
              value={settings}
              className="dash-btn"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="content">{settings && <Settings/>}</div>
      </div>
    </>
  );
};

export default DashboardWithContent;
