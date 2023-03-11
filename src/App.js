import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Chart from "./components/Chart/Chart";
import PieChart from "./components/PieChart/PieChart";
import BottomData from "./components/BottomData/BottomData";
import MainContent from "./components/MainContent/MainContent";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
function App() {
  return (
    <div>
      <div className="outer">
        <SideBar />
        <div className="container">
          <div className="chart_btdata">
            <Chart />
            <PieChart />
          </div>
          <div className="main">
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
          </div>
          <div className="dataAlign">
          <BottomData />
          <IncomeExpense/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
