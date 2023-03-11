import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side">
      <div className="sideBar grid">
        <div className="logDiv flex">
          <img
            src="https://static.otta.com/uploads/images/company-logos/5352-JccWiuWyxvYCCLa3HkJovMa-iG_1e49Y3tN48prSO8c.png"
            width={"100px"}
          ></img>
          <hr />
        </div>
        <div>
          <h6>Manage</h6>
          <ul>
            <li className="list active">
              <a href="#" className="flex">
                <span>Proxy</span>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span>Balance</span>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span>Online Check</span>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <span>Affilate system</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>
              <a>
                <span>Tickets</span>
              </a>
            </li>
            <li>
              <a>
                <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
