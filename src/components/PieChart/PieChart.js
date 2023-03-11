import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./PieChart.css";
window.Chart = ChartJS;
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Spent   |", "Referal"],
    datasets: [
      {
        label: "Poll",
        data: [5, 10, 4],
        backgroundColor: ["#ADD8E6", "blue", "white"],
        innerRadius: ["10px"],
        cutout: "70%",
        borderRadius: 30,
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `$ 1850`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <div className="pieChart">
      <h6>Balance and stats</h6>
      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
    </div>
  );
};

export default PieChart;
