import "./mainContent.css";

const MainContent = () => {
  return (
    <div className="boxmain">
      <div className="mainContent">
        <div>
          <h6 style={{ marginLeft: "10px" }}>Paypal</h6>
        </div>
        <div>
          <p style={{ marginRight: "10px" }}>1-5%</p>
        </div>
      </div>
      <div className="paypalImg">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
          height={"60px"}
        ></img>
      </div>
    </div>
  );
};

export default MainContent;
