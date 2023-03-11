import "./BottomData.css";
const BottomData = () => {
  return (
    <div className="bottomBox-container1">
      <h3 style={{ marginBottom: "0px", paddingBottom:'15px', paddingTop:'10px'}}>Transactions</h3>
      <div className="bottomBox-container">
        <div className="grid-item">
          <ul>
            <p>Data and Time</p>
            <li>
              <a className="#">
                <span>17 feb 2020, 16:30</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>17 feb 2020, 16:30</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>17 feb 2020, 16:30</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>17 feb 2020, 16:30</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-item">
          <ul>
            <p>Payment</p>
            <li>
              <a className="#">
                <img
                  src="data:image/png;base64,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"
                  height={"20px"}
                ></img>
                <span>MasterCard</span>
              </a>
            </li>
            <li>
              <a className="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                  height={"20px"}
                ></img>
                <span>Paypal</span>
              </a>
            </li>
            <li>
              <a className="#">
                <img
                  src="https://companieslogo.com/img/orig/QIWI.ME-a01e9f99.png?t=1602681009"
                  height={"20px"}
                ></img>
                <span>Qiwi</span>
              </a>
            </li>
            <li>
              <a className="#">
                <img
                  src="https://pngimg.com/d/webmoney_PNG17.png"
                  height={"20px "}
                ></img>
                <span>WebMoney</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <ul>
            <p>Status</p>
            <li>
              <a className="#">
                <span>Pending</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>pending</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>Done</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>Pending</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-item">
          <ul>
            <p>Ammount($)</p>
            <li>
              <a className="#">
                <span>-400.00$</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>-250.00$</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>+1000.00$</span>
              </a>
            </li>
            <li>
              <a className="#">
                <span>-250.00$</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomData;
